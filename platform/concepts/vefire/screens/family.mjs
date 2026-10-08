import { THEME } from './_shared.mjs';
import { people, fri } from '../model.mjs';

/* Семья: кто придёт на пятничную премьеру и кого позвать в шоу */
const FRIDAY = ['me', 'papa', 'sonya', 'misha'];
const SUB = { me: 'продюсер выпусков · это вы', papa: 'оператор по выходным', sonya: 'ведёт «Погоду» и «Мусины новости»', misha: 'ведёт «Новости двора»', nina: 'смотрит из Твери, ❤️ под каждым выпуском' };
export default (ui) => ui.screen({
  id: 'family', theme: THEME, className: 'vf-marks',
  body: [
    ui.nav({ title: 'Семья' }),
    ui.scroll([
      ui.section({ title: `Премьера ${fri.short}`, meta: `${FRIDAY.length} из ${Object.keys(people).length}`, children: [
        ui.checklist(Object.entries(people).map(([k, p]) => ({ title: p.name, sub: SUB[k], done: FRIDAY.includes(k) }))),
        `<div class="vf-add">${ui.icon('plus')}<input class="vf-input" placeholder="Номер телефона" aria-label="Номер телефона"/>${ui.textButton({ label: 'Позвать', toast: 'Приглашение отправлено' })}</div>`,
      ] }),
    ]),
  ],
});
