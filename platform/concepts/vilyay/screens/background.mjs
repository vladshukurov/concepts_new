import { THEME } from './_shared.mjs';
import { best } from '../model.mjs';

/* Серия про робот-пылесос в окне «Картинка в картинке» поверх экрана «Домой» */
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({ app: { name: 'Виляй', icon: 'paw-print', back: true }, pip: { art: best.art, title: best.title, open: { back: true } } }),
});
