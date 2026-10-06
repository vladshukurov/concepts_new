/**
 * Компоненты оболочки `.ui` — функции, которые возвращают разметку.
 *
 * Экран концепта пишется как композиция: `screens/<id>.mjs` экспортирует
 * функцию, которая получает этот модуль и возвращает HTML экрана. Сборка
 * рендерит её в `screens/<id>.html`, поэтому линтер, тесты и карта экранов
 * работают с обычной разметкой, как и раньше.
 *
 * Зачем: когда экран собран из тех же функций, что и соседний концепт,
 * поле 16, радиусы, кегли, зоны касания и подписи для скринридера не могут
 * разъехаться. Своё у продукта — композиция экранов и доменные компоненты
 * в `styles.css`, а не заново свёрстанная строка списка.
 *
 * Действие элемента — объект:
 *   { go: 'detail' }                      переход
 *   { ask: 'camera|capture|studio' }      запрос доступа: ключ|цель|куда при отказе
 *   { activate: 'audio|background' }      capability без системного алерта
 *   { toast: 'Сохранено' }                подтверждение на месте
 *   { back: true }                        возврат
 *   primary: true                         главное действие экрана (одно)
 * Тексты — доверенная разметка автора концепта: «ёлочки» и <br> допустимы.
 */

import { readFileSync } from 'node:fs';
const ACCESS = JSON.parse(readFileSync(new URL('./access-model.json', import.meta.url), 'utf8')).keys;

const attr = (name, value) => (value === undefined || value === null || value === false ? '' : value === true ? ` ${name}` : ` ${name}="${String(value).replace(/"/g, '&quot;')}"`);

const ACTION_KEYS = new Set(['primary', 'go', 'ask', 'activate', 'toast', 'back', 'menu', 'label']);
/**
 * Атрибуты действия: data-* и aria-label. Всё, что компонент не разобрал сам,
 * приходит сюда — поэтому незнакомый ключ здесь означает опечатку в вызове
 * (`fillClas` вместо `fillClass`), и сборка падает, а не теряет его молча.
 */
export function act(a = {}) {
  const unknown = Object.keys(a).filter((k) => !ACTION_KEYS.has(k) && a[k] !== undefined);
  if (unknown.length) throw new Error(`неизвестный параметр: ${unknown.join(', ')}`);
  return attr('data-primary', a.primary)
    + attr('data-go', a.go)
    + attr('data-ask', a.ask)
    + attr('data-activate', a.activate)
    + attr('data-toast', a.toast)
    + attr('data-back', a.back)
    + attr('data-menu', Array.isArray(a.menu) ? a.menu.join('|') : a.menu)
    + attr('aria-label', a.label);
}
const isAction = (a) => a && (a.go || a.ask || a.activate || a.toast || a.back || a.menu);
const cls = (...names) => names.filter(Boolean).join(' ');
/** Лицо: «МК» — инициалы (заглавные буквы), `ph`, `face-3` — класс фото. */
const isInitials = (f) => /^\p{Lu}{1,3}$/u.test(f);
/* Оттенок фона инициалов h0–h6 — стабильный по буквам, как в Telegram. Палитра — в base.css */
const hue = (t) => `h${[...String(t || '')].reduce((n, c) => n + c.codePointAt(0), 0) % 7}`;
const facesHtml = (faces) => faces.map((f) => (isInitials(f) ? `<i class="is-initial">${f.slice(0, 1)}</i>` : `<i class="${f}"></i>`)).join('');
const join = (items) => (Array.isArray(items) ? items.filter(Boolean).join('') : items || '');

/* ── Иконки ── */
export const icon = (name, { fill = false, className = '' } = {}) =>
  `<svg${attr('class', cls(fill && 'ui-fill-ico', className) || undefined)}><use href="#i-${name}"/></svg>`;

/* ── Экран ──
   theme: 'vk-dark' | 'vk-light' | 'ok-light'. className — свои классы концепта.
   tabs — готовый tabBar(); bottom — что лежит под скроллом, но над таб-баром. */
export function screen({ id, theme, className, body, tabs = '', overlay = '' }) {
  return `<div class="${cls('screen ui', theme, className)}" id="scr-${id}">${join(body)}${overlay}${tabs}<div class="home-ind"></div></div>`;
}

/** Прокручиваемая часть. root — корень вкладки: отступ под статус-бар. */
export const scroll = (children, { root = false, className } = {}) =>
  `<div class="${cls('ui-scroll', root && 'is-root', className)}">${join(children)}</div>`;

/* ── Шапки ── */
/** Навбар вложенного экрана: назад · заголовок · действие. */
export function nav({ title = '', back = 'back', trailing = '', over = false, className } = {}) {
  const lead = back === false ? '<span></span>'
    : back === 'close' ? iconButton({ icon: 'x', label: 'Закрыть', back: true })
    : back === 'down' ? iconButton({ icon: 'chevron-down', label: 'Свернуть', back: true })
    : back === 'cancel' ? textButton({ label: 'Отмена', back: true })
    : iconButton({ icon: 'chevron-left', label: 'Назад', back: true });
  return `<header class="${cls('ui-nav', over && 'is-over', className)}">${lead}<strong>${title}</strong>${trailing || '<span></span>'}</header>`;
}
/** Заголовок корня вкладки 24/30 (--ui-page) и действия справа. */
export const largeTitle = (title, trailing = '') => `<header class="ui-large"><h1>${title}</h1>${join(trailing)}</header>`;
/** Шапка корня с брендом или профилем слева. */
export const top = (lead, trailing = '') => `<header class="ui-top">${lead}${join(trailing)}</header>`;
export const me = ({ name, initial, go = 'profile' }) =>
  `<button class="ui-me"${act({ go, label: 'Профиль' })}>${avatar(initial)}<strong>${name}</strong>${icon('chevron-right')}</button>`;
