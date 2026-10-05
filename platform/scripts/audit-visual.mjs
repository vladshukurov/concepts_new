/* Визуальный аудит собранного концепта.
 *
 * Линтер смотрит в разметку и CSS, тест — в переходы и доступы. Между ними
 * живёт целый класс дефектов, который виден только после раскладки: рамка
 * агента у <button class="row">, растянутое флексом превью, срезанный кнопкой
 * контент, шрифт мельче минимума, утёкший со страницы стиль заголовка.
 * Все они уже случались, и все прошли и линтер, и тест, и беглый взгляд на PNG.
 *
 *   node scripts/audit-visual.mjs [slug ...]
 */
import { chromium } from 'playwright';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { DIST, listConcepts, readSpec } from './lib.mjs';

const MIN_FONT = 11;      // ios-chrome.md §8: «минимум читаемого текста — 11 pt»
const MIN_TAP = 44;       // HIG
const W = 375, H = 812;

/** Что проверяем внутри одного экрана. Выполняется в браузере. */
function probe(scr, cfg) {
  const dev = document.querySelector('.device');
  const s = dev.querySelector('[data-screen="' + scr + '"]');
  if (!s) return [{ kind: 'no-screen', what: scr }];
  dev.querySelectorAll('[data-screen]').forEach((e) => e.classList.remove('is-on'));
  s.classList.add('is-on');
  s.querySelectorAll('.perm-hidden').forEach((e) => (e.dataset.auditHidden = '1'));

  const base = dev.getBoundingClientRect();
  const out = [];
  const label = (el) => {
    const t = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 42);
    const c = el.className.toString().split(' ').slice(0, 2).join('.');
    return (c ? '.' + c : el.tagName.toLowerCase()) + (t ? ' «' + t + '»' : '');
  };

  const els = [...s.querySelectorAll('*')];
  for (const el of els) {
    if (el.closest('.perm-hidden')) continue;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || !r.width || !r.height) continue;
    const top = r.top - base.top, left = r.left - base.left;
    const bottom = top + r.height, right = left + r.width;
    const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());

    // 1. рамка агента у кнопки-строки
    if (el.tagName === 'BUTTON' && cs.borderTopWidth !== '0px' && cs.borderTopStyle !== 'none'
        && !el.matches('.cam-shutter, .pt-shutter, .otp-cell')) {
      out.push({ kind: 'button-border', what: label(el), detail: cs.borderTopWidth + ' ' + cs.borderTopStyle });
    }
    // 2а. текст, слившийся с подложкой
    //     Светлый текст на белой карточке внутри тёмного экрана виден только
    //     глазами на PNG: линтер про цвета ничего не знает, а тест кликает.
    //     Текст поверх фотографии, градиента или с тенью не считаем: там
    //     подложка не сплошная и вычислить её нечем.
    /* Подпись только для скринридера (clip в точку, бокс в пиксель) визуально
       не существует: у неё нет ни подложки, ни контраста, который можно
       оценить глазами. Такие узлы проверка контраста пропускает. */
    const srOnly = r.width <= 2 || r.height <= 2 || cs.clip === 'rect(0px, 0px, 0px, 0px)';
    if (own && !srOnly) {
      /* rgb() отдаёт 0–255, а color(srgb …) от color-mix — доли: без нормализации
         светлая подложка читается как чёрная и проверка врёт. */
      const nums = (v) => {
        const raw = (v.match(/[\d.]+/g) || []).map(Number);
        if (/^color\(/.test(v)) return raw.slice(0, 3).map((x) => Math.round(x * 255)).concat(raw.slice(3));
        return raw;
      };
      const lum = ([r, g, b]) => {
        const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
        return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
      };
      /* Подложка складывается из слоёв: полупрозрачная плашка поверх серого
         плейсхолдера читается иначе, чем каждый слой по отдельности. */
      let overMedia = cs.textShadow !== 'none';
      const layers = [];
      for (let a = el; a && a !== s && !overMedia; a = a.parentElement) {
        const c = getComputedStyle(a);
        if (c.backgroundImage && c.backgroundImage !== 'none') { overMedia = true; break; }
        const v = nums(c.backgroundColor);
        if (v.length < 3) continue;
        const alpha = v[3] ?? 1;
        if (alpha <= 0.01) continue;
        layers.unshift({ rgb: v.slice(0, 3), alpha });
        if (alpha >= 0.99) break;
      }
      let bg = null;
      if (layers.length && layers[0].alpha >= 0.99) {
        bg = layers[0].rgb;
        for (const l of layers.slice(1)) bg = bg.map((c, i) => l.rgb[i] * l.alpha + c * (1 - l.alpha));
      }
      if (bg && !overMedia) {
        const fg = nums(cs.color).slice(0, 3);
        if (fg.length === 3) {
          const l1 = lum(fg), l2 = lum(bg);
          const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
          if (ratio < 1.8) out.push({ kind: 'low-contrast', what: label(el), detail: ratio.toFixed(2) + ':1' });
        }
      }
    }
    // 2. мелкий шрифт на видимом тексте
    if (own) {
      const px = parseFloat(cs.fontSize);
      // .tab-label — системные 10 pt из HIG, это не нарушение шкалы
      if (px < cfg.minFont && !el.matches('.tab-label, .dur')) out.push({ kind: 'tiny-font', what: label(el), detail: px + 'px' });
    }
    // 3. текст, который не поместился
    /* В шапке чата и в карточках вбок многоточие — норма ВК: имя длинное, место узкое */
    if (own && cs.textOverflow === 'ellipsis' && el.scrollWidth > el.clientWidth + 1 && !el.closest('.ui-chat-who, .ui-hcell')) {
      out.push({ kind: 'truncated', what: label(el), detail: el.scrollWidth + '>' + el.clientWidth });
    }
    // 4. вылез за края устройства по горизонтали
    // (ленты чипов и каруселей скроллятся вбок — это не выход за края)
    let inScrollX = false;
    for (let a = el.parentElement; a && a !== s; a = a.parentElement) {
      const o = getComputedStyle(a).overflowX;
      if ((o === 'auto' || o === 'scroll') && a.scrollWidth > a.clientWidth + 1) { inScrollX = true; break; }
    }
    if (!inScrollX && (left < -1 || right > cfg.w + 1)) {
      out.push({ kind: 'overflow-x', what: label(el), detail: Math.round(left) + '…' + Math.round(right) });
    }
    // 5. интерактив мельче хит-таргета (без .tap, который добивает область)
    if (el.matches('[data-go],[data-ask],[data-back],[data-activate],[data-jump],[data-toast]')
        && !el.classList.contains('tap') && (r.height < cfg.minTap - .5 || r.width < cfg.minTap - .5)) {
      out.push({ kind: 'small-tap', what: label(el), detail: Math.round(r.width) + '×' + Math.round(r.height) });
    }
  }

  if (cfg.uiV3) {
    const primary = [...s.querySelectorAll('[data-primary]')].filter((el) => {
      const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
      return r.width && r.height && cs.display !== 'none' && cs.visibility !== 'hidden';
    });
    if (cfg.primaryAction && primary.length !== 1) out.push({ kind: 'primary-count', what: scr, detail: `найдено ${primary.length}` });
    const bars = s.querySelectorAll('.tabbar').length;
    if (cfg.navigation === 'root' && bars !== 1) out.push({ kind: 'tabbar-contract', what: scr, detail: `root: tabbar ${bars}` });
    if (cfg.navigation !== 'root' && bars) out.push({ kind: 'tabbar-contract', what: scr, detail: `${cfg.navigation}: tabbar ${bars}` });
    if (cfg.navigation === 'root' && bars === 1) {
      const bar = s.querySelector('.tabbar');
      const br = bar.getBoundingClientRect();
      const bottomGap = Math.round(base.bottom - br.bottom);
      if (Math.abs(bottomGap) > 1) {
        out.push({ kind: 'floating-tabbar', what: scr, detail: `${bottomGap}px до нижней границы` });
      }
      const content = bar.previousElementSibling;
      if (content) {
        const cr = content.getBoundingClientRect();
        const contentGap = Math.round(br.top - cr.bottom);
        if (Math.abs(contentGap) > 2) {
          out.push({ kind: 'root-layout-gap', what: label(content), detail: `${contentGap}px перед tabbar` });
        }
      }
    }

    /* Текстовый символ внутри кнопки-иконки почти всегда означает временный
       плейсхолдер (+, ⋯, ⌕), который случайно дошёл до финального UI. */
    for (const button of s.querySelectorAll('button[class*="icon"],button[class*="Icon"]')) {
      const ownText = [...button.childNodes]
        .filter((node) => node.nodeType === 3)
        .map((node) => node.textContent.trim())
        .join('');
      if (ownText && !button.querySelector('svg,img')) {
        out.push({ kind: 'text-icon', what: label(button), detail: `символ «${ownText.slice(0, 6)}»` });
      }
    }

    for (const el of s.querySelectorAll('.card,.ios-card,.tile,[class*="-card"]')) {
      const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
      if (r.height < 220 || cs.display === 'none') continue;
      const text = (el.textContent || '').trim().replace(/\s+/g, ' ');
      const hasMedia = el.querySelector('img,video,canvas') || (cs.backgroundImage && cs.backgroundImage !== 'none');
      if (text.length < 32 && !hasMedia) out.push({ kind: 'empty-monolith', what: label(el), detail: `${Math.round(r.height)}px / ${text.length} chars` });
    }
  }

  // 6. подписи одного списка, написанные по одному шаблону
  //
  // Таблица данных ОБЯЗАНА быть однородной: «41 сторона · 1907–1928» рядом с
  // «27 сторонъ · 1910–1924» — это правильно. Слоп начинается там, где по
  // шаблону написана ПРОЗА: «Опушки · звонкая трель», «Подлесок · нисходящая
  // трель», «Кустарник · флейтовый напев» — три строки, отличающиеся только
  // эпитетом. Поэтому цифры из проверки исключены: их наличие и есть признак
  // строки данных.
  const shape = (t) => t
    .replace(/[«»"'(),.—–-]/g, ' ')
    .trim()
    .split(/\s+/)
    .map((w) => (/^[·|/]$/.test(w) ? w : 'W'))
    .join('');
  for (const list of s.querySelectorAll('.pt-list,.ios-list,.rh-card,.rk-card,.d-card,ul,ol')) {
    const subs = [...list.children]
      .map((row) => [...row.querySelectorAll('span,small,.t-footnote,.rh-ft,.t-caption')]
        .map((e) => (e.textContent || '').trim())
        .find((t) => t.length > 8 && t.length < 64 && /[а-яё]/i.test(t) && !/\d/.test(t)))
      .filter(Boolean);
    if (subs.length < 3) continue;
    const groups = {};
    for (const t of subs) (groups[shape(t)] ??= []).push(t);
    for (const [sh, list2] of Object.entries(groups)) {
      // Пара из двух слов («Kolos · матовый») — почти всегда данные, а не проза.
      // Одинаковые строки — это повторённый контрол («Копировать»), тоже не проза.
      const words = (sh.match(/W/g) || []).length;
      const identical = new Set(list2).size === 1;
      if (list2.length >= 3 && words >= 3 && !identical) {
        out.push({ kind: 'formula-prose', what: list2.slice(0, 3).join(' | '), detail: '×' + list2.length });
      }
    }
  }

  // 8–13. Правила интерфейса портфеля (CLAUDE.md → «Правила интерфейса»).
  //       Раньше жили только в голове ревьюера; каждое уже стоило правки.
  const JARGON = /\b(?:app|group|com)\.[a-z]+\.[a-z][\w.]*|BGTask|App Group|Keychain|entitlement|bundle id|фонов(?:ая|ые|ой) задач|задача запущена|журнал задач|последний запуск|\bкэш|снимок виджета|silent push|тих(?:ий|ие) пуш/i;
  const EXPLAINER = /(кадр|фото|снимок|видео|данные|файл\S*)\s+не\s+(сохраня|отправля|загружа|покида|ухо)|(обработ\S*|хран\S*|оста[ёе]тся|анализ\S*)\s+на устройстве|как используются|доступ только к|по геопозиции|без отслеживания между|(камер\S*|фото|микрофон\S*|геопозиц\S*|доступ\S*)\s+(нужн\S*|требу\S*)|работают без н/i;
  const CAPS_OK = /^(ВК|ОК|СМС|МКАД|РФ|США|ТВ|ИП|ООО|ВУЗ|ГИБДД|ЖКХ|МФЦ|ПДД|ЕГЭ|ОГЭ|СНТ|ДНТ|ТСЖ|ЖК|ПВЗ|ТЦ|ДТП|ОСАГО|КАСКО|НДФЛ|ИНН|СНИЛС|ОМС|ДМС|МГУ|СПБ)$/;
  const lumOf = (v) => {
    const raw = (v.match(/[\d.]+/g) || []).map(Number);
    const rgb = /^color\(/.test(v) ? raw.slice(0, 3).map((x) => x * 255) : raw.slice(0, 3);
    const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
    return { rgb, a: raw[3] ?? 1, l: 0.2126 * f(rgb[0]) + 0.7152 * f(rgb[1]) + 0.0722 * f(rgb[2]) };
  };
  const brandFill = (rgb) => Math.abs(rgb[0] - 0) < 3 && Math.abs(rgb[1] - 119) < 3 && Math.abs(rgb[2] - 255) < 3
    || Math.abs(rgb[0] - 255) < 3 && Math.abs(rgb[1] - 119) < 3 && Math.abs(rgb[2] - 0) < 3;
  for (const el of els) {
    if (el.closest('.perm-hidden')) continue;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || !r.width || !r.height) continue;
    const ownText = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join(' ').replace(/\s+/g, ' ').trim();
    const srOnly = r.width <= 2 || r.height <= 2 || cs.clip === 'rect(0px, 0px, 0px, 0px)';
    if (ownText && !srOnly) {
      // 8. капс: ни text-transform, ни набранный капсом текст
      if (cs.textTransform === 'uppercase') out.push({ kind: 'caps', what: label(el), detail: 'text-transform' });
      const caps = (ownText.match(/[А-ЯЁа-яё]{3,}/g) || []).filter((w) => w === w.toUpperCase() && !CAPS_OK.test(w));
      if (caps.length) out.push({ kind: 'caps', what: label(el), detail: caps[0] });
      // 9. точка в конце фразы
      if (/[^.…]\.$/.test(ownText)) out.push({ kind: 'trailing-period', what: label(el) });
      // 10. интерфейс объясняет доступы
      if (EXPLAINER.test(ownText)) out.push({ kind: 'permission-explainer', what: label(el) });
      /* Технический жаргон: человек видит устройство продукта вместо его результата */
      if (JARGON.test(ownText)) out.push({ kind: 'tech-jargon', what: label(el), detail: ownText.match(JARGON)[0] });
      // 13. контраст текста ниже AA (крупный текст — от 3:1)
      const fg = lumOf(cs.color);
      let bgColor = null, overMedia = cs.textShadow !== 'none';
      for (let a = el; a && a !== s.parentElement; a = a.parentElement) {
        const c = getComputedStyle(a);
        if (c.backgroundImage && c.backgroundImage !== 'none') { overMedia = true; break; }
        const b = lumOf(c.backgroundColor);
        if (b.rgb.length === 3 && b.a >= 0.99) { bgColor = b; break; }
      }
      if (bgColor && !overMedia && fg.rgb.length === 3 && fg.a >= 0.99) {
        const ratio = (Math.max(fg.l, bgColor.l) + 0.05) / (Math.min(fg.l, bgColor.l) + 0.05);
        const px = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight, 10) >= 600;
        const need = px >= 24 || (px >= 18.66 && bold) ? 3 : 4.5;
        /* Белый на фирменной заливке (#0077FF ВК, #FF7700 ОК) — 4.1:1 и 2.7:1.
           Это цвет бренда на главной кнопке, осознанное исключение. */
        const whiteOnBrand = fg.l > 0.95 && brandFill(bgColor.rgb);
        if (ratio < need && ratio >= 1.8 && !whiteOnBrand) out.push({ kind: 'contrast-aa', what: label(el), detail: ratio.toFixed(2) + ':1 < ' + need });
      }
    }
    // 9б. точка в конце тоста и подписи для скринридера
    for (const attr of ['data-toast', 'aria-label']) {
      const v = (el.getAttribute(attr) || '').trim();
      if (/[^.…]\.$/.test(v)) out.push({ kind: 'trailing-period', what: label(el), detail: attr });
    }
    // 11а. play, который нельзя нажать: иконка воспроизведения вне кнопки и без перехода
    if (el.matches('.ui-play, .vkd-play') && !el.closest('button, a, [data-go], [data-ask], [data-activate], [data-toast], [data-back]')) {
      out.push({ kind: 'fake-control', what: label(el), detail: 'play без действия' });
    }
    // 11. контрол-пустышка: фильтр или чипс, который только показывает тост
    if (el.matches('[class*="chip"],[class*="filter"],[class*="pill"],[class*="seg"]')
        && el.hasAttribute('data-toast') && !el.matches('[data-go],[data-ask],[data-activate],[data-back]')) {
      out.push({ kind: 'fake-control', what: label(el), detail: 'только тост' });
    }
    // 12. вложенные скругления: внешний радиус ≥ внутренний + зазор
    const rin = parseFloat(cs.borderTopLeftRadius);
    if (rin > 0 && rin < Math.min(r.width, r.height) / 2 - 1) {
      for (let a = el.parentElement, depth = 0; a && a !== s && depth < 4; a = a.parentElement, depth++) {
        const ac = getComputedStyle(a);
        const rout = parseFloat(ac.borderTopLeftRadius);
        if (!rout) continue;
        const ar = a.getBoundingClientRect();
        const gx = r.left - ar.left, gy = r.top - ar.top;
        /* Считаем только «карточку с внутренним отступом»: ребёнок стоит ровно
           на паддинге родителя, углы концентричны. */
        const padOk = Math.abs(parseFloat(ac.paddingLeft) - gx) <= 1.5 && Math.abs(parseFloat(ac.paddingTop) - gy) <= 1.5;
        if (padOk && gx >= 0 && gy >= 0 && gx <= 24 && Math.abs(gx - gy) <= 2 && ac.overflow !== 'hidden') {
          const gap = Math.min(gx, gy);
          /* Концентричность важна, пока зазор не больше внешнего радиуса:
             дальше углы уже не читаются как пара. */
          if (rin > rout + 0.5 || (gap > 0 && gap <= rout && rout + 3 < rin + gap)) out.push({ kind: 'radius-nesting', what: label(el), detail: `внутри ${rin}, снаружи ${rout}, зазор ${Math.round(gap)} → нужно ≈${Math.round(rin + gap)}` });
        }
        break;
      }
    }
  }

  // 14. в шапке экрана — только иконки и текстовые кнопки, не залитые кнопки
  for (const b of s.querySelectorAll(':is(.ui-large, .ui-top, .ui-nav) .ui-btn')) out.push({ kind: 'topbar-button', what: label(b) });

  // 15. светлая тема: контент — белые секции на сером. Свой блок прямо на сером
  // фоне страницы и серая плашка внутри белой секции читаются как «серые куски».
  if (s.matches('.ui.vk-light, .ui.ok-light')) {
    const bgOf = (el) => getComputedStyle(el).backgroundColor;
    const clear = (c) => c === 'rgba(0, 0, 0, 0)' || c === 'transparent';
    const white = (c) => c === 'rgb(255, 255, 255)';
    for (const sc of s.querySelectorAll('.ui-scroll')) {
      const full = sc.getBoundingClientRect().width;
      for (const el of sc.children) {
        const r = el.getBoundingClientRect();
        if (r.height < 24 || el.matches('.ui-sec, .ui-large, .ui-top, .ui-stories, .ui-post, .ui-prompt, .perm-hidden, .ui-group-label, .ui-group, .ui-foot, .ui-chat')) continue;
        if (!el.textContent.trim()) continue; // медиа во всю ширину — фото, сетка кадров
        const bg = bgOf(el);
        if (clear(bg) || (!white(bg) && r.width < full - 1)) out.push({ kind: 'on-gray', what: label(el), detail: clear(bg) ? 'без подложки' : 'цветная плашка на сером' });
      }
    }
    const card2 = getComputedStyle(s).getPropertyValue('--ui-card-2').trim();
    const probe = document.createElement('i'); probe.style.color = card2; s.append(probe);
    const gray = getComputedStyle(probe).color; probe.remove();
    for (const el of s.querySelectorAll('.ui-sec *, .ui-post *')) {
      if (el.matches('button, .ui-btn, .ui-stat, .ui-search, .ui-chip, .ui-chips *, .ui-seg, .ui-seg *, .ui-thumb, .ph, [class*="ph "], .ui-lead, .ui-avatar, .ui-progress, .ui-progress *, .ui-switch, .ui-switch *, .ui-story-face, .ui-composer *, .ui-bubble, .ui-bubble *')) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 120 || r.height < 40) continue;
      if (bgOf(el) === gray && !el.closest('.ui-group')) out.push({ kind: 'gray-in-white', what: label(el) });
    }
  }

  // 7. прижатый к низу блок перекрывает конец прокрутки
  const dock = s.querySelector('.rh-dock, .cta-col, .pt-dock, .state-foot, .sheet-footer');
  const scroll = s.querySelector('.body-scroll, .rh-scroll');
  if (dock && scroll) {
    const d = dock.getBoundingClientRect(), sc = scroll.getBoundingClientRect();
    if (d.top < sc.bottom - 2 && getComputedStyle(dock).position === 'absolute') {
      out.push({ kind: 'dock-overlap', what: label(dock), detail: 'перекрывает конец списка' });
    }
  }
  return out;
}

