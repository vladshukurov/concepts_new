import { THEME } from './_shared.mjs';
import { route, parts, people, dashaLate, now } from '../model.mjs';

/* Экран блокировки на пробежке: свои подсказки по таймеру отрезка и сообщение Даши с её инициалами */
const elapsed = '22:10';
const next = parts[2];
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'ry-dark ry-lock',
  body: [
    `<div class="ry-lock-time">7:52<small>${now.date}</small></div>`,
    `<div class="ry-notifs"><button class="ry-notif" data-activate="commnotif|direct" aria-label="Уведомление: ${people.dasha.name}"><span class="ry-notif-face is-initial ${ui.hue(people.dasha.initial)}">${people.dasha.initial}<i>${ui.icon('dumbbell')}</i></span><span class="ry-notif-body"><span class="ry-notif-top"><strong>${people.dasha.name}</strong><span>${dashaLate.time}</span></span><span class="ry-notif-text">${dashaLate.text}</span></span></button></div>`,
    `<div class="ry-glass"><span class="ui-row-text"><strong>${route.name} · ${route.km} км</strong><span>${elapsed} · через 9:50 «${next[1]}»</span></span>${ui.progress({ fillClass: 'ry-w-44', white: true })}<div class="ry-glass-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Повторить подсказку', toast: 'Подсказка повторена' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', go: 'player', primary: true })}${ui.iconButton({ icon: 'skip-forward', label: 'Следующий отрезок', toast: `Следующий отрезок · ${next[1]}` })}</div></div>`,
  ],
});
