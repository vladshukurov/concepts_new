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

const attr = (name, value) => (value === undefined || value === null || value === false ? '' : value === true ? ` ${name}` : ` ${name}="${String(value).replace(/"/g, '&quot;')}"`);

/** Атрибуты действия: data-* и aria-label. */
export function act(a = {}) {
  return attr('data-primary', a.primary)
    + attr('data-go', a.go)
    + attr('data-ask', a.ask)
    + attr('data-activate', a.activate)
    + attr('data-toast', a.toast)
    + attr('data-back', a.back)
    + attr('aria-label', a.label);
}
const isAction = (a) => a && (a.go || a.ask || a.activate || a.toast || a.back);
const cls = (...names) => names.filter(Boolean).join(' ');
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
/** Заголовок корня вкладки 34/41 и действия справа. */
export const largeTitle = (title, trailing = '') => `<header class="ui-large"><h1>${title}</h1>${join(trailing)}</header>`;
/** Шапка корня с брендом или профилем слева. */
export const top = (lead, trailing = '') => `<header class="ui-top">${lead}${join(trailing)}</header>`;
export const me = ({ name, initial, go = 'profile' }) =>
  `<button class="ui-me"${act({ go, label: 'Профиль' })}>${avatar(initial)}<strong>${name}</strong>${icon('chevron-right')}</button>`;
export const wordmark = ({ name, glyph, className }) =>
  `<strong class="${cls('ui-wordmark', className)}"><span class="ui-wordmark-logo">${icon(glyph)}</span>${name}</strong>`;

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
  `<span class="${cls('ui-avatar', large && 'is-large')}"${hidden ? ' aria-hidden="true"' : ''}>${initial}</span>`;
export const badge = (text, { accent = false } = {}) => `<span class="${cls('ui-badge', accent && 'is-blue')}">${text}</span>`;
export const duration = (text) => `<span class="ui-duration">${text}</span>`;
export const toggle = (on = false) => `<span class="${cls('ui-switch', on && 'is-on')}"></span>`;
/** Прогресс. value — класс доли из styles.css концепта (inline-style запрещён UI v3). */
export const progress = ({ fillClass, white = false }) => `<div class="${cls('ui-progress', white && 'is-white')}"><i class="${fillClass}"></i></div>`;
export const times = (a, b) => `<div class="ui-times"><span>${a}</span><span>${b}</span></div>`;
export const sr = (text) => `<span class="ui-sr">${text}</span>`;
/** Левая колонка строки 56: значок или короткий текст (дата, время). */
export const leadIcon = (name, { round = false, accent = false, text } = {}) =>
  `<span class="${cls('ui-lead', round && 'is-round', accent && 'is-accent')}">${text ?? icon(name)}</span>`;

/* ── Секции и списки ── */
/** Секция: заголовок title1 и справа — подпись или круглая стрелка «ещё». */
export function section({ title, meta, more, children, className }) {
  const trailing = more ? iconButton({ icon: 'chevron-right', look: 'fill', ...more })
    : meta ? `<span class="ui-foot">${meta}</span>` : '';
  const head = title ? `<div class="ui-sec-head"><h2>${title}</h2>${trailing}</div>` : '';
  return `<section class="${cls('ui-sec', className)}">${head}${join(children)}</section>`;
}
export const list = (rows) => `<div class="ui-list">${join(rows)}</div>`;

/**
 * Строка списка: обложка 56 (или 16:9 96×56) · две строки · хвост.
 * thumb — классы обложки (`cover cover-2`, `ph`); lead — своя разметка слева.
 * end — { icon, value, badge, action } либо готовая разметка.
 * Если у строки есть action и у хвоста своё действие — основная часть
 * становится отдельной кнопкой, чтобы кнопки не вкладывались друг в друга.
 */
