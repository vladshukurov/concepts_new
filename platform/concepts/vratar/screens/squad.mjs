import { THEME } from './_shared.mjs';
import { people, nextMatch } from '../model.mjs';

/* Состав на следующий матч: кто придёт отмечается на месте, нового игрока — полем внизу */
const COMING = ['gosha', 'dima', 'ilya', 'me', 'seva', 'timur'];
export default (ui) => ui.screen({
  id: 'squad', theme: THEME, className: 'vr-marks',
  body: [
    ui.nav({ title: 'Состав' }),
    ui.scroll([
      ui.section({ children: ui.foot(`${nextMatch.title} · ${nextMatch.when}`, 'vr-watch-meta') }),
      ui.section({ title: 'Кто придёт', meta: `${COMING.length} из ${Object.keys(people).length + 1}`, children: [
        ui.checklist(Object.entries(people).map(([k, p]) => ({ title: p.name, sub: k === 'me' ? `${p.role} · это вы` : p.role, done: COMING.includes(k) })).concat([
          { title: 'Рома Гусев', sub: 'Новичок · играл один раз' },
        ])),
        `<div class="vr-add">${ui.icon('plus')}<input class="vr-input" placeholder="Имя игрока" aria-label="Имя игрока"/>${ui.textButton({ label: 'Добавить', toast: 'Игрок добавлен в состав' })}</div>`,
      ] }),
    ]),
  ],
});
