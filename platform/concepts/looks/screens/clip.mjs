import { THEME, P } from './_shared.mjs';
import { own } from '../model.mjs';

/* Своя клип-примерка: два варианта одного пальто, чтобы решить, с поясом или без */

export default (ui) => ui.screen({
  id: 'clip', theme: THEME, className: 'lk-clip',
  body: [
    `<div class="lk-clip-frame ${P.marina}"></div><div class="lk-clip-shade"></div>`,
    ui.nav({ title: 'Примерка', back: 'back' }),
    `<div class="lk-clip-body"><div class="lk-author"><strong>${own.clip.title}</strong></div><p>${own.clip.when} · ${own.clip.dur} · субтитров пока нет</p></div>`,
    `<div class="lk-clip-side">${ui.iconButton({ icon: 'captions', label: 'Субтитры', go: 'subtitles' })}<span>Текст</span>${ui.iconButton({ icon: 'send', label: 'Отправить Лере', go: 'chat' })}<span>Лере</span>${ui.iconButton({ icon: 'repeat-2', label: 'На своп', go: 'swap' })}<span>Своп</span></div>`,
  ],
});
