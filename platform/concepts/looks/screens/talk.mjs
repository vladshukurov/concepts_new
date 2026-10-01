import { THEME, P } from './_shared.mjs';
import { episode } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'talk', theme: THEME,
  body: [
    ui.nav({ title: 'Разбор гардероба', trailing: ui.iconButton({ icon: 'mic', label: 'Задать вопрос голосом', sr: 'Начать разбор', ask: 'mic|talk|talk' }) }),
    ui.scroll([
      ui.section({ children: `<div class="lk-player"><div class="lk-player-cover ${P.yulia}"></div><div class="lk-player-copy"><h1>${episode.title}</h1><p class="ui-sub">${episode.author} · выпуск ${episode.issue}</p></div>${ui.progress({ fillClass: 'lk-w-44' })}${ui.times(episode.at, episode.left)}<div class="lk-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.button({ label: 'Слушать', icon: 'play', fillIcon: true, activate: 'audio|background', primary: true })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div></div>` }),
      ui.granted('mic', 'Идёт запись вопроса · 0:04'),
      ui.denied('mic', 'Микрофон выключен — оставьте вопрос текстом в комментариях'),
      ui.section({ title: 'Другие разборы', children: ui.list([
        ui.row({ lead: ui.leadIcon('headphones'), title: 'Что оставить после лета', sub: '18:42 · скачан', toast: 'Выпуск в очереди' }),
        ui.row({ lead: ui.leadIcon('headphones'), title: 'Три пары брюк на осень', sub: '34:06 · загрузка 62 %', toast: 'Выпуск в очереди' }),
        ui.row({ lead: ui.leadIcon('headphones'), title: 'Чужой шкаф: Юля Карпова', sub: '41:18 · вышел сегодня', toast: 'Выпуск в очереди' }),
      ]) }),
    ]),
  ],
});
