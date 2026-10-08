import { THEME, feedRow } from './_shared.mjs';
import { liveMatch, liveMoments, myMoment, team } from '../model.mjs';

/* Идущий матч: табло, «Снять момент» со скамейки и лента моментов матча */
const score = (ui) => `<div class="vr-score"><div class="vr-score-row"><span class="vr-score-team">${ui.avatar(team.initial)}${team.name}</span><strong>${liveMatch.score}</strong><span class="vr-score-team">${ui.avatar('СВ')}${liveMatch.rival}</span></div><small><span class="vr-live">идёт</span>${liveMatch.minute}-я минута · ${liveMatch.field}</small></div>`;

export default (ui) => ui.screen({
  id: 'live', theme: THEME, className: 'vr-wrap',
  body: [
    ui.nav({ title: 'Матч', trailing: ui.iconButton({ icon: 'users', label: 'Состав', go: 'squad' }) }),
    ui.scroll([
      ui.section({ children: [
        score(ui),
        ui.actions(ui.button({ label: 'Снять момент', icon: 'video', block: true, ask: 'camera+mic|camera|live', primary: true }), { className: 'vr-actions' }),
      ] }),
      ui.denied('camera,mic'),
      ui.section({ children: ui.usersStack({ faces: liveMatch.filming, text: 'Сева и Тимур снимают со скамейки' }) }),
      ui.section({ title: 'Моменты матча', meta: `${liveMoments.length} момента`, children: ui.list([
        ui.row({ shownAfter: 'camera', thumb: myMoment.art, wide: true, duration: myMoment.dur, title: myMoment.title, sub: `${liveMatch.minute}' · снял Миша · только что` }),
        ...[...liveMoments].reverse().map((m) => feedRow(ui, m)),
      ]) }),
    ]),
  ],
});
