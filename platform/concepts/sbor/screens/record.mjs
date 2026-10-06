import { THEME } from './_shared.mjs';
import { trip, meet, people } from '../model.mjs';

/* Запись голосового в чат поездки: идёт запись, волна, отмена свайпом влево */
const bars = [6, 10, 14, 9, 18, 22, 12, 8, 16, 20, 24, 14, 10, 6, 12, 18, 9, 5, 4, 4];
export default (ui) => ui.screen({
  id: 'record', theme: THEME,
  body: [
    ui.chatNav({ initial: trip.initial, name: trip.name, status: `${trip.people} участников, ${trip.online} в сети`, open: { go: 'tripinfo' } }),
    ui.scroll(ui.chat([
      ui.bubble({ from: people.igor.name, attach: `<span class="sb-net"><span class="sb-net-ico">${ui.icon('wifi')}</span><span><strong>${trip.ssid}</strong><span>Wi‑Fi отеля из QR · вчера</span></span></span>`, time: '22:14' }),
      `<p class="sb-sys">${meet.movedBy} перенесла сбор: ${meet.was} → ${meet.time}</p>`,
      ui.day('Сегодня'),
      ui.bubble({ from: people.igor.name, attach: '<span class="sb-photo ph"></span>', text: 'Завтрак до 9:45, кто ещё наверху — спускайтесь', time: '9:12' }),
      ui.bubble({ from: people.marat.name, text: 'Проспал, догоню у Кремля', time: '9:23' }),
      ui.bubble({ from: people.anya.name, text: 'Спускаюсь, 3 минуты', time: '9:39' }),
      ui.bubble({ out: true, text: `Кто у входа — встаём справа от дверей, сбор в ${meet.time}`, time: '9:40', read: true }),
    ])),
    `<div class="sb-rec" role="group" aria-label="Запись голосового"><span class="sb-rec-dot" aria-hidden="true"></span><strong class="sb-rec-time">0:07,4</strong><span class="sb-rec-wave" aria-hidden="true">${bars.map((h) => `<i class="h${h}"></i>`).join('')}</span><button class="sb-rec-cancel" data-back aria-label="Отменить запись">${ui.icon('chevron-left')}Отмена</button><button class="sb-rec-send" data-toast="Голосовое 0:07 отправлено|trip" aria-label="Отправить голосовое">${ui.icon('send')}</button></div>`,
  ],
});
