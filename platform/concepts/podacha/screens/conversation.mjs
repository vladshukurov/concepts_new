import { THEME } from './_shared.mjs';
import { cookalong, step } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'conversation', theme: THEME,
  body: [
    ui.chatNav({ initial: 'АР', name: cookalong.title, status: `${cookalong.host.first} ведёт · ${cookalong.cooks} участников`, call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ attach: `<button class="pd-chat-card" data-go="cookalong"><b>${step.label}</b><span><strong>${step.title}</strong><small>Таймер ${step.timer} · ${step.fire}</small></span></button>`, text: `Амина открыла шаг ${step.n} для всех`, time: '19:16' }),
      ui.bubble({ text: 'Если сковорода маленькая, обжаривайте в два захода', time: '19:16' }),
      ui.bubble({ out: true, text: 'Можно заменить фасоль нутом?', time: '19:17', read: true }),
      ui.voice({ dur: '0:12', time: '19:18' }),
    ])),
    ui.denied('voip'),
    ui.denied('mic'),
    ui.composer({ attach: { go: 'picker', label: 'Фото из медиатеки' }, mic: { ask: 'mic|voice|conversation' } }),
  ],
});
