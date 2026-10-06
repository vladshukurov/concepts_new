import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'passwords', theme: THEME,
  body: [
    ui.nav({ title: 'Пароли дома' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [ui.cell({ icon: 'key', title: 'Автозаполнение', sub: 'Подставлять пароли дома в Safari', toggle: false, activate: 'autofill|fill' })] }) }),
      ui.section({ title: 'Записи дома', children: ui.list([
        ui.row({ lead: ui.leadIcon('building-2'), title: 'Кабинет УК', sub: 'uk-polevaya.ru · логин 12‑74', end: { value: 'Копировать', toast: 'Пароль скопирован', label: 'Копировать пароль кабинета УК' } }),
        ui.row({ lead: ui.leadIcon('video'), title: 'Видеонаблюдение', sub: 'Логин anna74', end: { value: 'Копировать', toast: 'Пароль скопирован', label: 'Копировать пароль видеонаблюдения' } }),
        ui.row({ lead: ui.leadIcon('wifi'), title: 'Гостевая сеть', sub: 'Dvor-Guest · WPA2', end: { value: 'Копировать', toast: 'Пароль скопирован', label: 'Копировать пароль сети' } }),
      ]) }),
      ui.section({ title: 'Кому видны', children: ui.list([
        ui.row({ lead: ui.leadIcon('users'), title: 'Жильцы 3 подъезда', sub: '18 человек · только чтение' }),
        ui.row({ lead: ui.leadIcon('shield'), title: 'Старший по дому', sub: 'Ольга Сергеевна · меняет пароли раз в 90 дней' }),
      ]) }),
      ui.section({ title: 'Последние подстановки', shownAfter: 'autofill', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '9:02' }), title: 'Кабинет УК в Safari', sub: 'Сегодня · передача показаний' }),
        ui.row({ lead: ui.leadIcon('', { text: '3 апр' }), title: 'Видеонаблюдение', sub: 'Пароль сменился, запись обновлена' }),
      ]) }),
    ]),
  ],
});
