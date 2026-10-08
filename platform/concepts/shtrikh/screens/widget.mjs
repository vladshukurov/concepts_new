import { THEME } from './_shared.mjs';
import { places, own } from '../model.mjs';

/* Виджет на экране «Домой»: своя серия и что ей не хватает — данные приложения через App Group */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'pen-line', kicker: 'Вглядись · серия', title: `${places.panfilova.name} · ${own.series.done} из ${own.series.of}`, sub: own.series.next, go: 'series' },
    app: { name: 'Вглядись', icon: 'pen-line', go: 'home', primary: true },
  }),
});