const KIND = {
  'no-screen': 'экран не найден',
  'button-border': 'рамка агента у кнопки',
  'tiny-font': 'шрифт мельче минимума',
  truncated: 'текст усечён',
  'overflow-x': 'вылезает за края',
  'small-tap': 'хит-таргет < 44',
  'dock-overlap': 'подвал перекрывает список',
  'formula-prose': 'подписи по одному шаблону',
  'primary-count': 'главное действие не единственное',
  'tabbar-contract': 'нарушен контракт навигации',
  'floating-tabbar': 'tabbar не закреплён у нижней границы',
  'root-layout-gap': 'разрыв между контентом и tabbar',
  'text-icon': 'текстовый символ вместо иконки',
  'empty-monolith': 'крупный малосодержательный блок',
  caps: 'капс',
  'trailing-period': 'точка в конце фразы',
  'permission-explainer': 'интерфейс объясняет доступы',
  'tech-jargon': 'технический жаргон в интерфейсе',
  'fake-control': 'контрол-пустышка',
  'radius-nesting': 'вложенные скругления не по формуле',
  'contrast-aa': 'контраст текста ниже AA',
  'topbar-button': 'кнопка в шапке вместо иконки',
  'on-gray': 'блок лежит на сером фоне, а не в белой секции',
  'gray-in-white': 'серая плашка внутри белой секции',
};

