import { THEME } from './_shared.mjs';
import { schedule } from '../model.mjs';

/* Расписание спевок: всё уходит в Календарь, перенос спевки правит уже добавленное событие */
const cap = (s) => s[0].toUpperCase() + s.slice(1);
const block = (ui, week, title) => ui.section({ title, children: ui.list(schedule.filter((e) => e.week === week).map((e) => ui.row({
  lead: ui.leadIcon('', { text: e.time }), title: e.title, sub: `${cap(e.label)} · ${e.sub}`, subWrap: true,
  ...(e.iso === '2026-10-08' ? { go: 'rollcall', now: true } : {}),
}))) });
export default (ui) => ui.screen({
  id: 'schedule', theme: THEME,
  body: [
    ui.nav({ title: 'Расписание спевок', trailing: ui.iconButton({ icon: 'plus', label: 'Новая спевка', go: 'newrehearsal' }) }),
    ui.scroll([
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Спевки и концерт в Календарь', icon: 'calendar-plus', block: true, ask: 'calendar|schedule|schedule', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'calendar', children: ui.list([
        ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: `В Календаре · ${schedule.length} событий`, sub: 'Календарь «В унисон», до концерта 24 октября' }),
        ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: 'Спевка 13 октября — поправлена в Календаре', sub: 'Перенесена на 19:30 · Ирина, сегодня в 18:20' }),
      ]) }),
      ui.section({ children: ui.list([
        ui.reminder({ title: 'Напомнить о спевке за час', titleGranted: 'Напомним о спевке за час', sub: 'Перед каждой спевкой — время и зал', here: 'schedule' }),
        ui.row({ lead: ui.leadIcon('smartphone', { round: true }), title: 'Экран блокировки', sub: 'Как приходят напоминания и сообщения хора', go: 'lockscreen' }),
      ]) }),
            block(ui, 'week', 'Эта неделя'),
      block(ui, 'next', 'Следующая неделя'),
      block(ui, 'later', 'До концерта'),
    ]),
  ],
});