/** Бренд в шапке: иконка приложения концепта (assets/app-icon.png), а не значок из спрайта. */
export const wordmark = ({ name, logo = 'assets/app-icon.png', className }) =>
  `<strong class="${cls('ui-wordmark', className)}"><img class="ui-wordmark-logo" src="${logo}" alt=""/>${name}</strong>`;

/* ── Кнопки ── */
/** variant: primary | secondary | tertiary; size: l (44) | m (36). */
export function button({ label, icon: ic, fillIcon = false, variant = 'primary', size = 'l', block = false, className, ...a }) {
  const text = ic ? `${icon(ic, { fill: fillIcon })}<span>${label}</span>` : label;
  return `<button class="${cls('ui-btn', `is-${variant}`, size === 'm' && 'is-m', block && 'is-block', className)}"${act(a)}>${text}</button>`;
}
/** Квадратная кнопка-иконка рядом с широкой кнопкой. */
export const squareButton = ({ icon: ic, label, ...a }) =>
  `<button class="ui-btn is-secondary ui-square"${act({ ...a, label })}>${icon(ic)}</button>`;
/** Кнопка-иконка: касание 44, знак 24. look: fill | glass | muted. */
export const iconButton = ({ icon: ic, label, look, fill = false, sr, ...a }) => {
  const glyph = icon(ic, { fill });
  const inner = look === 'fill' || look === 'glass' ? `<span>${glyph}</span>` : glyph;
  return `<button class="${cls('ui-icon-btn', look && `is-${look}`)}"${act({ ...a, label })}>${inner}${sr ? `<span class="ui-sr">${sr}</span>` : ''}</button>`;
};
export const textButton = ({ label, strong = false, ...a }) =>
  `<button class="${cls('ui-text-btn', strong && 'is-strong')}"${act(a)}>${label}</button>`;
/** Круглый play: s 44 · m 56 · xl 88. */
export const play = ({ size = 'm', pause = false, label, sr, ...a }) =>
  `<button class="${cls('ui-play', size === 's' && 'is-sm', size === 'xl' && 'is-xl', pause && 'is-pause')}"${act({ ...a, label })}>${icon(pause ? 'pause' : 'play')}${sr ? `<span class="ui-sr">${sr}</span>` : ''}</button>`;
export const actions = (buttons, { row = false, className } = {}) =>
  `<div class="${cls('ui-actions', row && 'is-row', className)}">${join(buttons)}</div>`;

/* ── Мелкие ── */
export const avatar = (initial, { large = false, hidden = false } = {}) =>
  `<span class="${cls('ui-avatar', large && 'is-large', hue(initial))}"${hidden ? ' aria-hidden="true"' : ''}>${initial}</span>`;
export const badge = (text, { accent = false } = {}) => `<span class="${cls('ui-badge', accent && 'is-blue')}">${text}</span>`;
export const duration = (text) => `<span class="ui-duration">${text}</span>`;
/** Свитч без своего действия: состояние читается скринридером, не только цветом. */
export const toggle = (on = false) => `<span class="${cls('ui-switch', on && 'is-on')}" role="switch" aria-checked="${on}"></span>`;
/** Прогресс. value — класс доли из styles.css концепта (inline-style запрещён UI v3). */
export const progress = ({ fillClass, white = false }) => `<div class="${cls('ui-progress', white && 'is-white')}"><i class="${fillClass}"></i></div>`;
export const times = (a, b) => `<div class="ui-times"><span>${a}</span><span>${b}</span></div>`;
export const sr = (text) => `<span class="ui-sr">${text}</span>`;
/** Левая колонка строки 56: значок или короткий текст (дата, время). */
export const leadIcon = (name, { round = false, accent = false, text } = {}) =>
  `<span class="${cls('ui-lead', round && 'is-round', accent && 'is-accent')}">${text ?? icon(name)}</span>`;

/* ── Секции и списки ── */
/** Секция: заголовок title1 и справа — подпись или круглая стрелка «ещё». */
/**
 * shownAfter — ключ доступа: секция или строка — это данные, которые появляются только
 * после разрешения (найденные контакты, подключённая сеть). Не пометка «Разрешено»,
 * а сам плод доступа; движок показывает её по data-show-granted.
 */
const after = (key) => (key ? ` data-show-granted="${key}"` : '');
/**
 * Фильтр на месте: чипс, сегмент или кнопка подраздела с filter прячет на своём же
 * экране всё, у чего tags не содержит его значение ('all' показывает всё). Никуда
 * не уводит — уводящий чипс воспринимается как сломанная навигация.
 */
const tagsAttr = (tags) => (tags?.length ? ` data-tags="${tags.join(' ')}"` : '');
const pick = (filter, a) => (filter !== undefined ? ` data-filter="${filter}"` : act(a));
export function section({ title, meta, more, children, className, shownAfter, tags }) {
  const trailing = more ? iconButton({ icon: 'chevron-right', look: 'fill', ...more })
    : meta ? `<span class="ui-foot">${meta}</span>` : '';
  const head = title ? `<div class="ui-sec-head"><h2>${title}</h2>${trailing}</div>` : '';
  return `<section class="${cls('ui-sec', shownAfter && 'perm-hidden', className)}"${after(shownAfter)}${tagsAttr(tags)}>${head}${join(children)}</section>`;
}
export const list = (rows) => `<div class="ui-list">${join(rows)}</div>`;

