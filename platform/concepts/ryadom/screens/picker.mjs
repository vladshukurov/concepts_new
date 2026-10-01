import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: [
    ui.nav({ title: 'Недавние', back: 'close', trailing: ui.textButton({ label: 'Добавить 2', strong: true, go: 'compose', primary: true }) }),
    ui.scroll(`<div class="ry-grid">${Array.from({ length: 15 }, (_, i) => `<button class="ph${i < 2 ? ' is-picked' : ''}" data-go="compose" aria-label="Снимок ${i + 1}"></button>`).join('')}</div>`),
  ],
});
