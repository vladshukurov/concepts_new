import { THEME } from './_shared.mjs';
import { longrun } from '../model.mjs';

/* Новая тренировка: название, старт, дистанция, темп и число мест */
const field = (label, value) => `<label class="ry-field"><span>${label}</span><input value="${value}" aria-label="${label}"/></label>`;
export default (ui) => ui.screen({
  id: 'newrun', theme: THEME,
  body: [
    ui.nav({ title: 'Новая тренировка', back: 'cancel' }),
    ui.scroll([
      ui.section({ children: [
        field('Название', 'Воскресная восстановительная'),
        field('Старт', `Воскресенье, 09:00 · ${longrun.from}`),
        field('Дистанция, км', '5'),
        field('Темп', '6:30–6:50'),
        field('Мест', '10'),
      ] }),
      ui.section({ children: ui.actions([ui.button({ label: 'Создать тренировку', block: true, toast: 'Тренировка создана, 10 мест|events', primary: true })]) }),
    ]),
  ],
});
