import { THEME, map } from './_shared.mjs';
import { people, standup, demo } from '../model.mjs';

/* Личный чат с Артёмом, который у клиента: его геопозиция встречи, голосовое и звонок из шапки */
export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ initial: people.artem.initial, name: people.artem.name, status: 'в сети', call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ out: true, text: 'Акт № 14 Женя отправила, проследишь, чтобы подписали?', time: '17:48', read: true }),
      ui.voice({ dur: '0:41', time: '18:20' }),
      ui.day('Сегодня'),
      ui.bubble({ attach: map({ points: [['is-artem', people.artem.initial]], className: 'is-mini' }), text: 'Я у клиента · Чкаловский, 15', time: '9:10' }),
      ui.bubble({ text: `Тут до 13:00, на летучку в ${standup.time} не успею. Демо подтвердили ${demo.label}`, time: '9:47' }),
      ui.bubble({ out: true, text: 'Ок, твой пункт расскажу сама. Позвоню после летучки', time: '9:49', read: true }),
    ])),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл из Файлов>share'] } }),
  ],
});
