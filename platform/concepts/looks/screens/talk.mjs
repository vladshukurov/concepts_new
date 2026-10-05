import { THEME, P } from './_shared.mjs';
import { episode } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'talk', theme: THEME,
  body: [
    ui.nav({ title: 'Разбор голосом', trailing: ui.iconButton({ icon: 'mic', label: 'Записать разбор', sr: 'Записать разбор', ask: 'mic|talk|talk' }) }),
    ui.scroll([
      ui.section({ children: `<div class="lk-player"><div class="lk-player-cover ${P.marina}"></div><div class="lk-player-copy"><h1>${episode.title}</h1><p class="ui-sub">${episode.author} · 27:19 · 14 вещей названо</p></div>${ui.progress({ fillClass: 'lk-w-44' })}${ui.times(episode.at, episode.left)}<div class="lk-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.button({ label: 'Слушать', icon: 'play', fillIcon: true, activate: 'audio|background', primary: true })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div></div>` }),
      ui.denied('mic'),
      ui.section({ title: 'Мои записи', meta: '3', children: ui.list([
        ui.row({ lead: ui.leadIcon('mic', { round: true, accent: true }), title: 'Новая запись · идёт 0:07', sub: 'Говорите, пока перебираете шкаф', shownAfter: 'mic' }),
        ui.row({ lead: ui.leadIcon('mic'), title: 'Что отдать перед летом', sub: 'Вчера · 4:18 · 6 вещей на своп', toast: 'Запись в очереди' }),
        ui.row({ lead: ui.leadIcon('mic'), title: 'Брюки: что оставить', sub: '9 мая · 11:02 · не дослушана', toast: 'Запись в очереди' }),
        ui.row({ lead: ui.leadIcon('mic'), title: 'Перед переездом', sub: 'Март · 31:40 · дослушана', toast: 'Запись в очереди' }),
      ]) }),
    ]),
  ],
});
