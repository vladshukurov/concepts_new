/** Общее для экранов «Мелодии». Файл с «_» — не экран, сборка его пропускает. */
import * as ui from '../../../kernel/components.mjs';
import { tones, ORDER, picks, KINDS, contacts, playing, alarm } from '../model.mjs';

export const THEME = 'vk-dark';
export const TABS = [
  { id: 'home', label: 'Мелодии', icon: 'audio-lines' },
  { id: 'records', label: 'Записи', icon: 'mic' },
  { id: 'profile', label: 'Профиль', icon: 'circle-user' },
];

/* Плитка-значок: у мелодий нет обложек, как у звуков в настройках iOS */
export const ico = (name, accent = false) => `<span class="ui-thumb md-ico${accent ? ' is-accent' : ''}">${ui.icon(name)}</span>`;

/* Свёрнутый плеер: фрагмент «Смех Сони» */
const p = tones[playing.tone];
export const MINI = ui.miniPlayer({
  face: "md-face", title: p.title, sub: `${p.from}–${p.to} · ${p.rec}`,
  open: { go: p.id }, playAction: { label: `Пауза · ${p.title}` }, progressClass: 'md-p35',
});

/**
 * Строка мелодии как звук в настройках iOS: play слева (на месте), название открывает мелодию,
 * галочка у выбранной. Своя разметка, потому что в строке две кнопки рядом, а не одна в другой.
 */
export const toneRow = (t, { checked = false, sub } = {}) =>
  `<div class="ui-row md-tone${checked ? ' is-picked' : ''}">`
  + ui.play({ size: 's', label: `Слушать: ${t.title}` })
  + `<button class="ui-row-main" data-go="${t.id}" aria-label="${t.title}"><span class="ui-row-text"><strong>${t.title}</strong><span>${sub || t.sub}</span></span></button>`
  + `<span class="ui-row-end md-check">${checked ? ui.icon('check') : ''}</span></div>`;

/** Список мелодий для вида «Звонок · Будильник · Сообщения» с галочкой выбранной */
export const toneList = (kind) => ui.list(ORDER.map((id) => toneRow(tones[id], { checked: picks[kind] === id })));

/* Секунды из «3:41» */
const sec = (s) => s.split(':').reduce((n, x) => n * 60 + Number(x), 0);
/**
 * Волна записи с ручками обрезки: столбики внутри фрагмента — акцентом,
 * ручки стоят прямо в ряду столбиков, под ними «от — до» и длина.
 */
export const wave = (t) => {
  const N = 46;
  const total = sec(t.total);
  const a = Math.round((sec(t.from) / total) * N);
  const b = Math.max(a + 2, Math.round((sec(t.to) / total) * N));
  let seed = [...t.title].reduce((n, c) => n + c.codePointAt(0), 0);
  const bars = [];
  for (let i = 0; i < N; i += 1) {
    seed = (seed * 9301 + 49297) % 233280;
    const h = 1 + Math.floor((seed / 233280) * 8);
    if (i === a) bars.push('<i class="md-handle" aria-hidden="true"></i>');
    bars.push(`<b class="md-w${h}${i >= a && i < b ? ' is-in' : ''}"></b>`);
    if (i === b - 1) bars.push('<i class="md-handle" aria-hidden="true"></i>');
  }
  return `<div class="md-trim"><div class="md-wave" role="img" aria-label="Фрагмент от ${t.from} до ${t.to} из ${t.total}">${bars.join('')}</div>`
    + `<p class="md-trim-times"><span>от ${t.from}</span><b>${t.len} секунд</b><span>до ${t.to}</span></p></div>`;
};

/* Кому назначена мелодия: общие виды и контакты */
const assigned = (t) => [
  ...KINDS.map((k) => ({ title: k.title, done: picks[k.id] === t.id })),
  ...Object.values(contacts).filter((c) => c.tone === t.id).map((c) => ({ title: `Когда звонит ${c.who}`, done: true })),
];

/**
 * Плеер-редактор мелодии: волна с ручками обрезки сверху, под ней управление
 * (без перемешивания и повтора — у мелодии их нет), затухание и «Назначить».
 */
