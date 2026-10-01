import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'photos', theme: THEME,
  body: [
    ui.nav({ title: 'Недавние', back: 'close', trailing: ui.textButton({ label: 'Добавить', strong: true, go: 'update', primary: true }) }),
    ui.scroll(`<div class="uz-grid">${Array.from({ length: 12 }, (_, i) => `<button class="ph${i === 0 ? ' is-picked' : ''}" data-go="update" aria-label="Снимок ${i + 1}"></button>`).join('')}</div>`),
  ],
});
