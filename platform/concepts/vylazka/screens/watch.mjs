import { watchScreen } from './_watch.mjs';
/* Фильм прошлой вылазки: главы по точкам маршрута, значок картинки в картинке уводит его в фон */
export default (ui) => watchScreen(ui, 'film', { pip: true, save: true, fill: 'vy-p20' });
