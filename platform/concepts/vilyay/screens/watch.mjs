import { watchScreen } from './_watch.mjs';
/* Серия про робот-пылесос: отсюда значок картинки в картинке в плеере уводит её в фон */
export default (ui) => watchScreen(ui, 'robot', { pip: true });
