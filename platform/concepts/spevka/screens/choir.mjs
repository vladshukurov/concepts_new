import { THEME, came } from './_shared.mjs';
import { choir, today, regent, people, svodnaya } from '../model.mjs';

/* Чат хора: закреплённая спевка с отметками, Wi‑Fi зала карточкой, сводная из сообщения регента — в Календарь */
export default (ui) => ui.screen({
  id: 'choir', theme: THEME,
  body: [
    ui.chatNav({ initial: choir.initial, name: choir.name, status: `${choir.people} участника, ${choir.online} в сети`, open: { go: 'choirinfo' } }),
    `<button class="sp-pin" data-go="rollcall" aria-label="Кто пришёл: спевка в ${today.time}">${ui.icon('pin')}<span><strong>Спевка сегодня в ${today.time} · ${choir.hall}</strong><span>Кто пришёл · пришли ${came(today.came, today.cameMe)} из ${choir.people}</span></span>${ui.icon('chevron-right')}</button>`,
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ from: people.denis.name, attach: `<button class="sp-net" data-go="wifi"><span class="sp-net-ico">${ui.icon('wifi')}</span><span><strong>${choir.ssid}</strong><span>Wi‑Fi репетиционного зала · ${choir.dk}</span></span></button>`, text: 'Сеть зала, чтобы не спрашивать на вахте', time: '20:14' }),
      '<p class="sp-sys">Ирина обновила программу концерта</p>',
      ui.day('Сегодня'),
      `<div class="ui-bubble is-in"><span class="ui-bubble-from">${regent.name}</span><span class="ui-bubble-text">Сводная репетиция <button class="sp-date tap" data-ask="calendarwrite|choir|choir" aria-label="В Календарь: сводная ${svodnaya.label}">${svodnaya.label}</button>, ${svodnaya.where}. Будет оркестр, приходите все</span><span class="ui-bubble-meta">18:40</span></div>`,
      `<p class="sp-sys perm-hidden" data-show-granted="calendarwrite">В Календаре · ${svodnaya.full} · ${svodnaya.where}</p>`,
      ui.bubble({ from: people.lena.name, attach: '<span class="sp-photo ph"></span>', text: 'Кто забыл ноты «Колокольчика» — вот третья страница', time: '18:52' }),
      ui.bubble({ from: people.oleg.name, text: 'Опаздываю на 10 минут, басы, начинайте без меня', time: '19:02' }),
      ui.bubble({ out: true, text: 'Я уже в зале, сижу во втором ряду у альтов', time: '19:06', read: true }),
    ])),
    ui.denied('photos'),
    ui.composer({ attach: { label: 'Вложение', ask: 'photos|attach|choir' } }),
  ],
});
