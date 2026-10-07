import { THEME } from './_shared.mjs';
import { people, today, clubs } from '../model.mjs';

const CLUB_ICON = { 'Бассейн': 'droplets', 'Шахматы': 'trophy', 'Рисование': 'palette', 'Английский': 'book-open' };

/* Расписание детей: школа и кружки на неделю. Отсюда занятия уходят в Календарь,
   перенос занятия правит уже добавленное событие */
export default (ui) => ui.screen({
  id: 'schedule', theme: THEME,
  body: [
    ui.nav({ title: 'Расписание', trailing: ui.iconButton({ icon: 'plus', label: 'Новое занятие', go: 'newclass' }) }),
    ui.scroll([
      ui.section({ title: 'Сегодня', meta: today.label.split(', ')[1], children: ui.list(today.items.map(([time, title, sub]) => ui.row({ lead: ui.leadIcon('', { text: time }), title, sub }))) }),
      ui.section({ title: 'Кружки на неделе', meta: `${clubs.perWeek} занятий`, children: [
        ui.list(clubs.list.map(([who, what, when]) => ui.row({
          lead: ui.leadIcon(CLUB_ICON[what] || 'calendar', { round: true, accent: true }), title: `${what} · ${who}`, sub: when,
        }))),
        ui.foot(`${clubs.moved.what}: ${clubs.moved.day} теперь в ${clubs.moved.to}, было ${clubs.moved.was}`),
        ui.actions([ui.button({ label: 'Занятия в Календарь', icon: 'calendar-plus', variant: 'secondary', block: true, ask: 'calendar|schedule|schedule' })]),
      ] }),
      ui.section({ shownAfter: 'calendar', children: ui.list([
        ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: `В Календаре · ${clubs.perWeek} занятий в неделю`, sub: 'Календарь «Кружки Гариповых», напоминания за 30 минут' }),
        ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: `${clubs.moved.what} — ${clubs.moved.to} в Календаре`, sub: `${clubs.moved.day[0].toUpperCase() + clubs.moved.day.slice(1)}, было ${clubs.moved.was} · событие поправлено` }),
      ]) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.avatar(people.mila.initial), title: 'Мила · 1 «А»', sub: 'Школа № 5 · по будням до 12:30' }),
        ui.row({ lead: ui.avatar(people.danya.initial), title: 'Даня · 5 «Б»', sub: 'Школа № 5 · по будням до 13:40' }),
      ]) }),
    ]),
  ],
});
