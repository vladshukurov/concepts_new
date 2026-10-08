import { watchScreen } from './_watch.mjs';
/* Серия про робот-пылесос: отсюда «Картинка в картинке» уводит её в фон */
export default (ui) => watchScreen(ui, 'robot', { pip: true });
