import { THEME } from './_shared.mjs';
import { newPoint } from '../model.mjs';

/* Новая точка «здесь»: место по геопозиции на карте и задание, которое придумали вы */
export default (ui) => ui.screen({
  id: 'newpoint', theme: THEME, className: 'vz-wrap',
  body: [
    ui.nav({ title: 'Новая точка', back: 'cancel' }),
    ui.scroll([
      `<div class="vz-map ph on-dark"><span class="vz-pin">${ui.icon('map-pin')}</span></div>`,
      ui.section({ children: ui.group({ className: 'vz-form', cells: [
        ui.cell({ icon: 'navigation', title: newPoint.place, sub: 'Место · где вы стоите' }),
        ui.cell({ title: `<textarea class="vz-input" rows="2" aria-label="Задание">${newPoint.task}</textarea>`, sub: 'Задание' }),
        ui.cell({ icon: 'timer', title: 'До 30 секунд', sub: 'Длина ролика', toast: 'Ролик до 30 секунд' }),
      ] }) }),
      ui.section({ children: ui.foot('Задание видно командам, только когда они дойдут до точки') }),
      ui.actions(ui.button({ label: 'Добавить точку в квест', block: true, back: true, primary: true }), { className: 'vz-bottom' }),
    ]),
  ],
});
