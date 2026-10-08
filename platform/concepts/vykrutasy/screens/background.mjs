import { THEME } from './_shared.mjs';
/* Хайлайт в окне «Картинка в картинке» поверх экрана «Домой» */
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({ app: { name: 'Выкрутасы', icon: 'tv', back: true }, pip: { art: 'm2', open: { back: true } } }),
});
