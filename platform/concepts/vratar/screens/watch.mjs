import { watchScreen } from './_watch.mjs';
/* Лучший момент недели: отсюда значок картинки в картинке в плеере уводит его в фон */
export default (ui) => watchScreen(ui, 'save', { pip: true });
