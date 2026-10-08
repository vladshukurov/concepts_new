import { THEME } from './_shared.mjs';
import { series, dog, tv, clips, reactLine } from '../model.mjs';

/* Сериал «Рыжик против пылесоса»: серии через сезоны, вечером — всей семьёй на телевизоре */
export default (ui) => ui.screen({
  id: 'series', theme: THEME, className: 'vl-wrap',
  body: [
    ui.nav({ title: 'Сериал' }),
    ui.scroll([
      `<div class="vl-banner ${series.art}"></div>`,
      ui.section({ children: [
        `<div class="vl-channel">${ui.avatar(dog.initial, { large: true })}<span class="ui-row-text"><strong>${series.title}</strong><span>${series.count} серии · ${series.total} · от щенка до сейчас</span></span></div>`,
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: 'Смотреть на телевизоре', sub: 'Всей семьёй вечером, в той же Wi‑Fi', ask: 'localnetwork|series|series' }),
        ui.row({ shownAfter: 'localnetwork', lead: ui.leadIcon('cast', { round: true, accent: true }), title: tv.name, sub: `${tv.model} · идут ${series.count} серии подряд`, end: { badge: 'ТВ' } }),
      ]) }),
      ui.denied('localnetwork'),
      ui.section({ title: 'Серии', children: ui.list(series.eps.map((e) => ui.row({
        thumb: e.art, wide: true, duration: e.dur, title: `Серия ${e.n}. ${e.title}`,
        sub: e.go ? `Сезон «${e.season.title}» · ${reactLine(clips.robot)}` : `Сезон «${e.season.title}»`, ...(e.go ? { go: e.go } : {}),
      }))) }),
    ]),
  ],
});
