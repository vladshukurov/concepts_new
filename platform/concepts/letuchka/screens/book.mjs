import { THEME } from './_shared.mjs';
import { rooms } from '../model.mjs';

/* Новая бронь переговорки: комната, время и тема — бронь сразу видна всей студии */
export default (ui) => ui.screen({
  id: 'book', theme: THEME,
  body: [
    ui.nav({ title: 'Новая бронь', back: 'close', trailing: ui.textButton({ label: 'Готово', strong: true, toast: 'Малая забронирована на 13:00–13:30|rooms' }) }),
    ui.scroll([
      ui.section({ children: [
        `<label class="lt-field"><span>Тема</span><input placeholder="О чём встреча" value="Созвон с типографией" aria-label="Тема встречи"/></label>`,
      ] }),
      ui.section({ title: 'Комната', children: ui.segments([
        { label: `${rooms.big.name} · ${rooms.big.seats}`, filter: 'big' },
        { label: `${rooms.small.name} · ${rooms.small.seats}`, on: true, filter: 'small' },
      ]) }),
      ui.section({ title: 'Сегодня, свободно', tags: ['small'], children: ui.group({ cells: [
        ui.cell({ icon: 'clock', title: '11:45–14:00', sub: 'до озвучки Кати', check: false }),
        ui.cell({ icon: 'clock', title: '13:00–13:30', sub: 'выбрано · 30 минут', check: true }),
        ui.cell({ icon: 'clock', title: '16:30–19:00', sub: 'после знакомства с Тёмой', check: false }),
      ] }) }),
      ui.section({ title: 'Сегодня, свободно', tags: ['big'], className: 'is-filtered-out', children: ui.group({ cells: [
        ui.cell({ icon: 'clock', title: '10:45–12:00', sub: 'после летучки', check: false }),
        ui.cell({ icon: 'clock', title: '13:00–15:00', sub: 'после созвона с клиентом', check: false }),
      ] }) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'calendar-plus', title: 'Добавить в Календарь', sub: 'Вместе с остальными бронями', toggle: true }),
        ui.cell({ icon: 'users', title: 'Позвать', value: 'Паша, Артём', toast: 'Участники: Паша и Артём' }),
      ] }) }),
    ]),
  ],
});
