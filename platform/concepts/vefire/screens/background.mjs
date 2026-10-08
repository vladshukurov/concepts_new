import { THEME } from './_shared.mjs';
import { weekly } from '../model.mjs';

/* Выпуск недели в окне «Картинка в картинке» поверх экрана «Домой» */
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({ app: { name: 'В эфире', icon: 'tv', back: true }, pip: { art: weekly.art, title: weekly.title, open: { back: true } } }),
});
