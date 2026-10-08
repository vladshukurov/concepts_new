import { watchScreen } from './_watch.mjs';
/* Лучший момент недели: отсюда «Картинка в картинке» уводит его в фон */
export default (ui) => watchScreen(ui, 'save', { pip: true });
