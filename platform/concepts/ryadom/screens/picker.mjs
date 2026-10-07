import { THEME } from './_shared.mjs';
import { own } from '../model.mjs';

/* PHPicker: сверху кадры вчерашней пробежки, два уже отмечены */
const grid = (n, picked = 0) => `<div class="ry-grid">${Array.from({ length: n }, (_, i) => `<span class="ph${i < picked ? ' is-picked' : ''}"></span>`).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: [
    ui.nav({ title: 'Медиатека', back: 'close', trailing: ui.textButton({ label: 'Добавить 2', strong: true, back: true, primary: true }) }),
    ui.scroll([
      ui.section({ title: `Вчера · ${own.run.span}`, meta: '6', children: grid(6, 2) }),
      ui.section({ title: 'Раньше', children: grid(9) }),
    ]),
  ],
});
