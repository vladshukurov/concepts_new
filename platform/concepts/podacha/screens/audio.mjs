import { THEME } from './_shared.mjs';
import { cookalong, step } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'audio', theme: THEME, className: 'pd-dark',
  body: [
    ui.nav({ title: 'Рецепт вслух', back: 'down' }),
    `<div class="pd-big"><small>Шаг ${step.n} из ${cookalong.steps} · осталось ${step.timer}</small><h1>${step.title}</h1><p>Помешивайте, огонь средний — дальше томаты и фасоль</p><div class="pd-ticks"><i class="is-on"></i><i class="is-on"></i><i></i><i></i><i></i><i></i></div></div>`,
    ui.actions([ui.button({ label: 'Слушать с погашенным экраном', icon: 'headphones', block: true, activate: 'audio|lockscreen', primary: true })]),
  ],
});