/**
 * Строка списка: обложка 56 (или 16:9 96×56) · две строки · хвост.
 * thumb — классы обложки (`cover cover-2`, `ph`); lead — своя разметка слева.
 * end — { icon, value, badge, action } либо готовая разметка.
 * Если у строки есть action и у хвоста своё действие — основная часть
 * становится отдельной кнопкой, чтобы кнопки не вкладывались друг в друга.
 */
export function row({ thumb, wide = false, lead, title, sub, subWrap = false, wrap = false, end, now = false, className, duration: dur, shownAfter, tags, ...a }) {
  const leadHtml = lead || (thumb !== undefined ? `<span class="${cls('ui-thumb', wide && 'is-wide', thumb)}">${dur ? duration(dur) : ''}</span>` : '');
  const text = `<span class="ui-row-text"><strong>${title}</strong>${sub ? `<span${subWrap ? ' class="is-wrap"' : ''}>${sub}</span>` : ''}</span>`;
  let endHtml = '';
  if (end && typeof end === 'object') {
    const inner = end.badge ? badge(end.badge, { accent: true })
      : end.value !== undefined ? end.value
      : end.icon ? icon(end.icon) : '';
    const { value: _v, icon: _i, badge: _b, linkColor: _l, ...endAct } = end;
    endHtml = isAction(end)
      ? `<button class="${cls('ui-row-end', end.value !== undefined && 'is-value is-action')}"${act(endAct)}>${inner}</button>`
      : `<span class="${cls('ui-row-end', end.value !== undefined && 'is-value', end.linkColor && 'ui-link')}">${inner}</span>`;
  } else if (end) endHtml = end;
  const rowCls = cls('ui-row', now && 'is-now', wrap && 'is-wrap', shownAfter && 'perm-hidden', className);
  /* Подпись строки-кнопки — её заголовок, а не инициалы в аватаре слева */
  if (isAction(a) && !a.label) a = { ...a, label: String(title).replace(/<[^>]+>/g, '') };
  if (isAction(a) && end && typeof end === 'object' && isAction(end)) {
    return `<div class="${rowCls}"${after(shownAfter)}${tagsAttr(tags)}><button class="ui-row-main"${act(a)}>${leadHtml}${text}</button>${endHtml}</div>`;
  }
  const tag = isAction(a) ? 'button' : 'div';
  return `<${tag} class="${rowCls}"${after(shownAfter)}${tagsAttr(tags)}${act(a)}>${leadHtml}${text}${endHtml}</${tag}>`;
}

/** Группа ячеек настроек с подписью сверху. */
export const group = ({ label, cells, className }) =>
  `${label ? `<p class="ui-group-label">${label}</p>` : ''}<div class="${cls('ui-group', className)}">${join(cells)}</div>`;
/**
 * Ячейка: значок · заголовок и подпись · хвост (значение, свитч, шеврон).
 * Шеврон рисуется только у ячейки с переходом — правило «строка без перехода
 * не рисует стрелку» выполняется само.
 */
export function cell({ icon: ic, lead, title, sub, value, toggle: sw, check = false, className, ...a }) {
  const chevron = a.go || a.ask || a.activate ? icon('chevron-right') : '';
  /* Свитч у ячейки с запросом доступа включается сам после разрешения (data-switch движка) */
  const permKey = (a.ask || a.activate || '').split('|')[0].split('+')[0];
  /* Свитч в ячейке озвучивается ячейкой целиком (role=switch), сам знак скрыт — иначе два элемента на одно состояние */
  const tail = sw !== undefined ? `<span class="${cls('ui-switch', sw && 'is-on')}"${permKey ? ` data-switch="${permKey}"` : ''} aria-hidden="true"></span>`
    : `<span class="${cls('ui-cell-end', check && 'ui-link')}">${value ?? ''}${check ? icon('check') : sw === undefined && !a.toast ? chevron : ''}</span>`;
  const tag = isAction(a) ? 'button' : 'div';
  const sws = sw !== undefined ? ` role="switch" aria-checked="${!!sw}"${permKey ? ` data-switch-aria="${permKey}"` : ''}` : '';
  return `<${tag} class="${cls('ui-cell', !ic && !lead && 'no-ico', className)}"${act(a)}${sws}>${lead || (ic ? icon(ic) : '')}<span class="ui-cell-text"><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}</span>${tail}</${tag}>`;
}

/* ── Карточки и ленты ── */
/** Карточка ленты: обложка 1:1 (или 16:9 при wide) и две строки. */
export const card = ({ art, title, sub, wide = false, duration: dur, className, ...a }) =>
  `<button class="${cls('ui-card', wide && 'is-wide', className)}"${act(a)}><span class="ui-card-art ${art}">${dur ? duration(dur) : ''}</span><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}</button>`;
export const shelf = (cards) => `<div class="ui-shelf">${join(cards)}</div>`;
export const grid = (cards) => `<div class="ui-grid">${join(cards)}</div>`;
/** Видеокарточка ВК Видео: кадр 16:9, длительность, прогресс, подпись. */
export function videoCard({ art, duration: dur, progressClass, title, sub, avatar: ava, overlay = '', className, ...a }) {
  const frame = `<span class="ui-video-art ${art}">${overlay}${dur ? duration(dur) : ''}${progressClass ? `<span class="ui-video-bar"><i class="${progressClass}"></i></span>` : ''}</span>`;
  const meta = title ? `<span class="ui-video-meta">${ava || ''}<span class="ui-video-text"><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}</span></span>` : '';
  const tag = isAction(a) ? 'button' : 'div';
  return `<${tag} class="${cls('ui-video', className)}"${act(a)}>${frame}${meta}</${tag}>`;
}
/**
 * Плеер ВК Видео: кадр на всю ширину и управление поверх него.
 * art — класс кадра; at/total — таймкоды; fillClass — доля просмотренного
 * (класс концепта, inline-style запрещён). chapters — главы шкалы:
 * [{ label, w: 1–9 (доля), state: 'done' | 'now' }] — у каждого продукта свои
 * (блоки выступления, части фильма). Действия: collapse, cast, settings,
 * pip, fullscreen — объекты действий; без объекта кнопки нет. extra — свои
 * кнопки в верхнем ряду (например, «Поделиться»).
 */