export function row({ thumb, wide = false, lead, title, sub, subWrap = false, wrap = false, end, now = false, className, duration: dur, ...a }) {
  const leadHtml = lead || (thumb !== undefined ? `<span class="${cls('ui-thumb', wide && 'is-wide', thumb)}">${dur ? duration(dur) : ''}</span>` : '');
  const text = `<span class="ui-row-text"><strong>${title}</strong>${sub ? `<span${subWrap ? ' class="is-wrap"' : ''}>${sub}</span>` : ''}</span>`;
  let endHtml = '';
  if (end && typeof end === 'object') {
    const inner = end.badge ? badge(end.badge, { accent: true })
      : end.value !== undefined ? end.value
      : end.icon ? icon(end.icon) : '';
    endHtml = isAction(end)
      ? `<button class="${cls('ui-row-end', end.value !== undefined && 'is-value is-action')}"${act({ ...end, label: end.label })}>${inner}</button>`
      : `<span class="${cls('ui-row-end', end.value !== undefined && 'is-value', end.linkColor && 'ui-link')}">${inner}</span>`;
  } else if (end) endHtml = end;
  const rowCls = cls('ui-row', now && 'is-now', wrap && 'is-wrap', className);
  /* Подпись строки-кнопки — её заголовок, а не инициалы в аватаре слева */
  if (isAction(a) && !a.label) a = { ...a, label: String(title).replace(/<[^>]+>/g, '') };
  if (isAction(a) && end && typeof end === 'object' && isAction(end)) {
    return `<div class="${rowCls}"><button class="ui-row-main"${act(a)}>${leadHtml}${text}</button>${endHtml}</div>`;
  }
  const tag = isAction(a) ? 'button' : 'div';
  return `<${tag} class="${rowCls}"${act(a)}>${leadHtml}${text}${endHtml}</${tag}>`;
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
  const tail = sw !== undefined ? (permKey ? `<span class="${cls('ui-switch', sw && 'is-on')}" data-switch="${permKey}"></span>` : toggle(sw))
    : `<span class="${cls('ui-cell-end', check && 'ui-link')}">${value ?? ''}${check ? icon('check') : sw === undefined && !a.toast ? chevron : ''}</span>`;
  const tag = isAction(a) ? 'button' : 'div';
  return `<${tag} class="${cls('ui-cell', !ic && !lead && 'no-ico', className)}"${act(a)}>${lead || (ic ? icon(ic) : '')}<span class="ui-cell-text"><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}</span>${tail}</${tag}>`;
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
/** Плитки-входы 2 в ряд: текст слева, обложка справа. */
export const tiles = (items) => `<div class="ui-tiles">${items.map(({ title, sub, art, ...a }) =>
  `<button class="ui-tile"${act({ label: title, ...a })}><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}${art ? `<span class="ui-tile-art ${art}"></span>` : ''}</button>`).join('')}</div>`;
/** Чипсы. Каждый чипс — переход, не тост: фильтр-пустышку ловит аудит. */
export const chips = (items) => `<div class="ui-chips">${items.map(({ label, on = false, ...a }) =>
  `<button class="${cls('ui-chip', on && 'is-on')}"${act(a)}><span>${label}</span></button>`).join('')}</div>`;
/** Поле поиска: кнопка-вход или активное поле со значением. */
export function search({ placeholder, value, clear, ...a }) {
  const content = value ? `<strong>${value}</strong>${clear ? iconButton({ icon: 'circle-x', look: 'muted', label: 'Очистить запрос', ...clear }) : ''}` : `<span>${placeholder}</span>`;
  const tag = isAction(a) ? 'button' : 'div';
  return `<${tag} class="ui-search"${act(a)}>${icon('search')}${content}</${tag}>`;
}
export const stats = (items) => `<div class="ui-stats">${items.map(([v, l]) => `<div class="ui-stat"><strong>${v}</strong><span>${l}</span></div>`).join('')}</div>`;
/** Сообщение при отказе в доступе: показывается движком по data-show-denied. */
export const denied = (key, text, extra = '') =>
  `<div class="perm-hidden" data-show-denied="${key}"><p class="ui-note">${icon('info')}<span>${text}</span></p>${extra}</div>`;
/** Результат действия после разрешения: движок показывает его по data-show-granted. */
export const granted = (key, text) =>
  `<p class="perm-hidden ui-note is-ok" data-show-granted="${key}">${icon('circle-check')}<span>${text}</span></p>`;
