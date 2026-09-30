import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: [
    ui.nav({ title: 'Выберите сканы', back: 'cancel', trailing: ui.textButton({ label: 'Готово', strong: true, go: 'compose' }) }),
    ui.foot('Выбрано 3', 'is-block'),
    ui.scroll(`<div class="kt-picks">${Array.from({ length: 18 }, (_, i) => `<button class="ph${i < 3 ? ' is-picked' : ''}" data-toast="Скан ${i + 1}" aria-label="Скан ${i + 1}${i < 3 ? ', выбран' : ''}"></button>`).join('')}</div>`),
  ],
});