export function player({ art, at, total, fillClass, chapters = [], chapter, playing = false, collapse, cast, settings, pip, fullscreen, extra = '', playAction = {}, className }) {
  const top = `<div class="ui-player-top">${collapse ? iconButton({ icon: 'chevron-down', label: 'Свернуть', look: 'glass', ...collapse }) : '<span></span>'}<span class="ui-player-gap"></span>${join(extra)}${cast ? iconButton({ icon: 'cast', label: 'Смотреть на телевизоре', look: 'glass', ...cast }) : ''}${settings ? iconButton({ icon: 'settings-2', label: 'Качество и скорость', look: 'glass', ...settings }) : ''}</div>`;
  const mid = `<div class="ui-player-mid">${iconButton({ icon: 'rotate-ccw', label: 'Назад на 10 секунд', toast: 'Назад на 10 секунд' })}${play({ size: 'xl', pause: playing, label: playing ? 'Пауза' : 'Смотреть', toast: playing ? `Пауза · ${at}` : `Воспроизведение с ${at}`, ...playAction })}${iconButton({ icon: 'rotate-cw', label: 'Вперёд на 10 секунд', toast: 'Вперёд на 10 секунд' })}</div>`;
  const scrub = chapters.length
    ? `<div class="ui-player-scrub">${chapters.map((c) => `<span class="${cls('ui-player-ch', `is-w${c.w || 1}`, c.state && `is-${c.state}`)}" ${attr('title', c.label)}>${c.state === 'now' ? `<i class="${fillClass}"></i>` : ''}</span>`).join('')}</div>`
    : `<div class="ui-player-scrub"><span class="ui-player-ch is-w9 is-now"><i class="${fillClass}"></i></span></div>`;
  const row = `<div class="ui-player-row"><span class="ui-player-time">${at} / ${total}</span>${chapter ? `<span class="ui-player-chapter">${chapter}</span>` : '<span class="ui-player-gap"></span>'}${pip ? iconButton({ icon: 'picture-in-picture-2', label: 'Картинка в картинке', ...pip }) : ''}${fullscreen ? iconButton({ icon: 'maximize', label: 'Во весь экран', ...fullscreen }) : ''}</div>`;
  return `<div class="${cls('ui-player', art, className)}">${top}${mid}<div class="ui-player-bottom">${scrub}${row}</div></div>`;
}

/**
 * Меню сервисов как в ВК: две колонки, значок 28 и подпись, без серых групп.
 * items: [{ icon, label, badge, ...action }]. Последним можно положить «Ещё».
 */
export const menu = (items) => `<nav class="ui-menu" aria-label="Сервисы">${items.map(({ icon: ic, label, badge: b, ...a }) =>
  `<button class="ui-menu-item"${act({ label, ...a })}>${icon(ic)}<span>${label}</span>${b ? `<span class="ui-menu-badge">${b}</span>` : ''}</button>`).join('')}</nav>`;

/* ── Компоненты VKUI для сведений о событии, людях и пустых состояниях ── */

/**
 * MiniInfoCell: значок 20 и факт одной строкой — дата, место, участники.
 * Так ВК показывает сведения о событии и профиле вместо серых ячеек.
 * items: [{ icon, text, accent (основной цвет), more (ссылка «Подробнее»), ...action }]
 */
export const miniInfo = (items) => `<div class="ui-mini-info">${items.map(({ icon: ic, text, accent = false, more = false, ...a }) => {
  const tag = isAction(a) ? 'button' : 'div';
  return `<${tag} class="${cls('ui-mini-info-cell', accent && 'is-accent', more && 'is-more')}"${tag === 'button' ? act({ label: String(text).replace(/<[^>]+>/g, ''), ...a }) : ''}>${icon(ic)}<span>${text}</span></${tag}>`;
}).join('')}</div>`;

/** InfoRow: подпись сверху, значение крупнее — для паспортов вещей, адресов, реквизитов. */
export const infoRows = (items) => `<div class="ui-info-rows">${items.map(([label, value]) => `<div class="ui-info-row"><span>${label}</span><strong>${value}</strong></div>`).join('')}</div>`;

/** UsersStack: стопка аватаров и подпись «Маша, Илья и ещё 2 идут». faces — классы фото или инициалы. */
export const usersStack = ({ faces, text, ...a }) => {
  const tag = isAction(a) ? 'button' : 'div';
  return `<${tag} class="ui-users-stack"${tag === 'button' ? act({ label: text, ...a }) : ''}><span class="ui-users-faces">${facesHtml(faces.slice(0, 3))}</span><span>${text}</span></${tag}>`;
};

/**
 * HorizontalScroll из HorizontalCell: карточки с картинкой или аватаром в ленте вбок.
 * items: [{ art (класс) | initial, title, sub, size: 's' (аватар 56) | 'm' (картинка 128) | 'l' (картинка 220), ...action }]
 */
export const hscroll = (items, { size = 'm' } = {}) => `<div class="${cls('ui-hscroll', `is-${size}`)}">${items.map(({ art, initial, title, sub, ...a }) =>
  `<button class="ui-hcell"${act({ label: title, ...a })}>${initial ? `<span class="ui-hcell-art is-initial">${initial}</span>` : `<span class="ui-hcell-art ${art || 'ph'}"></span>`}<strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}</button>`).join('')}</div>`;

