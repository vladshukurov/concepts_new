import { THEME } from './_shared.mjs';
import { fromPhotos } from '../model.mjs';

/* Выбор из «Фото»: ролики за сегодня, выбранный встаёт на точку 4 */
const ITEMS = [['0:18', true], ['0:07'], [''], ['1:05'], [''], ['0:09'], [''], ['0:42'], [''], ['0:33'], [''], ['']];
export default (ui) => ui.screen({
  id: 'picker', theme: THEME, className: 'vz-picker',
  body: [
    ui.nav({ title: 'Сегодня', back: 'cancel', trailing: ui.textButton({ label: 'Добавить', strong: true, back: true, primary: true }) }),
    ui.scroll([
      ui.foot(`Выбрано: ${fromPhotos.dur} · снято в 16:31`, 'vz-picker-meta'),
      `<div class="vz-picker-grid">${ITEMS.map(([d, on], i) => `<button class="ph on-dark${on ? ' is-picked' : ''}" data-toast="${on ? 'Уже выбрано' : 'Выбрано вместо ролика 0:18'}" aria-label="${d ? `Видео ${d}` : 'Фото'} ${i + 1}">${d ? ui.duration(d) : ''}${on ? '<i>1</i>' : ''}</button>`).join('')}</div>`,
    ]),
  ],
});
