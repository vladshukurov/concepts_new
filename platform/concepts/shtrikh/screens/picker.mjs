import { THEME } from './_shared.mjs';

const arts = ['sh-s1', 'sh-s2', 'sh-s3', 'sh-s4', 'sh-s5', 'sh-s6', 'sh-s2', 'sh-s1', 'sh-s3'];
export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: [
    ui.nav({ title: 'Недавние', back: 'close', trailing: ui.textButton({ label: 'Добавить', strong: true, go: 'compose', primary: true }) }),
    ui.scroll(`<div class="sh-series">${arts.map((a, i) => `<button class="${a}" data-go="compose" aria-label="Работа ${i + 1}"></button>`).join('')}</div>`),
  ],
});
