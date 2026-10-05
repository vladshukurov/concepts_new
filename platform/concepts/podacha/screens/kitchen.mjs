import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'kitchen', theme: THEME, className: 'pd-dark',
  body: [
    ui.nav({ title: 'Кухонный экран', trailing: ui.iconButton({ icon: 'headphones', label: 'Рецепт вслух', go: 'audio' }) }),
    `<div class="pd-big"><small>Ужин · шаг 3 из 6</small><strong>12:00</strong><p>Томите под крышкой — следующий шаг появится сам</p><div class="pd-ticks"><i class="is-on"></i><i class="is-on"></i><i class="is-on"></i><i></i><i></i><i></i></div></div>`,
    ui.denied('localnetwork'),
    ui.actions([ui.button({ label: 'Найти экран на кухне', icon: 'tv', block: true, ask: 'localnetwork|cast|kitchen', primary: true })]),
  ],
});