/** Banner: промо или важное сообщение с действием. mode: 'tint' (мягкий акцент) | 'plain'. */
export const banner = ({ icon: ic, title, sub, button: btn, mode = 'tint', ...a }) =>
  `<div class="${cls('ui-banner', mode === 'tint' && 'is-tint')}">${ic ? `<span class="ui-banner-ico">${icon(ic)}</span>` : ''}<div class="ui-banner-body"><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}${btn ? `<div class="ui-banner-actions">${button(btn)}</div>` : ''}</div>${isAction(a) ? iconButton({ icon: 'chevron-right', label: title, ...a }) : ''}</div>`;

/** Placeholder: пустое состояние — значок 56, заголовок, пояснение и одно действие. */
export const placeholder = ({ icon: ic, title, sub, button: btn }) =>
  `<div class="ui-placeholder"><span class="ui-placeholder-ico">${icon(ic)}</span><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}${btn ? button({ size: 'm', ...btn }) : ''}</div>`;

/** SubnavigationBar: фильтры-кнопки со значком, прокрутка вбок. items: [{ icon, label, on, count, ...action }] */
export const subnav = (items) => `<div class="ui-subnav">${items.map(({ icon: ic, label, on = false, count, filter, ...a }) =>
  `<button class="${cls('ui-subnav-btn', on && 'is-on')}" aria-pressed="${on}"${pick(filter, a)}>${ic ? icon(ic) : ''}<span>${label}</span>${count ? `<b>${count}</b>` : ''}</button>`).join('')}</div>`;

/**
 * RichCell: аватар 48, над заголовком подпись, заголовок, текст, справа время,
 * снизу кнопки — заявки, приглашения, назначения.
 */
export function richCell({ lead, over, title, sub, extra, after, afterCaption, actions: acts = [], ...a }) {
  const body = `${lead || ''}<span class="ui-rich-body">${over ? `<small>${over}</small>` : ''}<strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}${extra ? `<span class="is-extra">${extra}</span>` : ''}${acts.length ? `<span class="ui-rich-actions">${acts.map((b) => button({ size: 'm', ...b })).join('')}</span>` : ''}</span>${after || afterCaption ? `<span class="ui-rich-after">${after ? `<b>${after}</b>` : ''}${afterCaption ? `<small>${afterCaption}</small>` : ''}</span>` : ''}`;
  const tag = isAction(a) && !acts.length ? 'button' : 'div';
  return `<${tag} class="ui-rich"${tag === 'button' ? act({ label: String(title).replace(/<[^>]+>/g, ''), ...a }) : ''}>${body}</${tag}>`;
}

/** Плитки-входы 2 в ряд: текст слева, обложка справа. */
export const tiles = (items) => `<div class="ui-tiles">${items.map(({ title, sub, art, ...a }) =>
  `<button class="ui-tile"${act({ label: title, ...a })}><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}${art ? `<span class="ui-tile-art ${art}"></span>` : ''}</button>`).join('')}</div>`;
/** Чипсы. Каждый чипс — переход, не тост: фильтр-пустышку ловит аудит. */
export const chips = (items) => `<div class="ui-chips">${items.map(({ label, on = false, filter, ...a }) =>
  `<button class="${cls('ui-chip', on && 'is-on')}" aria-pressed="${on}"${pick(filter, a)}><span>${label}</span></button>`).join('')}</div>`;
/** Поле поиска: кнопка-вход или активное поле со значением. */
export function search({ placeholder, value, clear, ...a }) {
  /* С действием — кнопка-вход на экран поиска; без него — поле, в которое печатают */
  if (isAction(a)) return `<button class="ui-search"${act(a)}>${icon('search')}${value ? `<strong>${value}</strong>` : `<span>${placeholder}</span>`}</button>`;
  const clr = clear ? iconButton({ icon: 'circle-x', look: 'muted', label: 'Очистить запрос', ...clear }) : '';
  return `<label class="ui-search">${icon('search')}<input type="search"${attr('value', value)}${attr('placeholder', placeholder)}${attr('aria-label', placeholder || value)}/>${clr}</label>`;
}
export const stats = (items) => `<div class="ui-stats">${items.map(([v, l]) => `<div class="ui-stat"><strong>${v}</strong><span>${l}</span></div>`).join('')}</div>`;
/**
 * Отказ в доступе — пустое состояние iOS: значок, «Нет доступа к камере» и
 * «Открыть Настройки». Рисуется только для ключей, без которых фича не
 * работает (`denied` в access-model.json); после отказа в остальных ключах
 * экран остаётся как есть. keys — 'camera' или 'mic,speech'. Движок
 * показывает блок по data-show-denied.
 */
export const denied = (keys) => {
  const key = String(keys).split(/[,|+]/).map((k) => k.trim()).find((k) => ACCESS[k]?.denied);
  if (!key) return '';
  const { title, icon: ic } = ACCESS[key].denied;
  return `<div class="perm-hidden ui-denied" data-show-denied="${keys}">${icon(ic)}<strong>${title}</strong><span>Разрешите доступ в Настройках</span><button class="ui-denied-btn"${act({ toast: 'Откроются Настройки iOS' })}>Открыть Настройки</button></div>`;
};
export const foot = (text, className) => `<p class="${cls('ui-foot', className)}">${text}</p>`;

/* ── Нижняя панель ── */
/** Мини-плеер: открывает плеер, «+» и play. */
export const miniPlayer = ({ face, title, sub, open, add, playAction, progressClass }) =>
  `<div class="ui-mini"><button class="ui-mini-main"${act({ label: 'Открыть плеер', ...open })}><span class="ui-mini-face ${face}"></span><span class="ui-mini-text"><strong>${title}</strong><span>${sub}</span></span></button>${add ? iconButton({ icon: 'plus', ...add }) : ''}${iconButton({ icon: 'play', fill: true, ...playAction })}<span class="ui-mini-bar"><i class="${progressClass}"></i></span></div>`;
