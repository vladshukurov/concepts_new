import { THEME } from './_shared.mjs';
import { cookalong } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'conversation', theme: THEME,
  body: [
    ui.chatNav({ initial: 'АР', name: cookalong.title, status: `${cookalong.host.first} ведёт · ${cookalong.cooks} участников`, call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ attach: `<button class="pd-chat-card" data-go="cookalong"><b>02</b><span><strong>Обжарьте лук до прозрачности</strong><small>Осталось 4 минуты · средний огонь</small></span></button>`, text: 'Амина открыла шаг 2 для всех', time: '19:16' }),
      ui.bubble({ text: 'Если сковорода маленькая, обжаривайте в два захода', time: '19:16' }),
      ui.bubble({ out: true, text: 'Можно заменить фасоль нутом?', time: '19:17', read: true }),
      ui.voice({ dur: '0:12', time: '19:18' }),
    ])),
    ui.denied('voip'),
    ui.denied('mic'),
    ui.denied('photos'),
    ui.composer({ attach: { ask: 'photos|conversation|conversation' }, mic: { ask: 'mic|conversation|conversation' } }),
  ],
});
