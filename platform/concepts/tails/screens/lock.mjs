import { THEME } from './_shared.mjs';
import { chip } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'lock', theme: THEME,
  body: [
    ui.nav({ title: 'Замок на ветпаспорте' }),
    ui.scroll([
      ui.denied('faceid'),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'scan-face', title: 'Замок Face ID', sub: 'Номер чипа и наблюдения', toggle: true, primary: true, toast: 'Замок включён' }),
        ui.cell({ icon: 'lock', title: 'Закрывать в фоне', sub: 'Когда «Выгул» сворачивается', toggle: false, toast: 'Будем закрывать в фоне' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Спрашивать', cells: [
        ui.cell({ title: 'Сразу', sub: 'Дольше открывается карточка', toast: 'Спрашивать сразу' }),
        ui.cell({ title: 'Через 5 минут', sub: 'Хватает на приём у врача', check: true }),
        ui.cell({ title: 'Через час', sub: 'Почти не срабатывает на прогулке', toast: 'Спрашивать через час' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Под замком', cells: [
        ui.cell({ icon: 'id-card', title: 'Номер чипа', sub: `${chip.masked} · на «Здоровье»`, toggle: true, toast: 'Номер чипа под замком' }),
        ui.cell({ icon: 'notebook-pen', title: 'Наблюдения владельца', sub: '23 заметки, последняя вчера', toggle: true, toast: 'Наблюдения под замком' }),
        ui.cell({ icon: 'map-pin', title: 'Постоянное место выгула', sub: 'Лопухинский сад, будни в 18:40', toggle: false, toast: 'Место выгула под замком' }),
        ui.cell({ icon: 'users', title: 'Контакты передержки', sub: 'Два номера', toggle: false, toast: 'Контакты передержки под замком' }),
      ] }) }),
      ui.foot('Замок включён сегодня в 9:41', 'is-block'),
    ]),
  ],
});
