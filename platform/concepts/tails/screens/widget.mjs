import { THEME } from './_shared.mjs';

/* Виджет на экране «Домой»: ближайшая прогулка Трюфеля — данные приложения через App Group */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'paw-print', kicker: 'Выгул · Трюфель', title: 'Спокойный круг у пруда', sub: 'Сегодня, 18:40 · с Барни и Мятой', activate: 'keychain|walk' },
    app: { name: 'Выгул', icon: 'paw-print', activate: 'keychain|home', primary: true },
  }),
});
