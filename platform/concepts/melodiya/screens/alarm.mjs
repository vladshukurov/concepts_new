import { THEME, toneRow } from './_shared.mjs';
import { alarm, tones } from '../model.mjs';

/* Будильник 7:00: голос Тёмы, громче постепенно; звучит и с погашенным экраном */
const t = tones[alarm.tone];
export default (ui) => ui.screen({
  id: 'alarm', theme: THEME,
  body: [
    ui.nav({ title: 'Будильник' }),
    ui.scroll([
      `<div class="md-clock"><strong>${alarm.time}</strong><span>пн вт ср чт пт · завтра через 9 ч 50 мин</span></div>`,
      ui.section({ title: 'Мелодия', children: ui.list([toneRow(t, { checked: true, sub: `голос Тёмы · ${t.len} с` })]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'volume-2', title: 'Громче постепенно', toggle: true }),
        ui.cell({ icon: 'timer-reset', title: 'Повтор', value: `через ${alarm.snooze}`, menu: ['через 5 мин', 'через 9 мин', 'через 15 мин'] }),
      ] }) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ico(ui), title: 'Будить с погашенным экраном', sub: 'оставьте «Мелодии» открытыми на ночь — Тёма разбудит в 7:00', activate: 'audio|lock', primary: true }),
      ]) }),
    ]),
  ],
});
const ico = (ui) => `<span class="ui-thumb md-ico is-accent">${ui.icon('moon')}</span>`;
