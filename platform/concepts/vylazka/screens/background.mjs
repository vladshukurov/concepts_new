import { THEME } from './_shared.mjs';
import { films } from '../model.mjs';

/* Фильм похода в окне «Картинка в картинке» поверх экрана «Домой» */
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({ app: { name: 'Вылазка', icon: 'footprints', back: true }, pip: { art: films.film.art, open: { back: true } } }),
});
