import { THEME } from './_shared.mjs';
import { episode } from '../model.mjs';

/* Свой разбор шкафа голосом: слушается в дороге с погашенным экраном, а вещи,
   названные в записи, по ходу отмечаются — оставить или на своп */
const named = [
  ['3:10', 'Бежевый тренч', 'оставить · носится с апреля', false],
  ['7:42', 'Юбка-плиссе', 'на своп · уже в «Моих вещах»', true],
  ['11:05', 'Льняная рубашка', 'на своп · уже в «Моих вещах»', true],
  ['12:04', 'Бордовый кардиган', 'решу после примерки', false],
];
export default (ui) => ui.screen({
  id: 'talk', theme: THEME,
  body: [
    ui.nav({ title: 'Разбор голосом' }),
    ui.scroll([
      ui.section({ children: `<div class="lk-player"><div class="lk-player-copy"><span class="ui-lead is-round is-accent">${ui.icon('audio-lines')}</span><h1>${episode.title}</h1><p class="ui-sub">${episode.author} · 27:19 · 14 вещей названо</p></div>${ui.progress({ fillClass: 'lk-w-44' })}${ui.times(episode.at, episode.left)}<div class="lk-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.button({ label: 'Слушать', icon: 'play', fillIcon: true, activate: 'audio|background', primary: true })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div></div>` }),
      ui.section({ title: 'Названо в записи', meta: '4 из 14 к 12:04', children: ui.list(named.map(([t, n, s, out]) => ui.row({ lead: `<span class="lk-ts">${t}</span>`, title: n, sub: s, end: out ? { badge: 'на своп' } : undefined, toast: `Перемотка на ${t}` }))) }),
      ui.section({ title: 'Мои записи', meta: '3', children: ui.list([
        ui.row({ lead: ui.leadIcon('mic', { round: true, accent: true }), title: 'Записать новый разбор', sub: 'Говорите, пока перебираете шкаф', shownAfter: 'mic', toast: 'Запись началась' }),
        ui.row({ lead: ui.leadIcon('mic'), title: 'Что отдать перед летом', sub: 'Вчера · 4:18 · 6 вещей на своп', toast: 'Запись в очереди' }),
        ui.row({ lead: ui.leadIcon('mic'), title: 'Брюки: что оставить', sub: '9 мая · 11:02 · не дослушана', toast: 'Запись в очереди' }),
        ui.row({ lead: ui.leadIcon('mic'), title: 'Перед переездом', sub: 'Март · 31:40 · дослушана', toast: 'Запись в очереди' }),
      ]) }),
    ]),
  ],
});