export const toneScreen = (ui, t, { fresh = false, extra = [] } = {}) => {
  const i = ORDER.indexOf(t.id);
  const prev = tones[ORDER[i > 0 ? i - 1 : ORDER.length - 1]];
  const next = tones[ORDER[i >= 0 && i < ORDER.length - 1 ? i + 1 : 0]];
  const isPlaying = t.id === playing.tone;
  return ui.screen({
    id: t.id, theme: THEME, className: 'md-editor',
    body: [
      ui.nav({ title: fresh ? 'Новая мелодия' : 'Мелодия', back: 'down' }),
      ui.scroll([
        ui.section({ children: wave(t) }),
        ui.section({ children: ui.musicControls({
          title: t.title, sub: `${t.rec} · ${t.when}`,
          at: isPlaying ? playing.at : '0:00', left: isPlaying ? playing.left : `−0:${String(t.len).padStart(2, '0')}`, pct: isPlaying ? playing.pct : 0,
          playing: isPlaying,
          mark: `${t.fade ? 'затухание 2 с' : 'без затухания'} · из «${t.source}», ${t.total}`,
          like: { label: `Нравится · ${t.title}` },
          prev: { label: `Предыдущая · ${prev.title}`, go: prev.id, toast: undefined },
          next: { label: `Следующая · ${next.title}`, go: next.id, toast: undefined },
        }) }),
        ui.section({ children: ui.group({ cells: [
          ui.cell({ icon: 'activity', title: 'Затухание в конце', sub: 'последние 2 секунды тише', toggle: t.fade }),
          ui.cell({ icon: 'volume-2', title: 'Громче постепенно', sub: 'первые 5 секунд', toggle: t.id === 'podyom' }),
        ] }) }),
        ui.section({ title: 'Назначить', meta: fresh ? 'ещё никуда' : undefined, children: ui.checklist(assigned(t)) }),
        ui.section({ children: ui.list([ui.row({ title: 'Кому назначена', sub: 'мелодии контактов', go: 'contacts' })]) }),
        ...extra,
      ]),
    ],
  });
};

/** Лицо контакта: фото карточки или инициалы; ask — фото появляется после разрешения */
export const contactFace = (c, { large = false } = {}) => {
  const ini = `<span class="ui-avatar md-ava${large ? ' is-large' : ''} ${ui.hue(c.initial)}"${c.photo && c.ask ? ` data-hide-granted="${c.ask}"` : ''}>${c.initial}</span>`;
  if (!c.photo) return ini;
  const ph = `<span class="ui-avatar md-ava${large ? ' is-large' : ''} ${c.photo}${c.ask ? ' perm-hidden' : ''}"${c.ask ? ` data-show-granted="${c.ask}"` : ''}></span>`;
  return c.ask ? ini + ph : ph;
};

/** Строка контакта: открывает его карточку */
export const contactRow = (c) => ui.row({
  lead: contactFace(c), title: c.name,
  sub: c.tone ? `${tones[c.tone].title}` : c.birthday ? `общая мелодия · день рождения ${c.birthday}` : 'общая мелодия звонка',
  go: c.id, label: c.name,
});

/** Карточка контакта: кто звонит крупно и какая мелодия звучит */
export const contactScreen = (ui, c, { actions = [], extra = [] } = {}) => {
  const t = c.tone ? tones[c.tone] : tones[picks.call];
  return ui.screen({
    id: c.id, theme: THEME,
    body: [
      ui.nav({ title: '' }),
      ui.scroll([
        `<div class="md-caller">${contactFace(c, { large: true })}<h1 class="ui-title">${c.name}</h1><p class="ui-sub">${c.phone}</p></div>`,
        ...actions,
        ui.section({ title: `Когда звонит ${c.who}`, children: ui.list([
          toneRow(t, { checked: true, sub: c.tone ? `своя с ${c.since} · ${t.len} с` : `общая мелодия звонка · ${t.len} с` }),
        ]) }),
        ...extra,
      ]),
    ],
  });
};

export { alarm };
