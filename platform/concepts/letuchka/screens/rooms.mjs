import { THEME } from './_shared.mjs';
import { rooms, standup } from '../model.mjs';

/* Переговорки на сегодня: комнаты сегментом на месте, свои брони и летучки уходят в Календарь и правятся при переносе */
const room = (ui, key, r, hidden) => ui.section({
  title: `${r.name} · ${r.seats} мест${r.seats < 5 ? 'а' : ''}`, tags: [key], className: hidden ? 'is-filtered-out' : undefined,
  children: ui.list(r.items.map(([time, title, sub]) => ui.row({
    lead: ui.leadIcon('', { text: time }), title, sub,
    ...(title === 'Летучка' ? { go: 'standup' } : {}),
  }))),
});
export default (ui) => ui.screen({
  id: 'rooms', theme: THEME,
  body: [
    ui.nav({ title: 'Переговорки', trailing: ui.iconButton({ icon: 'plus', label: 'Забронировать', go: 'book' }) }),
    ui.scroll([
      ui.section({ children: ui.segments([
        { label: 'Все', on: true, filter: 'all' },
        { label: 'Большая', filter: 'big' },
        { label: 'Малая', filter: 'small' },
      ]) }),
      ui.section({ children: [
        ui.list([ui.row({ lead: ui.leadIcon('history', { round: true }), title: `Переговорки обновлены в ${rooms.synced}`, sub: 'Катя заняла Малую на озвучку в 14:00' })]),
        ui.actions([ui.button({ label: 'Мои брони и летучки в Календарь', icon: 'calendar-plus', block: true, ask: 'calendar|rooms|rooms', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'calendar', children: ui.list([
        ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: `В Календаре · ${rooms.mine} события и летучки`, sub: 'Календарь «Полдень», напоминание за 10 минут' }),
        ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: `Летучка ${standup.time} — поправлена в Календаре`, sub: `было ${standup.was} · ${standup.movedBy} перенёс вчера в ${standup.movedAt}` }),
      ]) }),
      room(ui, 'big', rooms.big, false),
      room(ui, 'small', rooms.small, false),
    ]),
  ],
});
