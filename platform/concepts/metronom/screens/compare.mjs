import { THEME, ico } from './_shared.mjs';
import { sessions, pieces, beats } from '../model.mjs';

/* Вчера и сегодня: две записи одной пьесы подряд — слышно, что стало ровнее и быстрее */
const { yesterday: y, today: t } = sessions;
const R = pieces.romance;
const rec = (ui, s, label) => ui.row({ lead: ico('mic'), title: `${label} · ${beats(s.bpm)}`, sub: `${s.rec} · ${s.dur}`, end: ui.play({ size: 's', label: `Слушать: ${label.toLowerCase()}` }) });
export default (ui) => ui.screen({
  id: 'compare', theme: THEME,
  body: [
    ui.nav({ title: 'Вчера и сегодня' }),
    ui.scroll([
      `<div class="mt-album is-small"><div class="mt-album-art ${R.art}"></div><h1 class="ui-title">${R.title}</h1><p class="ui-sub">${y.bpm} → ${beats(t.bpm)} за один день</p></div>`,
      ui.segments([{ label: 'Целиком', on: true, filter: 'whole' }, { label: 'Только вторая часть', filter: 'part' }]),
      ui.section({ children: ui.list([rec(ui, y, 'Вчера'), rec(ui, t, 'Сегодня')]) }),
      ui.section({ title: 'Что изменилось', children: `<p class="mt-note">Вчера: ${y.note.toLowerCase()}<br/>Сегодня: ${t.note.toLowerCase()}</p>` }),
      ui.actions(ui.button({ label: 'Слушать подряд', icon: 'play', fillIcon: true, block: true, go: 'player', primary: true })),
    ]),
  ],
});
