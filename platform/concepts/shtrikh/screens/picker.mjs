import { THEME } from './_shared.mjs';

const arts = Array(9).fill('ph');
export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: [
    ui.nav({ title: 'Недавние', back: 'close', trailing: ui.textButton({ label: 'Добавить', strong: true, go: 'compose', primary: true }) }),
    ui.scroll(`<div class="sh-series">${arts.map((a, i) => `<button class="${a}" data-go="compose" aria-label="Работа ${i + 1}"></button>`).join('')}</div>`),
  ],
});
