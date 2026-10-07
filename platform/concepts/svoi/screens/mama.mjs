import { THEME } from './_shared.mjs';
import { people, voices } from '../model.mjs';

/* Личный чат с мамой Алины: длинные голосовые подряд с погашенным экраном и звонок из шапки */
const [v1, v2, v3, v4] = voices.list;
export default (ui) => ui.screen({
  id: 'mama', theme: THEME,
  body: [
    ui.chatNav({ initial: people.roza.initial, name: people.roza.short, status: 'в сети', call: { activate: 'voip|call' } }),
    `<button class="sv-pin" data-activate="audio|lockscreen" aria-label="Слушать голосовые мамы подряд">${ui.icon('headphones')}<span><strong>Слушать подряд</strong><span>${voices.count} голосовых · ${voices.total} · можно погасить экран</span></span>${ui.icon('play')}</button>`,
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.voice({ dur: v1[0], time: v1[1] }),
      ui.voice({ dur: v2[0], time: v2[1] }),
      ui.bubble({ out: true, text: 'Мам, послушаю завтра по дороге за Милой', time: '22:10', read: true }),
      ui.day('Сегодня'),
      ui.voice({ dur: v3[0], time: v3[1] }),
      ui.voice({ dur: v4[0], time: v4[1] }),
      ui.bubble({ text: 'Позвони, как Милу заберёшь. Пирожки на субботу ставлю', time: '15:21' }),
    ])),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});
