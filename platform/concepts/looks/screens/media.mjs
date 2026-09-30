import { THEME, P } from './_shared.mjs';

const shots = [P.marina, P.lera, P.yulia, P.mark, P.marina, P.lera, P.yulia, P.mark, P.marina];
export default (ui) => ui.screen({
  id: 'media', theme: THEME,
  body: [
    ui.nav({ title: 'Недавние', back: 'close', trailing: ui.textButton({ label: 'Далее', strong: true, go: 'create' }) }),
    ui.scroll(`<div class="lk-grid">${shots.map((s, i) => `<button class="${s}${i === 0 ? ' is-picked' : ''}" data-go="create" aria-label="Снимок ${i + 1}"></button>`).join('')}</div>`),
  ],
});
