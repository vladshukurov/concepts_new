import { THEME } from './_shared.mjs';
import { today } from '../model.mjs';

/* Виджет на экране «Домой»: что полить сегодня — данные приложения через App Group */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'droplets', kicker: 'Вазон · четверг', title: `Полить сегодня: ${today.length}`, sub: today.map((p) => p.name).join(', '), go: 'water' },
    app: { name: 'Вазон', icon: 'trees', go: 'feed', primary: true },
  }),
});
