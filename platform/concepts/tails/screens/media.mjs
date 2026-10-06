import { THEME, PET } from './_shared.mjs';

const photos = [PET.truffle, PET.truffle, PET.barni, PET.truffle, PET.truffle, PET.truffle, PET.mint, PET.truffle, PET.truffle, PET.truffle, PET.barni, PET.truffle];
export default (ui) => ui.screen({
  id: 'media', theme: THEME, className: 'tl-picker',
  body: [
    ui.nav({ title: 'Недавние', back: 'cancel', trailing: ui.textButton({ label: 'Добавить', strong: true, go: 'home' }) }),
    ui.scroll(`<div class="tl-gallery">${photos.map((p, i) => `<button class="${p}" data-toast="Снимок ${i + 1} выбран" aria-label="Снимок ${i + 1}"></button>`).join('')}</div>`),
  ],
});
