import { THEME, P } from './_shared.mjs';
import { episode, now, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'lk-lock',
  body: [
    `<div class="lk-lock-time">${now.time}<small>${now.date}</small></div>`,
    `<div class="lk-stack"><div class="lk-glass"><div class="lk-glass-top"><span class="ui-thumb ${P.marina}"></span><span class="ui-row-text"><strong>${episode.title}</strong><span>${episode.author} · Вешалка</span></span></div>${ui.progress({ fillClass: 'lk-w-44', white: true })}${ui.times(episode.at, episode.left)}<div class="lk-glass-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', toast: 'Пауза · 12:04' })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div></div><div class="lk-glass lk-notif"><span>${ui.icon('shirt')}</span><span class="lk-notif-body"><strong>Вешалка<span>9:38</span></strong>${people.lera.name} приняла жакет на своп</span></div>${ui.button({ label: 'Вернуться к разбору', variant: 'secondary', back: true, primary: true })}</div>`,
  ],
});
