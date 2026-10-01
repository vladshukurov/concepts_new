import { THEME, TABS } from './_shared.mjs';
import { cleanup, outage, meetingDay } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'events', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('События', ui.iconButton({ icon: 'mic', label: 'Новая заявка голосом', sr: 'Новая заявка голосом', ask: 'mic+speech|events|events' })),
    ui.granted('mic,speech', 'Распознано: «дверь во втором подъезде не закрывается»'),
    ui.denied('mic,speech', 'Заявку можно заполнить текстом'),
    ui.section({ title: 'Заявки', meta: '3 открыты', children: ui.list([
      ui.row({ lead: ui.leadIcon('mic', { accent: true }), title: 'Черновик: дверь не закрывается', sub: 'Второй подъезд · распознано из записи 0:12', toast: 'Черновик заявки открыт' }),
      ui.row({ lead: ui.leadIcon('wrench'), title: 'Доводчик, второй подъезд', sub: 'Елена назначена · мастер сегодня с 16:00', wrap: true, end: { badge: 'в работе' }, activate: 'commnotif|events' }),
    ]) }),
    ui.granted('commnotif', 'Уведомления о заявке приходят с именем мастера'),
    ui.section({ title: 'Апрель', children: [
      ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '12' }), title: cleanup.title, sub: `${cleanup.time} · ${cleanup.where}`, end: { value: 'В Календарь', ask: 'calendar|events|events', primary: true, label: 'Добавить субботник в Календарь' } }),
        ui.row({ lead: ui.leadIcon('', { text: String(outage.from) }), title: 'Опрессовка стояка', sub: `${outage.label} · без горячей воды`, go: 'post' }),
        ui.row({ lead: ui.leadIcon('', { text: '18' }), title: meetingDay.title, sub: `${meetingDay.time} · ${meetingDay.where} · нужен кворум`, go: 'post' }),
      ]),
      ui.granted('calendar', `Субботник в Календаре · ${cleanup.day}, ${cleanup.time}`),
      ui.denied('calendar', 'Без календаря событие остаётся здесь'),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'events' }),
});
