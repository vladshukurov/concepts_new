import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'lock', theme: THEME,
  body: [
    ui.nav({ title: 'Замок на ветпаспорте' }),
    ui.scroll([
      ui.denied('faceid'),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'scan-face', title: 'Замок Face ID', sub: 'Ветпаспорт и место выгула', toggle: true, primary: true, toast: 'Замок включён' }),
        ui.cell({ icon: 'lock', title: 'Закрывать в фоне', sub: 'Когда «Выгул» сворачивается', toggle: false, toast: 'Будем закрывать в фоне' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Спрашивать', cells: [
        ui.cell({ title: 'Сразу', sub: 'Дольше открывается карточка', toast: 'Спрашивать сразу' }),
        ui.cell({ title: 'Через 5 минут', sub: 'Хватает на приём у врача', check: true }),
        ui.cell({ title: 'Через час', sub: 'Почти не срабатывает на прогулке', toast: 'Спрашивать через час' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Под замком', cells: [
        ui.cell({ icon: 'id-card', title: 'Номер чипа', sub: '643 ··· 8017', toggle: true, toast: 'Номер чипа под замком' }),
        ui.cell({ icon: 'file-text', title: 'Диагнозы и назначения', sub: '7 записей, последняя 14 мая', toggle: true, toast: 'Диагнозы под замком' }),
        ui.cell({ icon: 'map-pin', title: 'Постоянное место выгула', sub: 'Лопухинский сад, будни в 18:40', toggle: false, toast: 'Место выгула под замком' }),
        ui.cell({ icon: 'users', title: 'Контакты передержки', sub: 'Два номера', toggle: false, toast: 'Контакты передержки под замком' }),
      ] }) }),
      ui.foot('Замок включён 12 марта · снимался 3 раза', 'is-block'),
    ]),
  ],
});