/**
 * Таб-бар корня. items: [{ id, label, icon }], active — id текущей вкладки.
 * Носит `.tabbar`: так его находят сборка (вырезает из сценарных срезов)
 * и проверки навигации.
 */
export const tabBar = ({ items, active, mini = '' }) =>
  `<nav class="ui-tabs tabbar" aria-label="Основная навигация">${mini}<div class="ui-tabrow">${items.map((t) =>
    `<button class="${cls('ui-tab tab', t.id === active && 'is-on')}"${t.id === active ? ' aria-current="page"' : ''} data-go="${t.id}">${icon(t.icon)}<span>${t.label}</span></button>`).join('')}</div></nav>`;
/** Нижний лист поверх экрана. */
export const sheet = (children, className) => `<section class="${cls('ui-sheet', className)}"><span class="ui-sheet-grab"></span>${join(children)}</section>`;

/* ── Соцсеть: истории и посты ── */
/** Истории. items: [{ label, face (класс фото) | initial | icon, seen, action }]. Без фото — инициалы, не серая заглушка. */
export const stories = (items) => `<div class="ui-stories">${items.map(({ label, face, initial, icon: ic, seen = false, ...a }) =>
  `<button class="${cls('ui-story', seen && 'is-seen')}"${act({ label, ...a })}><span class="ui-story-ring"><span class="${cls('ui-story-face', face, initial && 'is-initial')}">${ic ? icon(ic) : initial || ''}</span></span><span>${label}</span></button>`).join('')}</div>`;

/**
 * Пост ленты. author: { face, name, meta, action }. media — класс фото,
 * attach — своя разметка вложения (карточка курса, прогулки).
 * likes/comments/shares — числа; liked — лайк уже стоит. menu — пункты листа
 * действий под «тремя точками»: ['Скрыть', 'Пожаловаться'].
 */
export function post({ author, text, media, attach, likes, comments, shares, views, liked = false, menu, open, discuss, className }) {
  const ava = author.initial ? `<span class="ui-post-ava is-initial">${author.initial}</span>` : `<span class="ui-post-ava ${author.face || ''}"></span>`;
  const head = `<div class="ui-post-head"><button class="ui-post-author"${act({ label: author.name, ...author.action })}>${ava}<span class="ui-post-who"><strong>${author.name}</strong><span>${author.meta}</span></span></button>${menu ? iconButton({ icon: 'ellipsis', label: 'Действия с записью', menu }) : ''}</div>`;
  const bar = `<div class="ui-post-bar">${likes !== undefined ? `<button class="${cls('ui-post-act', liked && 'is-on')}"${act({ toast: liked ? 'Лайк убран' : 'Понравилось', label: 'Нравится' })}>${icon('heart')}${likes}</button>` : ''}${comments !== undefined ? `<button class="ui-post-act"${act({ ...(discuss || { toast: 'Комментарии' }), label: 'Комментарии' })}>${icon('message-circle')}${comments}</button>` : ''}${shares !== undefined ? `<button class="ui-post-act"${act({ toast: 'Ссылка скопирована', label: 'Поделиться' })}>${icon('share')}${shares}</button>` : ''}${views ? `<span class="ui-post-views">${icon('eye')}${views}</span>` : ''}</div>`;
  return `<article class="${cls('ui-post', className)}">${head}${text ? (open ? `<button class="ui-post-text"${act(open)}>${text}</button>` : `<p class="ui-post-text">${text}</p>`) : ''}${media ? (open ? `<button class="ui-post-media ${media}"${act({ label: 'Открыть публикацию', ...open })}></button>` : `<div class="ui-post-media ${media}"></div>`) : ''}${attach ? `<div class="ui-post-attach">${attach}</div>` : ''}${bar}</article>`;
}

/**
 * Комментарии под постом, как в ВК: заголовок со счётчиком, у каждого —
 * аватар, имя, текст, время · «Ответить» и лайк справа. Если показаны не все,
 * внизу «Показать ещё N». items: [{ initial | face, name, text, time, likes,
 * liked, reply (вложенный ответ), author (ответ автора поста) }]; more — действие «ещё».
 */
export function comments({ count, items, more }) {
  const one = ({ initial, face: f, name, text, time, likes, liked = false, reply = false, author = false }) =>
    `<div class="${cls('ui-comment', reply && 'is-reply')}">${face({ face: f, initial }, 'ui-comment-face')}<div class="ui-comment-body"><strong>${name}${author ? '<span class="ui-comment-badge">автор</span>' : ''}</strong><p>${text}</p><span class="ui-comment-meta">${time}<button${act({ toast: `Ответ для ${name.split(' ')[0]}`, label: `Ответить: ${name}` })}>Ответить</button></span></div><button class="${cls('ui-comment-like', liked && 'is-on')}" aria-pressed="${liked}"${act({ toast: liked ? 'Лайк убран' : 'Понравилось', label: `Нравится комментарий: ${name}` })}>${icon('heart')}${likes ? `<span>${likes}</span>` : ''}</button></div>`;
  const rest = count - items.length;
  const tail = rest > 0 && more ? `<button class="ui-comment-more"${act({ label: `Показать ещё ${rest}`, ...more })}>Показать ещё ${rest}</button>` : '';
  return section({ title: 'Комментарии', meta: String(count), children: `<div class="ui-comments">${items.map(one).join('')}${tail}</div>` });
}

