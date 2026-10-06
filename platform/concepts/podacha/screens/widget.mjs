import { THEME } from './_shared.mjs';
import { cookalong, step } from '../model.mjs';

/* Виджет на экране «Домой»: следующий шаг и таймер готовки — данные приложения через App Group */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'chef-hat', kicker: 'Вкусно · сейчас', title: `Шаг ${step.n} из ${cookalong.steps} · ${step.short}`, sub: `Таймер ${step.timer} · ужин с Аминой`, activate: 'keychain|cookalong' },
    app: { name: 'Вкусно', icon: 'chef-hat', activate: 'keychain|feed', primary: true },
  }),
});
