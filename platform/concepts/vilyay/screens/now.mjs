import { THEME, clipRow } from './_shared.mjs';
import { seasonHead } from './_season.mjs';
import { seasons, sMeta, nClips, clips, cMeta, reactLine, shot, newSeries, series } from '../model.mjs';

/* Сезон «Сейчас»: «Снять Рыжика» — ролик сразу встаёт первым в сезон */
const s = seasons.now;
export default (ui) => ui.screen({
  id: 'now', theme: THEME, className: 'vl-wrap',
  body: [
    ui.nav({ title: 'Сейчас' }),
    ui.scroll([
      ...seasonHead(ui, s, `${sMeta(s)} · ${s.total}`),
      ui.section({ children: ui.actions(ui.button({ label: 'Снять Рыжика', icon: 'video', block: true, ask: 'camera+mic|camera|now', primary: true }), { className: 'vl-actions' }) }),
      ui.denied('camera,mic'),
      ui.section({ title: 'Ролики сезона', meta: nClips(s.clips), children: ui.list([
        ui.row({ shownAfter: 'camera', thumb: shot.art, wide: true, duration: shot.dur, title: shot.title, sub: `${shot.meta}`, go: 'moment' }),
        clipRow(ui, clips.robot, `${cMeta(clips.robot)} · ${reactLine(clips.robot)}`),
        clipRow(ui, clips.dacha, `${cMeta(clips.dacha)} · ${reactLine(clips.dacha)}`),
        ui.row({ thumb: 'd1', wide: true, duration: '0:19', title: 'Рыжик несёт палку через весь парк', sub: 'клип · снял папа · 2 октября', go: 'clips' }),
      ]) }),
      ui.section({ title: 'Сериалы сезона', children: [ui.list([
        ui.row({ lead: ui.leadIcon('clapperboard', { round: true }), title: newSeries.title, sub: 'Новая серия · пока без роликов' }),
      ]), ui.list([
        ui.row({ thumb: series.art, wide: true, duration: series.total, title: series.title, sub: `${series.count} серии · последняя в этом сезоне`, go: 'series' }),
      ])] }),
    ]),
  ],
});
