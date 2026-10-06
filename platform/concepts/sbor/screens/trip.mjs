import { THEME } from './_shared.mjs';
import { trip, meet, people } from '../model.mjs';

/* Чат поездки: закреплённый сбор с перекличкой, сеть отеля из QR, голосовые, кружки и фото группы */
export default (ui) => ui.screen({
  id: 'trip', theme: THEME,
  body: [
    ui.chatNav({ initial: trip.initial, name: trip.name, status: `${trip.people} участников, ${trip.online} в сети`, open: { go: 'tripinfo' } }),
    `<button class="sb-pin" data-go="rollcall" aria-label="Перекличка: сбор в ${meet.time}">${ui.icon('pin')}<span><strong>Сбор в ${meet.time} ${meet.place}</strong><span>Перекличка · на месте ${meet.here} из ${trip.people}</span></span>${ui.icon('chevron-right')}</button>`,
    ui.scroll(ui.chat([
      ui.bubble({ from: people.igor.name, attach: `<button class="sb-net" data-go="wifi"><span class="sb-net-ico">${ui.icon('wifi')}</span><span><strong>${trip.ssid}</strong><span>Wi‑Fi отеля из QR · вчера</span></span></button>`, time: '22:14' }),
      `<p class="sb-sys">${meet.movedBy} перенесла сбор: ${meet.was} → ${meet.time}</p>`,
      ui.day('Сегодня'),
      ui.bubble({ from: people.igor.name, attach: '<span class="sb-photo ph"></span>', text: 'Завтрак до 9:45, кто ещё наверху — спускайтесь', time: '9:12' }),
      ui.bubble({ from: people.marat.name, text: 'Проспал, догоню у Кремля', time: '9:23' }),
      ui.bubble({ from: people.anya.name, text: 'Спускаюсь, 3 минуты', time: '9:39' }),
      `<div class="sb-shared perm-hidden" data-show-granted="shareext">${ui.bubble({ out: true, attach: `<span class="sb-place"><span class="sb-place-ico">${ui.icon('utensils')}</span><span><strong>Тюбетей</strong><span>Баумана, 64 · татарская кухня · до 23:00</span></span></span>`, text: 'На обед сюда?', time: '9:41' })}</div>`,
    ])),
    ui.denied('photos'),
    ui.denied('mic'),
    ui.composer({ attach: { label: 'Вложение', ask: 'photos|attach|trip' }, mic: { ask: 'mic|record|trip', label: 'Записать голосовое' } }),
  ],
});
