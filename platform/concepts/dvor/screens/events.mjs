import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'events', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('События', ui.iconButton({ icon: 'mic', label: 'Новая заявка голосом', sr: 'Новая заявка голосом', ask: 'mic+speech|events|events' })),
    ui.denied('mic,speech', 'Заявку можно заполнить текстом'),
    ui.section({ title: 'Заявки', meta: '3 открыты', children: ui.list([
      ui.row({ lead: ui.leadIcon('mic', { accent: true }), title: 'Черновик: дверь не закрывается', sub: 'Второй подъезд · распознано из записи 0:12', toast: 'Черновик заявки открыт' }),
      ui.row({ lead: ui.leadIcon('wrench'), title: 'Доводчик, второй подъезд', sub: 'Елена назначена · мастер сегодня с 16:00', wrap: true, end: { badge: 'в работе' }, activate: 'commnotif|events' }),
    ]) }),
    ui.granted('commnotif', 'Уведомления о заявке приходят с именем мастера'),
    ui.section({ title: 'Апрель', children: [
      ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '12' }), title: 'Субботник во дворе', sub: '11:00 · второй подъезд', end: { value: 'В Календарь', ask: 'calendar|events|events', primary: true, label: 'Добавить субботник в Календарь' } }),
        ui.row({ lead: ui.leadIcon('', { text: '18' }), title: 'Собрание собственников', sub: '19:00 · холл · нужен кворум', go: 'post' }),
        ui.row({ lead: ui.leadIcon('', { text: '14' }), title: 'Опрессовка стояка', sub: '14–17 апреля · без горячей воды', go: 'post' }),
      ]),
      ui.denied('calendar', 'Без календаря событие остаётся здесь'),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'events' }),
});
