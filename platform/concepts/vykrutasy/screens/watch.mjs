import { watchScreen } from './_watch.mjs';
/* Главный хайлайт: отсюда «Картинка в картинке» уводит его в фон */
export default (ui) => watchScreen(ui, 'cat', { pip: true });
