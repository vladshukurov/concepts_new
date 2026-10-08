import { THEME } from './_shared.mjs';
import { contacts, tones } from '../model.mjs';

/* Постер звонка: снятый кадр во весь экран, имя крупно, звучит мелодия Андрея — так будет выглядеть входящий */
const c = contacts.andrey;
const t = tones[c.tone];
export default (ui) => ui.screen({
  id: 'poster', theme: THEME, className: 'md-poster',
  body: [
    `<div class="md-poster-bg md-ph md-andrey"></div><div class="md-poster-shade"></div>`,
    ui.nav({ title: 'Так будет выглядеть звонок', back: 'close', over: true }),
    `<div class="md-poster-name"><span>мобильный</span><strong>${c.name}</strong></div>`,
    `<div class="md-poster-tone">${ui.play({ size: 's', pause: true, label: `Пауза · ${t.title}` })}<span><b>${t.title}</b><small>${t.from}–${t.to} · затухание 2 с</small></span></div>`,
    `<div class="md-poster-foot" aria-hidden="true"><span class="md-call-btn is-end">${ui.icon('phone-off')}<small>Отклонить</small></span><span class="md-call-btn is-ok">${ui.icon('phone')}<small>Принять</small></span></div>`,
    `<div class="md-poster-done">${ui.button({ label: 'Сохранить постер', block: true, go: 'andrey', primary: true })}</div>`,
  ],
});