const slugs = process.argv.slice(2).length ? process.argv.slice(2) : listConcepts();
const browser = await chromium.launch();
let total = 0;
const HEURISTIC_ONLY = new Set(['button-border', 'formula-prose', 'empty-monolith']);

for (const slug of slugs) {
  const spec = readSpec(slug);
  const file = join(DIST, slug, 'index.html');
  if (!existsSync(file)) { console.log(`\n=== ${slug} ===\n  не собран — сначала npm run build -- ${slug}`); continue; }
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 1 });
  await page.goto('file://' + file);
  await page.waitForTimeout(300);
  const screens = await page.evaluate(() =>
    [...document.querySelector('.device').querySelectorAll('[data-screen]')].map((e) => e.dataset.screen));

  const found = [];
  for (const scr of screens) {
    const hits = await page.evaluate(
      ([s, cfg, src]) => new Function('return ' + src)()(s, cfg),
      [scr, { minFont: MIN_FONT, minTap: MIN_TAP, w: W, h: H, uiV3: spec.uiContractVersion >= 3, navigation: spec.screens.find((s) => s.id === scr)?.ui?.navigation, primaryAction: spec.screens.find((s) => s.id === scr)?.ui?.primaryAction }, probe.toString()],
    );
    for (const h of hits) found.push({ scr, ...h });
  }
  if (spec.uiContractVersion >= 3) {
    /* Только геройский прототип: в сценарных срезах сборка вырезает таб-бар,
       снимая data-go, и сравнение ловило бы артефакт сборки, а не концепт. */
    const signatures = await page.evaluate(() => [...document.querySelectorAll('.hero-device [data-screen]')]
      .filter((screen) => screen.querySelector('.tabbar'))
      .map((screen) => ({ id: screen.dataset.screen, signature: [...screen.querySelectorAll('.tabbar .tab')].map((tab) => `${tab.dataset.go}:${(tab.textContent || '').trim()}`).join('|') })));
    const unique = new Set(signatures.map((item) => item.signature));
    if (unique.size > 1) found.push({ scr: 'root', kind: 'tabbar-contract', what: signatures.map((item) => item.id).join(', '), detail: `${unique.size} разных tabbar` });
  }
  await page.close();

  console.log(`\n=== ${slug} ===`);
  if (!found.length) { console.log('  чисто'); continue; }
  total += found.filter((item) => !HEURISTIC_ONLY.has(item.kind)).length;
  const byKind = new Map();
  for (const f of found) (byKind.get(f.kind) ?? byKind.set(f.kind, []).get(f.kind)).push(f);
  for (const [kind, list] of byKind) {
    console.log(`  ${KIND[kind] ?? kind} — ${list.length}`);
    for (const f of list.slice(0, 12)) console.log(`    ${f.scr}: ${f.what}${f.detail ? '  [' + f.detail + ']' : ''}`);
    if (list.length > 12) console.log(`    … ещё ${list.length - 12}`);
  }
}

await browser.close();
if (total) { console.log(`\nобъективных дефектов: ${total}`); process.exitCode = 1; }
