import { THEME, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'clip', theme: THEME, className: 'lk-clip',
  body: [
    `<div class="lk-clip-frame ${P.yulia}"></div><div class="lk-clip-shade"></div>`,
    ui.nav({ title: 'Клипы', back: 'back' }),
    `<div class="lk-clip-body"><div class="lk-author"><i class="${P.yulia}"></i><strong>Юля Карпова</strong>${ui.button({ label: 'Подписаться', variant: 'secondary', toast: 'Вы подписались на автора' })}</div><p>Один яркий цвет, три спокойных сочетания · вещи отмечены в публикации</p></div>`,
    `<div class="lk-clip-side">${ui.iconButton({ icon: 'heart', label: 'Нравится', toast: 'Понравилось' })}<span>1,2К</span>${ui.iconButton({ icon: 'message-circle', label: 'Комментарии', go: 'chat' })}<span>64</span>${ui.iconButton({ icon: 'repeat-2', label: 'Своп', go: 'swap' })}</div>`,
    ui.denied('push'),
  ],
});
