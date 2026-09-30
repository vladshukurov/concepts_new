import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'audio', theme: THEME, className: 'pd-dark',
  body: [
    ui.nav({ title: 'Рецепт вслух', back: 'down' }),
    `<div class="pd-big"><small>Шаг 3 из 6</small><h1>Добавьте томаты и фасоль</h1><p>Перемешайте один раз и оставьте на среднем огне</p><div class="pd-ticks"><i class="is-on"></i><i class="is-on"></i><i class="is-on"></i><i></i><i></i><i></i></div></div>`,
    ui.actions([ui.button({ label: 'Слушать с погашенным экраном', icon: 'headphones', block: true, activate: 'audio|audio', primary: true })]),
    ui.granted('audio', 'Шаги звучат и при погашенном экране'),
  ],
});
