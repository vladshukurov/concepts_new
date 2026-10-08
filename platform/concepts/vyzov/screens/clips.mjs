import { THEME, TABS } from './_shared.mjs';
import { videos, oldTown } from '../model.mjs';

/* Клипы — вертикальные ролики команд с точек своих квестов, один на экран, как в ВК Клипах */
const v = videos.statue;

export default (ui) => ui.screen({
  id: 'clips', theme: THEME, className: 'ui-clips',
  body: ui.clip({
    art: v.art, top: 'Клипы', sub: `Квест «${oldTown.title}» · ролик 1 из ${oldTown.clips}`,
    author: { initials: v.who.initial, name: `${v.who.short} · ${v.team.name}` },
    title: v.title, meta: `точка ${v.point} · ${v.dur} · ${v.when}`, text: 'Задание: повторите позу памятника',
    rail: [
      { icon: 'heart', label: 'Нравится', count: '4', toggle: 'on' },
      { icon: 'trophy', label: 'Засчитать точку', count: '+3', toggle: 'on' },
      { icon: 'flag', label: oldTown.title, count: 'Квест', go: 'quest' },
      { icon: 'share', label: 'Поделиться', menu: 'Скопировать ссылку=Ссылка скопирована|Отправить команде=Клип отправлен команде' },
    ],
    pct: 40,
  }),
  tabs: ui.tabBar({ items: TABS, active: 'clips' }),
});
