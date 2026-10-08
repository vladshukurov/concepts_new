import { THEME, TABS } from './_shared.mjs';
import { highlights, lenaEvening, tasks } from '../model.mjs';

/* Клипы — вертикальные ответы игроков вчерашнего вечера, один на экран, как в ВК Клипах */
const h = highlights.monday;

export default (ui) => ui.screen({
  id: 'clips', theme: THEME, className: 'ui-clips',
  body: ui.clip({
    art: h.art, top: 'Клипы', sub: `${lenaEvening.title} · ответ 1 из ${lenaEvening.answers}`,
    author: { initials: h.who.initial, name: h.who.short },
    title: h.title, meta: `раунд ${h.round} · ${h.dur} · вчера`, text: `Задание: ${tasks.monday.toLowerCase()}`,
    rail: [
      { icon: 'heart', label: 'Нравится', count: '5', toggle: 'on' },
      { icon: 'trophy', label: 'Голос за ответ', count: `${h.votes}`, toggle: 'on' },
      { icon: 'users', label: lenaEvening.title, count: 'Вечер', go: 'evening' },
      { icon: 'share', label: 'Поделиться', menu: 'Скопировать ссылку=Ссылка скопирована|Отправить игрокам=Клип отправлен игрокам' },
    ],
    pct: 40,
  }),
  tabs: ui.tabBar({ items: TABS, active: 'clips' }),
});
