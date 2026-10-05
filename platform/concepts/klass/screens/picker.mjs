import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: [
    ui.nav({ title: 'Недавние', back: 'cancel', trailing: ui.textButton({ label: 'Добавить · 2', strong: true, go: 'compose', primary: true }) }),
    ui.denied('photos'),
    ui.scroll(`<div class="kl-grid">${Array.from({ length: 18 }, (_, i) => `<button class="ph${i === 0 || i === 4 ? ' is-picked' : ''}" data-go="compose" aria-label="Снимок ${i + 1}${i === 0 || i === 4 ? ', выбран' : ''}"></button>`).join('')}</div>`),
  ],
});
