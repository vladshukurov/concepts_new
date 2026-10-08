import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

/* Семья: кто смотрит канал Рыжика и кого звать на вечерний показ */
const EVENING = ['me', 'mama', 'papa', 'tema'];
const SUB = { me: 'снимает чаще всех · это вы', mama: '😂 чаще всех · 64 реакции', papa: 'снимает прогулки', tema: 'снимает дачу', galya: 'смотрит с дачи, ❤️ на каждом ролике' };
export default (ui) => ui.screen({
  id: 'family', theme: THEME, className: 'vl-marks',
  body: [
    ui.nav({ title: 'Семья' }),
    ui.scroll([
      ui.section({ title: 'Вечерний показ', meta: `${EVENING.length} из ${Object.keys(people).length}`, children: [
        ui.checklist(Object.entries(people).map(([k, p]) => ({ title: p.name, sub: SUB[k], done: EVENING.includes(k) }))),
        `<div class="vl-add">${ui.icon('plus')}<input class="vl-input" placeholder="Номер телефона" aria-label="Номер телефона"/>${ui.textButton({ label: 'Позвать', toast: 'Приглашение отправлено' })}</div>`,
      ] }),
    ]),
  ],
});
