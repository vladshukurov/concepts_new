import { THEME, seats } from './_shared.mjs';
import { tonight } from '../model.mjs';

/* Виджет на экране «Домой»: ближайший стол и места — данные приложения через App Group */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'dices', kicker: 'В кругу · сегодня', title: `${tonight.game} · ${tonight.start}`, sub: `${tonight.where} · ${tonight.taken} из ${tonight.seats} мест`, go: 'table' },
    app: { name: 'В кругу', icon: 'dices', go: 'feed', primary: true },
  }),
});
