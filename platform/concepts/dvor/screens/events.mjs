import { THEME, TABS } from './_shared.mjs';
import { cleanup, outage, meetingDay } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'events', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('События', ui.iconButton({ icon: 'mic', label: 'Новая заявка голосом', sr: 'Новая заявка голосом', ask: 'mic+speech|dictate|events' })),
    ui.denied('mic,speech'),
    ui.section({ title: 'Заявки', meta: '2 открыты', children: ui.list([
      ui.row({ lead: ui.leadIcon('mic', { accent: true }), title: 'Черновик: дверь не закрывается', sub: '3 подъезд · распознано из записи 0:12', toast: 'Черновик заявки открыт' }),
      ui.row({ lead: ui.leadIcon('wrench'), title: 'Доводчик, 3 подъезд', sub: 'Елена назначена · мастер сегодня с 16:00', wrap: true, end: { badge: 'в работе' }, activate: 'commnotif|ukchat' }),
    ]) }),
    ui.section({ title: 'Апрель', children: [
      ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '12' }), title: cleanup.title, sub: `${cleanup.time} · ${cleanup.where}`, end: { value: 'В Календарь', ask: 'calendar|events|events', primary: true, label: 'Добавить субботник в Календарь' } }),
        ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: 'Субботник в Календаре', sub: 'Завтра, 11:00 · напомним за час, перенос подхватится сам', shownAfter: 'calendar' }),
        ui.row({ lead: ui.leadIcon('', { text: String(outage.from) }), title: 'Опрессовка стояка', sub: `${outage.label} · без горячей воды`, go: 'chat' }),
        ui.row({ lead: ui.leadIcon('', { text: '18' }), title: meetingDay.title, sub: `${meetingDay.time} · ${meetingDay.where} · нужен кворум`, go: 'chat' }),
      ]),
      ui.denied('calendar'),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'events' }),
});
