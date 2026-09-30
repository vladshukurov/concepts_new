import { THEME, who } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Публикация' }),
    ui.scroll([
      ui.post({ author: { initial: 'АВ', name: 'Анна Викторовна', meta: 'председатель · вчера, 19:40', action: { go: 'classroom' } }, text: 'Праздник урожая прошёл отлично. Выкладываю общий кадр — у кого есть хорошие снимки, присылайте, добавлю в альбом', media: 'ph', likes: 31, comments: 12, views: 140, discuss: { go: 'thread' } }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Сохранить снимок', icon: 'download', variant: 'secondary', block: true, ask: 'photosadd|post|post' }), ui.button({ label: 'Открыть альбом', variant: 'tertiary', block: true, go: 'album' })]),
        ui.denied('photosadd', 'Снимок остаётся в приложении — открыть его можно здесь'),
      ] }),
      ui.section({ title: 'Кто в кадре', meta: '19 из 24', children: ui.list([
        who(ui, 'ЕС', 'Елена Соколова', 'Участок 24 · второй ряд', { go: 'classroom' }),
        who(ui, 'ИМ', 'Илья Макаров', 'Участок 18 · крайний слева', { go: 'classroom' }),
        ui.row({ lead: ui.leadIcon('users'), title: 'Пятеро в последнем ряду', sub: 'Лиц не видно, никто не отметил', end: { value: 'Спросить', go: 'thread', label: 'Спросить в обсуждении' } }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Ответить', icon: 'message-circle', block: true, primary: true, go: 'thread' })]) }),
    ]),
  ],
});
