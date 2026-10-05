import { THEME, P } from './_shared.mjs';

const shots = Array.from({ length: 9 }, (_, i) => (i === 0 ? P.marina : 'ph'));
export default (ui) => ui.screen({
  id: 'media', theme: THEME,
  body: [
    ui.nav({ title: 'Недавние', back: 'close', trailing: ui.textButton({ label: 'Далее', strong: true, go: 'create' }) }),
    ui.scroll(`<div class="lk-grid">${shots.map((s, i) => `<button class="${s}${i === 0 ? ' is-picked' : ''}" data-go="create" aria-label="Снимок ${i + 1}"></button>`).join('')}</div>`),
  ],
});
