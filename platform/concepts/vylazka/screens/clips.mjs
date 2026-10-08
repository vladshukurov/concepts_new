import { THEME, TABS } from './_shared.mjs';
import { films, lastTrip, routes } from '../model.mjs';

/* Клипы — ролики с привалов вертикально, один на экран, как в ВК Клипах */
const f = films.pines;

export default (ui) => ui.screen({
  id: 'clips', theme: THEME, className: 'ui-clips',
  body: ui.clip({
    art: f.art, top: 'Клипы', sub: `${routes.quarry.name} · ролик 3 из ${lastTrip.clips}`,
    author: { initials: f.by.initial, name: f.by.name },
    title: f.title, meta: `${f.dur} · ${f.meta}`, text: 'Сняла на привале после родника',
    rail: [
      { icon: 'heart', label: 'Нравится', count: '4', toggle: 'on' },
      { icon: 'film', label: 'В фильм похода', count: 'В фильме', toggle: 'on' },
      { icon: 'route', label: routes.quarry.name, count: 'Маршрут', go: 'route' },
      { icon: 'share', label: 'Поделиться', menu: 'Скопировать ссылку=Ссылка скопирована|Отправить в чат похода=Клип отправлен в чат похода' },
    ],
    pct: 60,
  }),
  tabs: ui.tabBar({ items: TABS, active: 'clips' }),
});
