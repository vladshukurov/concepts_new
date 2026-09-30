import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'passwords', theme: THEME,
  body: [
    ui.nav({ title: 'Пароли дома' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [ui.cell({ icon: 'key', title: 'Автозаполнение', sub: 'Подставлять пароли дома в Safari', toggle: false, activate: 'autofill|fill' })] }) }),
      ui.section({ title: 'Записи дома', children: ui.list([
        ui.row({ lead: ui.leadIcon('building-2'), title: 'Кабинет УК', sub: 'uk-polevaya.ru · логин 12-74', end: { value: 'Копировать', toast: 'Пароль скопирован', label: 'Копировать пароль кабинета УК' } }),
        ui.row({ lead: ui.leadIcon('video'), title: 'Видеонаблюдение', sub: 'Логин anna74', end: { value: 'Копировать', toast: 'Пароль скопирован', label: 'Копировать пароль видеонаблюдения' } }),
        ui.row({ lead: ui.leadIcon('wifi'), title: 'Гостевая сеть', sub: 'Dvor-Guest · WPA2', end: { value: 'Копировать', toast: 'Пароль скопирован', label: 'Копировать пароль сети' } }),
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'eye', title: 'Видят', sub: 'Жильцы с подтверждённым домом' }),
        ui.cell({ icon: 'user', title: 'Обновил', sub: 'Старший по подъезду, 3 апреля' }),
      ] }) }),
    ]),
  ],
});
