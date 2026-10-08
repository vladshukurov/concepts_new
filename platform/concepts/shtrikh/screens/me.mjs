import { THEME, TABS } from './_shared.mjs';
import { people, places, own } from '../model.mjs';

/* Профиль автора: что нарисовано, неделя по дням, свои разделы и серии */
const works = 6;
const weekTotal = own.week.reduce((n, [, c]) => n + (c || 0), 0);
const week = own.week.map(([d, c]) => `<span class="${c === null ? 'is-next' : c ? 'is-on' : ''}"><i class="sh-bar-${c || 0}"></i><b>${d}</b></span>`).join('');
export default (ui) => ui.screen({
  id: 'me', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', [
      ui.textButton({ label: 'Изменить', go: 'account' }),
      ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' }),
    ]),
    `<div class="sh-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">Рисую дворы и рынки · линер и акварель</p>${ui.stats([[String(own.stats.sketches), 'зарисовок'], [String(own.stats.series), 'серий'], [String(own.stats.meets), 'встреч']])}</div>`,
    ui.section({ title: 'Эта неделя', meta: `${weekTotal} зарисовок · 3 дня подряд`, children: [
      `<div class="sh-week" aria-label="Зарисовки по дням недели">${week}</div>`,
      ui.list([ui.row({ lead: ui.leadIcon('layers', { round: true, accent: true }), title: places.panfilova.series, sub: `Серия · ${own.series.done} из ${own.series.of}, осень закрыта сегодня · ${own.series.next}`, subWrap: true, go: 'series' })]),
    ] }),
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('lock'), title: 'Черновики', sub: `${own.drafts} работ · открываются по Face ID`, go: 'lock' }),
      ui.row({ lead: ui.leadIcon('map-pin'), title: 'Мои места', sub: `${places.bazar.name} · ${places.bazar.works} зарисовок, чаще всего`, go: 'places' }),
      ui.row({ lead: ui.leadIcon('users'), title: 'Знакомые', sub: 'Алина, Лера и Миша · рисуем вместе', go: 'authors' }),
    ]) }),
    ui.section({ title: 'Серии', meta: String(own.stats.series), children: ui.list([
      ui.row({ lead: ui.leadIcon('layers'), title: 'Прилавки базара', sub: `${places.bazar.name} · ${places.bazar.works} зарисовок` }),
      ui.row({ lead: ui.leadIcon('layers'), title: 'Мосты Терренкура', sub: `${places.terrenkur.name} · ${places.terrenkur.works} зарисовок` }),
    ]) }),
    ui.section({ title: 'Зарисовки', meta: String(own.stats.sketches), children: `<div class="sh-series">${Array.from({ length: works }, (_, i) => `<button class="ph" data-go="post" aria-label="Зарисовка ${i + 1}"></button>`).join('')}</div>` }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'me' }),
});
