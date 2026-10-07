import { THEME } from './_shared.mjs';
import { program, programCount, meet } from '../model.mjs';

/* Программа поездки: дни — сегментом на месте, вся программа уходит в Календарь и правится там при переносе */
const day = (ui, key, d, hidden) => ui.section({
  title: d.label[0].toUpperCase() + d.label.slice(1), tags: [key], className: hidden ? 'is-filtered-out' : undefined,
  children: ui.list(d.items.map(([time, title, sub]) => ui.row({
    lead: ui.leadIcon('', { text: time }), title, sub,
    ...(title === 'Сбор у отеля' ? { go: 'rollcall' } : {}),
  }))),
});
export default (ui) => ui.screen({
  id: 'program', theme: THEME,
  body: [
    ui.nav({ title: 'Программа', trailing: ui.iconButton({ icon: 'plus', label: 'Добавить пункт', menu: ['Место из Карт>share', 'Время и место вручную>programnew'] }) }),
    ui.scroll([
      ui.section({ children: ui.segments([
        { label: 'Пт 9', filter: 'fri' },
        { label: 'Сб 10', on: true, filter: 'sat' },
        { label: 'Вс 11', filter: 'sun' },
      ]) }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Вся программа в Календарь', icon: 'calendar-plus', block: true, ask: 'calendar|program|program', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'calendar', children: ui.list([
        ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: `В Календаре · ${programCount} событий`, sub: 'Календарь «Казань · осень», напоминания за 30 минут' }),
        ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: `Сбор ${meet.time} — поправлен в Календаре`, sub: `Было ${meet.was} · перенесено вчера в ${meet.movedAt}` }),
      ]) }),
      day(ui, 'fri', program.fri, true),
      day(ui, 'sat', program.sat, false),
      day(ui, 'sun', program.sun, true),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('map-pin', { round: true, accent: true }), title: 'Место из Карт', sub: 'Последнее — Тюбетей, Баумана, 64', go: 'share' }),
      ]) }),
    ]),
  ],
});
