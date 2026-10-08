import { THEME } from './_shared.mjs';
import { metro, pieces } from '../model.mjs';

/* Метроном занятия: темп пьесы, доли такта, запуск; играет и с погашенным экраном */
const R = pieces.romance;
/* Шаги темпа от «было» к цели: выбранный шаг сразу встаёт крупно */
const STEPS = [R.from, 88, metro.bpm, 104, R.goal];
export default (ui) => ui.screen({
  id: 'metronome', theme: THEME,
  body: [
    ui.nav({ title: 'Метроном' }),
    ui.scroll([
      `<div class="mt-metro"><span class="mt-metro-piece">${R.title} · цель ${R.goal}</span>${STEPS.map((n) => `<strong class="mt-bpm${n === metro.bpm ? '' : ' is-filtered-out'}" data-tags="t${n}">${n}</strong>`).join('')}<span class="mt-metro-unit">ударов в минуту · ${metro.beat}</span><div class="mt-beats" aria-hidden="true"><i class="is-on"></i><i></i><i></i><i></i></div></div>`,
      ui.segments(STEPS.map((n) => ({ label: String(n), on: n === metro.bpm, filter: `t${n}` }))),
      `<div class="mt-metro-play">${ui.play({ size: 'xl', label: 'Запустить метроном' })}</div>`,
      ui.section({ children: ui.list([
        ui.row({ lead: `<span class="ui-thumb mt-ico is-accent">${ui.icon('lock')}</span>`, title: 'Играть с погашенным экраном', sub: 'метроном не собьётся, пока телефон лежит на пюпитре', activate: 'audio|lock', primary: true }),
      ]) }),
      ui.section({ children: ui.foot(`Занятие идёт ${metro.elapsed} · запись в «Диктофоне»`) }),
    ]),
  ],
});
