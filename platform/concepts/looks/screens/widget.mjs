import { THEME } from './_shared.mjs';
import { own } from '../model.mjs';

/* Виджет читает план из общей группы (appgroups); тап открывает план в лукбуке без входа (keychain) */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'shirt', kicker: 'Вешалка · план на завтра', title: 'Тренч и кремовая водолазка', sub: `Завтра ${own.plan.weather} · ботинки на тракторе`, activate: 'keychain|home', primary: true },
    app: { name: 'Вешалка', icon: 'shirt', go: 'home' },
  }),
});
