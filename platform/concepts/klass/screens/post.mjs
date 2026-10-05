import { THEME, who } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Публикация' }),
    ui.scroll([
      ui.post({ author: { initial: 'АВ', name: 'Анна Викторовна', meta: 'председатель · вчера, 19:40', action: { go: 'classroom' } }, text: 'Праздник урожая прошёл отлично. Выкладываю общий кадр — у кого есть хорошие снимки, присылайте, добавлю в альбом', likes: 31, comments: 12, views: 140, discuss: { go: 'thread' } }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Сохранить снимок', icon: 'download', variant: 'secondary', block: true, ask: 'photosadd|post|post' }), ui.button({ label: 'Открыть альбом', variant: 'tertiary', block: true, go: 'album' })]),
        ui.denied('photosadd'),
      ] }),
      ui.section({ title: 'Кто в кадре', meta: '19 из 24', children: ui.list([
        who(ui, 'ЕС', 'Елена Соколова', 'Участок 24 · второй ряд', { go: 'classroom' }),
        who(ui, 'ИМ', 'Илья Макаров', 'Участок 18 · крайний слева', { go: 'classroom' }),
        ui.row({ lead: ui.leadIcon('users'), title: 'Пятеро в последнем ряду', sub: 'Лиц не видно, никто не отметил', end: { value: 'Спросить', go: 'thread', label: 'Спросить в обсуждении' } }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Ответить', icon: 'message-circle', block: true, primary: true, go: 'thread' })]) }),
      ui.comments({ count: 12, items: [
        { initial: 'ЕС', name: 'Елена Соколова', text: 'У меня есть ещё девять кадров с ярмарки, скину вечером в альбом', time: 'вчера, 20:05', likes: 7 },
        { initial: 'НЧ', name: 'Наталья Чернова', text: 'Во втором ряду справа — это мой отец, участок 9, можно подписать?', time: 'вчера, 21:18', likes: 3 },
        { initial: 'АВ', name: 'Анна Викторовна', text: 'Подписала, спасибо. Остальных из последнего ряда спрошу на собрании', time: 'вчера, 21:40', likes: 5, reply: true, author: true },
        { initial: 'ИМ', name: 'Илья Макаров', text: 'Кто брал мой складной стол — он синий, с наклейкой «18»', time: 'сегодня, 8:56', likes: 1 },
      ] }),
    ]),
    ui.composer({ placeholder: 'Комментарий', attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>picker'] }, send: { toast: 'Комментарий отправлен' } }),
  ],
});
