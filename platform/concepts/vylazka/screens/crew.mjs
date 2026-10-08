import { THEME } from './_shared.mjs';
import { people, nextWalk } from '../model.mjs';

/* Кто идёт в субботу: отметка ставится на месте, нового друга — полем внизу */
const SUB = { me: 'это вы · снимаете привалы', lena: '9 вылазок с вами', kostya: '12 вылазок · знает все родники', sasha: 'думает, ответит в пятницу', artem: '3 вылазки с вами' };
const GOING = ['me', 'lena', 'kostya', 'artem'];
export default (ui) => ui.screen({
  id: 'crew', theme: THEME, className: 'vy-marks',
  body: [
    ui.nav({ title: 'Кто идёт' }),
    ui.scroll([
      ui.section({ children: ui.foot(`${nextWalk.route.name} · ${nextWalk.when}`, 'vy-watch-meta') }),
      ui.section({ title: 'В субботу', meta: `${GOING.length} из ${Object.keys(people).length + 1}`, children: [
        ui.checklist(Object.entries(people).map(([k, p]) => ({ title: p.name, sub: SUB[k], done: GOING.includes(k) })).concat([
          { title: 'Нина Сорокина', sub: 'Ни разу не ходила, позвала Лена' },
        ])),
        `<div class="vy-add">${ui.icon('plus')}<input class="vy-input" placeholder="Имя друга" aria-label="Имя друга"/>${ui.textButton({ label: 'Позвать', toast: 'Друг позван в субботу' })}</div>`,
      ] }),
    ]),
  ],
});
