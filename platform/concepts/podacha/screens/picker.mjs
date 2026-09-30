import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: [
    ui.nav({ title: 'Медиатека', back: 'close', trailing: ui.textButton({ label: 'Добавить 2 фото', strong: true, ask: 'photos|compose|compose', primary: true }) }),
    ui.scroll([
      `<div class="pd-grid">${Array.from({ length: 12 }, (_, i) => `<button class="ph${i < 2 ? ' is-picked' : ''}" data-toast="${i < 2 ? 'Снимок выбран' : 'Снимок добавлен'}" aria-label="Снимок ${i + 1}"></button>`).join('')}</div>`,
      ui.denied('photos', 'Медиатека закрыта — снимите новый кадр камерой'),
    ]),
  ],
});