/**
 * Своя запись в ленте — как пост ВК, но без автора, лайков и комментариев: всё на
 * главной создал сам человек. icon — тип записи; meta — когда и раздел; photos —
 * сколько кадров-заглушек (кадр — суть записи) или список классов фото; voice — { dur } голосовой заметки;
 * attach — своя разметка вложения; status — { label, accent }; actions — кнопки
 * под записью ({ label, icon, ...action }); menu — пункты «трёх точек»; open — переход.
 */
export function entry({ icon: ic, title, meta, text, photos = 0, voice, attach, status, actions: acts = [], menu, open, className, tags }) {
  const head = `<div class="ui-entry-head">${leadIcon(ic, { round: true, accent: true })}${open ? `<button class="ui-entry-who"${act({ label: String(title).replace(/<[^>]+>/g, ''), ...open })}><strong>${title}</strong><span>${meta}</span></button>` : `<span class="ui-entry-who"><strong>${title}</strong><span>${meta}</span></span>`}${status ? badge(status.label, { accent: status.accent }) : ''}${menu ? iconButton({ icon: 'ellipsis', label: `Действия с записью: ${String(title).replace(/<[^>]+>/g, '')}`, menu }) : ''}</div>`;
  const body = text ? (open ? `<button class="ui-entry-text"${act({ label: String(title).replace(/<[^>]+>/g, ''), ...open })}>${text}</button>` : `<p class="ui-entry-text">${text}</p>`) : '';
  /* photos — число кадров-заглушек или список классов фото концепта */
  const shots = Array.isArray(photos) ? photos : Array.from({ length: photos }, () => 'ph');
  const media = shots.length ? `<div class="${cls('ui-entry-photos', `is-${Math.min(shots.length, 3)}`)}">${shots.slice(0, 3).map((c) => `<span class="${c}"></span>`).join('')}${shots.length > 3 ? `<b>+${shots.length - 3}</b>` : ''}</div>` : '';
  const audio = voice ? `<div class="ui-entry-voice">${play({ size: 's', label: `Голосовая заметка ${voice.dur}`, toast: `Воспроизведение ${voice.dur}` })}${wave(voice.dur + title)}<span>${voice.dur}</span></div>` : '';
  const foot = acts.length ? `<div class="ui-entry-actions">${acts.map(({ label, icon: bi, ...a }) => `<button class="ui-entry-act"${act({ label, ...a })}>${bi ? icon(bi) : ''}<span>${label}</span></button>`).join('')}</div>` : '';
  return `<article class="${cls('ui-entry', className)}"${tagsAttr(tags)}>${head}${body}${media}${audio}${attach ? `<div class="ui-entry-attach">${attach}</div>` : ''}${foot}</article>`;
}

/* ── Системные поверхности: экран «Домой» с виджетом и Safari с автозаполнением ──
   Нужны каждому концепту с appgroups/keychain и autofill; раньше каждый верстал их сам */
/**
 * Экран «Домой» iOS с виджетом приложения. widget: { icon, kicker, title, sub, ...action };
 * app: { name, icon, ...action } — своя иконка среди системных; apps — подписи остальных.
 */
