import { THEME, map } from './_shared.mjs';
import { people, meet } from '../model.mjs';

/* Личный чат с Маратом, который опаздывает к сбору: его геопозиция, голосовое и звонок из шапки */
export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ initial: people.marat.initial, name: people.marat.name, status: 'в сети', call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ out: true, text: 'Номер 410, ключ на ресепшене на твою фамилию', time: '16:02', read: true }),
      ui.voice({ dur: '0:38', time: '23:51' }),
      ui.bubble({ out: true, text: `Сбор в ${meet.time}, не в 9:30`, time: '23:54', read: true }),
      ui.day('Сегодня'),
      ui.bubble({ text: 'Ника, я проспал', time: '9:20' }),
      ui.bubble({ attach: map({ points: [['is-me', ''], ['is-marat', people.marat.initial]], className: 'is-mini' }), text: 'Геопозиция · 1,2 км от отеля', time: '9:21' }),
      ui.bubble({ text: 'Буду к 10:10, езжайте без меня, догоню у Кремля', time: '9:22' }),
      ui.bubble({ out: true, text: 'Ок, Рустам начнёт у Спасской башни в 10:30. Позвоню, как дойдём', time: '9:24', read: true }),
    ])),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});
