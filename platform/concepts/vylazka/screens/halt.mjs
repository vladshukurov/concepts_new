import { THEME, haltRow } from './_shared.mjs';
import { hike, hikeClips, myHalt, people } from '../model.mjs';

/* Снятый привал уже в походе: отметить, что в кадре */
export default (ui) => ui.screen({
  id: 'halt', theme: THEME, className: 'vy-wrap vy-marks',
  body: [
    ui.nav({ title: 'Привал', trailing: ui.iconButton({ icon: 'footprints', label: 'Поход', go: 'hike' }) }),
    ui.scroll([
      ui.section({ children: ui.videoCard({ art: myHalt.art, duration: myHalt.dur, avatar: ui.avatar(people.me.initial), title: myHalt.title, sub: myHalt.meta }) }),
      ui.section({ title: 'Что в кадре', children: ui.checklist([
        { title: 'Вид с мостков на озеро', sub: 'Ляжет в главу «мостки»', done: true },
        { title: 'Чай из термоса', sub: 'Лена разливает, в кадре руки', done: true },
        { title: 'В фильм похода', sub: 'Склеится вечером по точкам маршрута' },
      ]) }),
      ui.section({ title: 'Ролики похода', meta: `${hikeClips.length + 1} ролика`, children: ui.list([
        ui.row({ thumb: myHalt.art, wide: true, duration: myHalt.dur, title: myHalt.title, sub: `${myHalt.time} · ${hike.at} · снял Дима` }),
        ...[...hikeClips].reverse().map(haltRow),
      ]) }),
      ui.actions(ui.button({ label: 'Готово', block: true, go: 'hike', primary: true }), { className: 'vy-bottom' }),
    ]),
  ],
});
