import { THEME } from './_shared.mjs';
import { drill, parts, me } from '../model.mjs';

/* Разбор партии: «Вечерний звон», альты. Такты полосой и списком, кусок «тут сбиваемся» слушается по кругу
   с погашенным экраном, свою партию записывают поверх записи регента и отправляют в чат альтов */
const [a, b] = drill.spot;
const strip = Array.from({ length: drill.bars }, (_, i) => `<i${i + 1 >= a && i + 1 <= b ? ' class="is-spot"' : ''}></i>`).join('');
const play = (ui, label) => ui.iconButton({ icon: 'play', fill: true, label, toggle: 'play' });
export default (ui) => ui.screen({
  id: 'drill', theme: THEME,
  body: [
    ui.nav({ title: 'Разбор партии' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="sp-sum"><small>${drill.voice[0].toUpperCase() + drill.voice.slice(1)} · Осенний концерт</small><strong>${drill.piece}</strong><span>${drill.bars} тактов · запись Ирины, 2:48</span></div>`,
        `<div class="sp-strip" role="img" aria-label="Такты 1–${drill.bars}, отмечены ${a}–${b}: тут сбиваемся"><span class="sp-strip-mark">${ui.icon('flag')}тут сбиваемся · такты ${a}–${b}</span><span class="sp-strip-bars">${strip}</span><span class="sp-strip-nums"><span>1</span><span>${a}</span><span>${b}</span><span>${drill.bars}</span></span></div>`,
        ui.actions([ui.button({ label: 'Слушать кусок по кругу', icon: 'headphones', block: true, activate: 'audio|nowplaying', primary: true })]),
        ui.group({ cells: [
          ui.cell({ icon: 'repeat', title: 'Повторять кусок', sub: `Такты ${a}–${b}, ${drill.loopDur} — по кругу, пока не остановите`, toggle: true }),
        ] }),
      ] }),
      ui.section({ title: 'Такты', meta: `${drill.segments.length} кусков`, children: ui.list(drill.segments.map(([from, to, title, sub]) => ui.row({
        lead: ui.leadIcon('', { text: `${from}–${to}` }), title, sub, className: from === a ? 'sp-spot-row' : undefined,
        end: play(ui, `Слушать такты ${from}–${to}`),
      }))) }),
      ui.section({ title: 'Своя партия', children: ui.list([
        ui.row({ lead: ui.leadIcon('mic', { round: true, accent: true }), title: 'Записать свою партию', sub: `Такты ${a}–${b} под запись регента · уйдёт в чат альтов`, ask: 'mic|record|drill' }),
        ui.row({ lead: ui.avatar(me.initial), title: 'Моя запись · вчера в 22:14', sub: `2:51 · Ирина: «${drill.note}»`, end: play(ui, 'Слушать мою запись') }),
        ui.row({ lead: ui.leadIcon('download', { round: true }), title: 'Партии скачаны для офлайна ночью', sub: `${parts.count} записей, ${parts.size} · в зале слушаются без сети` }),
        ui.row({ lead: ui.leadIcon('message-circle', { round: true, accent: true }), title: 'Альты · партии', sub: 'Чат, где регент и альты присылают записи', go: 'altos' }),
      ]) }),
    ]),
    ui.denied('mic'),
  ],
});
