import { THEME } from './_shared.mjs';
import { galleryAnswer } from '../model.mjs';

/* Выбор из «Фото»: старые ролики и фото, выбранный уходит в раунд 2 */
const ITEMS = [['0:18', true], ['0:42'], [''], ['1:05'], [''], ['0:09'], [''], ['2:14'], [''], ['0:33'], [''], ['']];
/* Кадры галереи: первый — выбранный «Выпускной 2014» (как в раунде), соседние не повторяются */
const ART = ['m4', 'm6', 'm5', 'm1', 'm3', 'm2', 'm5', 'm2', 'm4', 'm3', 'm1', 'm6'];
export default (ui) => ui.screen({
  id: 'picker', theme: THEME, className: 'vy-picker',
  body: [
    ui.nav({ title: 'Июнь 2014', back: 'cancel', trailing: ui.textButton({ label: 'Отправить', strong: true, back: true, primary: true }) }),
    ui.scroll([
      ui.foot(`Выбрано: ${galleryAnswer.title} · ${galleryAnswer.dur}`, 'vy-picker-meta'),
      `<div class="vy-picker-grid">${ITEMS.map(([d, on], i) => `<button class="${ART[i]}${on ? ' is-picked' : ''}" data-toast="${on ? 'Уже выбрано' : 'Выбрано вместо «Выпускной 2014»'}" aria-label="${d ? `Видео ${d}` : 'Фото'} ${i + 1}">${d ? ui.duration(d) : ''}${on ? '<i>1</i>' : ''}</button>`).join('')}</div>`,
    ]),
  ],
});
