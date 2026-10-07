import { THEME } from './_shared.mjs';
import { people, longrun } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ initial: 'СЛ', name: longrun.title, status: `${longrun.host.first} ведёт · ${longrun.confirmed} участников` }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ from: `${people.ilya.name}`, text: `На мосту лёд, побежим через велодорожку`, time: '6:58' }),
      ui.bubble({ attach: '<span class="ry-chat-map"></span>', from: `${people.ilya.name}`, text: `Точка старта — у главного входа`, time: '7:12' }),
      ui.bubble({ out: true, text: 'Буду в 7:25, держу 6:10', time: '7:14', read: true }),
      ui.voice({ from: people.dasha.name, dur: '0:12', time: '7:16' }),
    ])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>picker'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
