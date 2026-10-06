import { THEME } from './_shared.mjs';
import { cookalong, step } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'kitchen', theme: THEME, className: 'pd-dark',
  body: [
    ui.nav({ title: 'Экран на кухне', trailing: ui.iconButton({ icon: 'headphones', label: 'Рецепт вслух', go: 'audio' }) }),
    `<div class="pd-big"><small>Ужин · шаг ${step.n} из ${cookalong.steps}</small><strong>${step.timer}</strong><p>${step.title} — следующий шаг появится сам</p><div class="pd-ticks"><i class="is-on"></i><i class="is-on"></i><i></i><i></i><i></i><i></i></div></div>`,
    ui.actions([ui.button({ label: 'Вывести на телевизор', icon: 'tv', block: true, go: 'cast', primary: true })]),
  ],
});
