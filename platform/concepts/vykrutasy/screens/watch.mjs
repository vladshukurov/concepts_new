import { watchScreen } from './_watch.mjs';
/* Главный хайлайт: отсюда значок картинки в картинке в плеере уводит его в фон */
export default (ui) => watchScreen(ui, 'cat', { pip: true });