export const note = (text) => `<p class="ui-note">${icon('info')}<span>${text}</span></p>`;
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
    `<button class="${cls('ui-tab tab', t.id === active && 'is-on')}" data-go="${t.id}">${icon(t.icon)}<span>${t.label}</span></button>`).join('')}</div></nav>`;
/** Нижний лист поверх экрана. */
export const sheet = (children, className) => `<section class="${cls('ui-sheet', className)}"><span class="ui-sheet-grab"></span>${join(children)}</section>`;

/* ── Соцсеть: истории и посты ── */
/** Истории. items: [{ label, face (класс фото) | initial | icon, seen, action }]. Без фото — инициалы, не серая заглушка. */
export const stories = (items) => `<div class="ui-stories">${items.map(({ label, face, initial, icon: ic, seen = false, ...a }) =>
  `<button class="${cls('ui-story', seen && 'is-seen')}"${act({ label, ...a })}><span class="ui-story-ring"><span class="${cls('ui-story-face', face, initial && 'is-initial')}">${ic ? icon(ic) : initial || ''}</span></span><span>${label}</span></button>`).join('')}</div>`;

/**
 * Пост ленты. author: { face, name, meta, action }. media — класс фото,
 * attach — своя разметка вложения (карточка курса, прогулки).
 * likes/comments/shares — числа; liked — лайк уже стоит.
 */
export function post({ author, text, media, attach, likes, comments, shares, views, liked = false, menu, open, discuss, className }) {
  const ava = author.initial ? `<span class="ui-post-ava is-initial">${author.initial}</span>` : `<span class="ui-post-ava ${author.face || ''}"></span>`;
  const head = `<div class="ui-post-head"><button class="ui-post-author"${act({ label: author.name, ...author.action })}>${ava}<span class="ui-post-who"><strong>${author.name}</strong><span>${author.meta}</span></span></button>${menu ? iconButton({ icon: 'ellipsis', label: 'Действия с записью', ...menu }) : ''}</div>`;
  const bar = `<div class="ui-post-bar">${likes !== undefined ? `<button class="${cls('ui-post-act', liked && 'is-on')}"${act({ toast: liked ? 'Лайк убран' : 'Понравилось', label: 'Нравится' })}>${icon('heart')}${likes}</button>` : ''}${comments !== undefined ? `<button class="ui-post-act"${act({ ...(discuss || { toast: 'Комментарии' }), label: 'Комментарии' })}>${icon('message-circle')}${comments}</button>` : ''}${shares !== undefined ? `<button class="ui-post-act"${act({ toast: 'Ссылка скопирована', label: 'Поделиться' })}>${icon('share')}${shares}</button>` : ''}${views ? `<span class="ui-post-views">${icon('eye')}${views}</span>` : ''}</div>`;
  return `<article class="${cls('ui-post', className)}">${head}${text ? (open ? `<button class="ui-post-text"${act(open)}>${text}</button>` : `<p class="ui-post-text">${text}</p>`) : ''}${media ? (open ? `<button class="ui-post-media ${media}"${act({ label: 'Открыть публикацию', ...open })}></button>` : `<div class="ui-post-media ${media}"></div>`) : ''}${attach ? `<div class="ui-post-attach">${attach}</div>` : ''}${bar}</article>`;
}

/** Сегменты: переключают вид внутри экрана. */
export const segments = (items) => `<div class="ui-seg">${items.map(({ label, on = false, ...a }) =>
  `<button class="${on ? 'is-on' : ''}"${act(a)}>${label}</button>`).join('')}</div>`;

/** Строка «Что нового?» над лентой: аватар, приглашение написать, быстрые действия. */
export const composerPrompt = ({ initial, face, placeholder, trailing = '', ...a }) =>
  `<div class="ui-prompt"><button class="ui-prompt-main"${act({ label: placeholder, ...a })}>${initial ? `<span class="ui-post-ava is-initial">${initial}</span>` : `<span class="ui-post-ava ${face}"></span>`}<span>${placeholder}</span></button>${join(trailing)}</div>`;

/* ── Мессенджер: диалоги, чат, звонок ── */
const face = ({ face: f, initial }, cl) => initial ? `<span class="${cl} is-initial">${initial}</span>` : `<span class="${cl} ${f || 'ph'}"></span>`;

/** Строка диалога: аватар с онлайном, имя и время, последнее сообщение и счётчик. */
export const dialog = ({ name, text, time, unread, online = false, you = false, muted = false, ...a }) =>
  `<button class="ui-dialog"${act({ label: `Диалог: ${name}`, ...a })}><span class="ui-dialog-ava">${face(a, 'ui-dialog-face')}${online ? '<i class="ui-online"></i>' : ''}</span><span class="ui-dialog-body"><span class="ui-dialog-top"><strong>${name}</strong><span>${time}</span></span><span class="ui-dialog-bottom"><span>${you ? '<b>Вы:</b> ' : ''}${text}</span>${unread ? `<span class="${cls('ui-unread', muted && 'is-muted')}">${unread}</span>` : ''}</span></span></button>`;

/** Шапка чата: назад · аватар, имя и статус · звонок. */
export const chatNav = ({ name, status, call, ...who }) =>
  `<header class="ui-nav ui-chat-nav">${iconButton({ icon: 'chevron-left', label: 'Назад', back: true })}<span class="ui-chat-who">${face(who, 'ui-chat-face')}<span><strong>${name}</strong><span>${status}</span></span></span>${call ? iconButton({ icon: 'phone', label: 'Позвонить', sr: 'Позвонить', ...call }) : '<span></span>'}</header>`;

export const day = (text) => `<p class="ui-day">${text}</p>`;
/** Пузырь сообщения. out — исходящее; read — прочитано; attach — вложение над текстом. */
export const bubble = ({ out = false, text = '', time, read = false, attach = '', ...a }) => {
  const tag = isAction(a) ? 'button' : 'div';
  return `<${tag} class="${cls('ui-bubble', out ? 'is-out' : 'is-in', attach && 'has-attach')}"${act(a)}>${attach}${text ? `<span class="ui-bubble-text">${text}</span>` : ''}<span class="ui-bubble-meta">${time}${out ? icon(read ? 'check-check' : 'check') : ''}</span></${tag}>`;
};
/** Голосовое: кнопка воспроизведения, волна и длительность. */
export const voice = ({ out = false, dur, time, ...a }) =>
  `<div class="${cls('ui-bubble', 'ui-voice', out ? 'is-out' : 'is-in')}">${iconButton({ icon: 'play', fill: true, label: `Голосовое ${dur}`, toast: `Воспроизведение ${dur}`, ...a })}<i class="ui-wave"></i><span class="ui-bubble-meta">${dur} · ${time}</span></div>`;
/** Лента сообщений. */
export const chat = (items) => `<div class="ui-chat">${join(items)}</div>`;
/** Поле ввода: вложение, текст, голосовое или отправка. */
export const composer = ({ placeholder = 'Сообщение', attach, mic, send }) =>
  `<div class="ui-composer">${iconButton({ icon: 'paperclip', label: 'Вложение', ...attach })}<span class="ui-composer-field">${placeholder}</span>${mic ? iconButton({ icon: 'mic', label: 'Голосовое сообщение', ...mic }) : iconButton({ icon: 'send', label: 'Отправить', ...send })}</div>`;

/** Экран звонка: крупный аватар, имя, статус и ряд круглых кнопок. controls: [{ icon, label, end, ...action }]. */
export const callView = ({ name, status, controls, ...who }) =>
  `<div class="ui-call">${face(who, 'ui-call-face')}<strong>${name}</strong><span>${status}</span><div class="ui-call-controls">${controls.map(({ icon: ic, label, end = false, ...a }) =>
    `<span class="ui-call-ctl"><button class="${cls('ui-call-btn', end && 'is-end')}"${act({ label, ...a })}>${icon(ic)}</button><span>${label}</span></span>`).join('')}</div></div>`;
