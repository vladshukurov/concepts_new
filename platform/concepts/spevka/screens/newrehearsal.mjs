import { THEME } from './_shared.mjs';
import { choir, schedule } from '../model.mjs';

const near = schedule.filter((e) => e.iso >= '2026-10-13' && e.iso <= '2026-10-22');

/* Новая спевка: дата, время, зал и кого звать — событие сразу уходит в расписание и чат хора */
const field = (label, value, extra = '') => `<label class="sp-field"><span>${label}</span><input value="${value}" aria-label="${label}"${extra}/></label>`;
export default (ui) => ui.screen({
  id: 'newrehearsal', theme: THEME,
  body: [
    ui.nav({ title: 'Новая спевка', back: 'close', trailing: ui.textButton({ label: 'Создать', strong: true, toast: 'Спевка в пятницу, 16 октября, в 19:30 добавлена в расписание|schedule' }) }),
    ui.scroll([
      ui.section({ children: [
        field('Что', 'Спевка альтов и сопрано'),
        field('Дата', 'пятница, 16 октября'),
        field('Время', '19:30', ' inputmode="numeric"'),
        field('Где', `${choir.dk}, ${choir.hall}`),
      ] }),
      ui.section({ title: 'Кого звать', children: ui.segments([
        { label: 'Весь хор', filter: 'all' },
        { label: 'Сопрано и альты', on: true, filter: 'high' },
        { label: 'Мужские', filter: 'low' },
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'message-circle', title: 'Написать в чат хора', sub: 'Сообщение с датой и кнопкой «Приду»', toggle: true }),
        ui.cell({ icon: 'list-checks', title: 'Спросить, кто придёт', sub: 'Опрос до четверга, 21:00', toggle: true }),
      ] }) }),
      ui.section({ title: 'Рядом в расписании', meta: `${near.length} спевки`, children: ui.list(near.map((e) => ui.row({
        lead: ui.leadIcon('', { text: e.time }), title: e.label, sub: `${e.title} · ${e.sub}`,
      }))) }),
    ]),
  ],
});
