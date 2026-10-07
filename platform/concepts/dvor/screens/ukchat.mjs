import { THEME } from './_shared.mjs';
import { outage } from '../model.mjs';

/* Чат с управляющей компанией: объявления и ответы по заявкам приходят сюда, а не в ленту */
export default (ui) => ui.screen({
  id: 'ukchat', theme: THEME,
  body: [
    ui.chatNav({ initial: 'УК', name: 'Управляющая компания', status: 'диспетчер Елена · до 20:00' }),
    ui.scroll(ui.chat([
      ui.day('10 апреля'),
      ui.bubble({ from: 'Управляющая компания', text: `Горячей воды не будет ${outage.label} — опрессовка стояка. Перерасчёт придёт в майской квитанции`, time: '19:04' }),
      ui.day('Сегодня'),
      ui.bubble({ out: true, attach: '<span class="dv-chat-photo ph"></span>', text: 'Заявка 4417-Б: доводчик на второй двери, 3 подъезд, сорвало', time: '8:14', read: true }),
      ui.voice({ out: true, dur: '0:14', time: '8:14' }),
      ui.bubble({ from: 'Елена, диспетчер', text: 'Приняли. Мастер будет с 16:00 до 18:00, дверь откроет Марина из 63-й', time: '9:21' }),
    ])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>photopick'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
