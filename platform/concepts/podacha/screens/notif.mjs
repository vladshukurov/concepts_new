import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'notif', theme: THEME,
  body: [
    ui.nav({ title: 'Уведомления' }),
    ui.scroll([
      ui.section({ title: 'Сегодня', children: ui.list([
        ui.row({ lead: ui.avatar('ЖК'), title: 'Жанна проверила вашу замену', sub: '«Кешью-паста работает, добавьте ещё лимона» · 12 минут назад', subWrap: true, go: 'direct-zhanna' }),
        ui.row({ lead: ui.leadIcon('chef-hat', { accent: true }), title: 'Ужин из одной сковороды', sub: 'Начало в 19:00 · всё подготовлено', go: 'cookalong', primary: true }),
      ]) }),
      ui.section({ title: 'Вчера', children: ui.list([
        ui.row({ lead: ui.leadIcon('repeat-2'), title: 'Ваш пирог повторили 6 раз', sub: 'Два автора добавили фото результата', go: 'post' }),
      ]) }),
    ]),
  ],
});
