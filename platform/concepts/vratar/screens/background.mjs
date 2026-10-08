import { THEME } from './_shared.mjs';
import { best } from '../model.mjs';

/* Лучший момент недели в окне «Картинка в картинке» поверх экрана «Домой» */
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({ app: { name: 'Вратарь', icon: 'trophy', back: true }, pip: { art: best.art, open: { back: true } } }),
});
