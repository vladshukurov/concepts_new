import { THEME, TABS } from './_shared.mjs';
import { moments, lastMatch } from '../model.mjs';

/* Клипы — вертикальные моменты прошлого матча, один на экран, как в ВК Клипах */
const m = moments.win;

export default (ui) => ui.screen({
  id: 'clips', theme: THEME, className: 'ui-clips',
  body: ui.clip({
    art: m.art, top: 'Клипы', sub: `${lastMatch.line} · момент 7 из ${lastMatch.moments}`,
    author: { initials: m.who.initial, name: m.who.name },
    title: m.title, meta: `${m.min}' · ${m.dur} · ${lastMatch.day}`, text: `Снял ${m.by.short} со скамейки`,
    rail: [
      { icon: 'heart', label: 'Нравится', count: '5', toggle: 'on' },
      { icon: 'sparkles', label: 'Лучший момент', count: `${m.votes}`, toggle: 'on' },
      { icon: 'trophy', label: lastMatch.title, count: 'Матч', go: 'match' },
      { icon: 'share', label: 'Поделиться', menu: 'Скопировать ссылку=Ссылка скопирована|Отправить в чат команды=Клип отправлен в чат команды' },
    ],
    pct: 45,
  }),
  tabs: ui.tabBar({ items: TABS, active: 'clips' }),
});
