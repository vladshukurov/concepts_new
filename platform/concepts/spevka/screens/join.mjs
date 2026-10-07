import { THEME } from './_shared.mjs';
import { choir, me, regent, people, schedule, concert } from '../model.mjs';

/* Ссылка-приглашение открылась в приложении: хор до вступления — кто, когда спевки, что поём */
const next = schedule.filter((e) => ['2026-10-10', '2026-10-13', '2026-10-15'].includes(e.iso));
export default (ui) => ui.screen({
  id: 'join', theme: THEME,
  body: [
    ui.nav({ title: 'Приглашение', back: 'close' }),
    ui.scroll([
      `<div class="sp-head">${ui.avatar(choir.initial, { large: true })}<h1 class="ui-title">${choir.name}</h1><p class="ui-sub">любительский хор · ${choir.people} голоса · пригласила ${me.name}</p></div>`,
      ui.section({ children: [
        ui.usersStack({ faces: [regent.initial, me.initial, people.denis.initial], text: 'Ирина, Оля, Денис и ещё 30 в хоре' }),
        ui.actions([
          ui.button({ label: 'Вступить в хор', block: true, go: 'choir', primary: true }),
          ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true, back: true }),
        ]),
      ] }),
      ui.section({ title: 'Ближайшие спевки', children: ui.list(next.map((e) => ui.row({ lead: ui.leadIcon('', { text: e.time }), title: e.title, sub: `${e.label} · ${e.sub}` }))) }),
      ui.section({ children: ui.miniInfo([
        { icon: 'map-pin', text: `${choir.dk}, ${choir.addr}, ${choir.hall}` },
        { icon: 'clock', text: `Спевки — ${choir.days}` },
        { icon: 'audio-lines', text: `${concert.title} ${concert.short} · ${concert.pieces.length} произведений` },
      ]) }),
    ]),
  ],
});