export const homeScreen = ({ widget: w, app, apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Настройки'] }) => {
  const { icon: wi, kicker, title, sub, ...wa } = w;
  const { name, icon: ai, ...aa } = app;
  return `<button class="ui-hs-widget"${act({ label: `Виджет «${name}»`, ...wa })}><small>${icon(wi)}${kicker}</small><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}</button>`
    + `<div class="ui-hs-apps"><button class="ui-hs-app is-ours"${act({ label: name, ...aa })}><i>${icon(ai)}</i>${name}</button>${apps.map((x) => `<span class="ui-hs-app"><i></i>${x}</span>`).join('')}</div>`;
};
/**
 * Страница сайта в Safari с подсказкой пароля над клавиатурой (Credential Provider).
 * site — домен в адресной строке; fields: [[подпись, значение, фокус]]; suggestion: { app, login, toast }.
 */
export const safariFill = ({ site, title, sub, fields, submit = 'Войти', suggestion }) =>
  `<div class="ui-sf-bar">${icon('lock')}${site}</div>`
  + `<div class="ui-sf-page"><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ''}${fields.map(([l, v, focus]) => `<div class="${cls('ui-sf-field', focus && 'is-focus')}"><span>${l}</span>${v}</div>`).join('')}${button({ label: submit, block: true, toast: 'Вход выполнен' })}${button({ label: 'Вернуться в приложение', variant: 'tertiary', block: true, back: true, primary: true })}</div>`
  + `<div class="ui-sf-quicktype"><button${act({ toast: suggestion.toast || `Подставлено из «${suggestion.app}»` })}>${icon('key')}${suggestion.app} · ${suggestion.login}</button></div>`;

/** Сегменты: переключают вид внутри экрана. */
export const segments = (items) => `<div class="ui-seg">${items.map(({ label, on = false, filter, ...a }) =>
  `<button${on ? ' class="is-on"' : ''} aria-pressed="${on}"${pick(filter, a)}>${label}</button>`).join('')}</div>`;

/** Строка «Что нового?» над лентой: аватар, приглашение написать, быстрые действия. */
export const composerPrompt = ({ initial, face, placeholder, trailing = '', ...a }) =>
  `<div class="ui-prompt"><button class="ui-prompt-main"${act({ label: placeholder, ...a })}>${initial ? `<span class="ui-post-ava is-initial">${initial}</span>` : `<span class="ui-post-ava ${face}"></span>`}<span>${placeholder}</span></button>${join(trailing)}</div>`;

/* ── Мессенджер: диалоги, чат, звонок ── */
const face = ({ face: f, initial }, cl) => initial ? `<span class="${cl} is-initial ${hue(initial)}">${initial}</span>` : `<span class="${cl} ${f || 'ph'}"></span>`;

/** Строка диалога: аватар с онлайном, имя и время, последнее сообщение и счётчик. */
/* tags — папка диалога для фильтра чипсами на месте (Поездки, Личные, Непрочитанные) */
export const dialog = ({ name, text, time, unread, online = false, you = false, muted = false, face: f, initial, tags, ...a }) =>
  `<button class="ui-dialog"${tagsAttr(tags)}${act({ label: `Диалог: ${name}`, ...a })}><span class="ui-dialog-ava">${face({ face: f, initial }, 'ui-dialog-face')}${online ? '<i class="ui-online"></i>' : ''}</span><span class="ui-dialog-body"><span class="ui-dialog-top"><strong>${name}</strong><span>${time}</span></span><span class="ui-dialog-bottom"><span>${you ? '<b>Вы:</b> ' : ''}${text}</span>${unread ? `<span class="${cls('ui-unread', muted && 'is-muted')}">${unread}</span>` : ''}</span></span></button>`;

/** Шапка чата как в ВК: назад · аватар, имя и статус слева с зазором 12 · справа значок звонка. */
/* open — действие по касанию имени: сведения о чате или группе, как в Telegram и WhatsApp */
export const chatNav = ({ name, status, call, open, ...who }) => {
  const tag = open ? 'button' : 'span';
  return `<header class="ui-nav ui-chat-nav">${iconButton({ icon: 'chevron-left', label: 'Назад', back: true })}<${tag} class="ui-chat-who${open ? ' tap' : ''}"${open ? act({ label: `Сведения: ${name}`, ...open }) : ''}>${face(who, 'ui-chat-face')}<span class="ui-chat-text"><strong>${name}</strong><span>${status}</span></span></${tag}>${call ? iconButton({ icon: 'phone', label: 'Позвонить', sr: 'Позвонить', ...call }) : '<span></span>'}</header>`;
};

export const day = (text) => `<p class="ui-day">${text}</p>`;
/**
 * Пузырь сообщения как в ВК. from — имя отправителя в групповом чате (над
 * содержимым); attach — фото или карточка от края до края пузыря; out — исходящее.
 */
export const bubble = ({ out = false, from, text = '', time, read = false, attach = '', ...a }) => {
  const tag = isAction(a) ? 'button' : 'div';
  return `<${tag} class="${cls('ui-bubble', out ? 'is-out' : 'is-in', attach && 'has-attach')}"${act(a)}>${from ? `<span class="ui-bubble-from">${from}</span>` : ''}${attach ? `<span class="ui-bubble-media">${attach}</span>` : ''}${text ? `<span class="ui-bubble-text">${text}</span>` : ''}<span class="ui-bubble-meta">${time}${out ? icon(read ? 'check-check' : 'check') : ''}</span></${tag}>`;
};
/* Волна голосового: высоты столбиков из длительности — одинаковые при каждой сборке */
const wave = (seed) => {
  let x = [...String(seed)].reduce((n, c) => n * 31 + c.charCodeAt(0), 7);
  const bars = Array.from({ length: 30 }, (_, i) => { x = (x * 9301 + 49297) % 233280; return 4 + Math.round((x / 233280) * 14 + Math.sin(i / 3) * 3 + 3); });
  return `<svg class="ui-wave" viewBox="0 0 120 24" aria-hidden="true">${bars.map((h, i) => `<rect x="${i * 4}" y="${12 - h / 2}" width="2" height="${h}" rx="1"/>`).join('')}</svg>`;
};
/** Голосовое как в ВК: круглая кнопка воспроизведения, волна и длительность под ней. */
export const voice = ({ out = false, from, dur, time, ...a }) =>
  `<div class="${cls('ui-bubble', 'ui-voice', out ? 'is-out' : 'is-in')}">${from ? `<span class="ui-bubble-from">${from}</span>` : ''}<span class="ui-voice-row"><button class="ui-voice-play"${act({ label: `Голосовое ${dur}`, toast: `Воспроизведение ${dur}`, ...a })}>${icon('play', { fill: true })}</button><span class="ui-voice-body">${wave(dur + time)}<span class="ui-bubble-meta">${dur}<span>${time}</span></span></span></span></div>`;
/** Лента сообщений. */
export const chat = (items) => `<div class="ui-chat">${join(items)}</div>`;
/** Поле ввода: вложение, текст, голосовое или отправка. */
/* Поле — настоящий input: пока пусто, справа микрофон; с текстом — «Отправить», после отправки поле очищается (движок) */
export const composer = ({ placeholder = 'Сообщение', attach, mic, send }) =>
  `<div class="${cls('ui-composer', mic && 'has-mic')}">${iconButton({ icon: 'paperclip', label: 'Вложение', ...attach })}<input class="ui-composer-field"${attr('placeholder', placeholder)}${attr('aria-label', placeholder)}/>${mic ? `<span class="ui-composer-mic">${iconButton({ icon: 'mic', label: 'Голосовое сообщение', ...mic })}</span>` : ''}<span class="ui-composer-send">${iconButton({ icon: 'send', label: 'Отправить', ...(send || { toast: 'Отправлено' }) })}</span></div>`;

/** Экран звонка: крупный аватар, имя, статус и ряд круглых кнопок. controls: [{ icon, label, end, ...action }]. */
export const callView = ({ name, status, controls, ...who }) =>
  `<div class="ui-call">${face(who, 'ui-call-face')}<strong>${name}</strong><span>${status}</span><div class="ui-call-controls">${controls.map(({ icon: ic, label, end = false, ...a }) =>
    `<span class="ui-call-ctl"><button class="${cls('ui-call-btn', end && 'is-end')}"${act({ label, ...a })}>${icon(ic)}</button><span>${label}</span></span>`).join('')}</div></div>`;
