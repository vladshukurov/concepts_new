import { THEME, frame, channel } from './_shared.mjs';
import { embankment, people } from '../model.mjs';

/* Ваш квест «Набережная»: старт в субботу, точки, напоминание о старте */
const e = embankment;
export default (ui) => ui.screen({
  id: 'embankment', theme: THEME, className: 'vz-wrap',
  body: [
    ui.nav({ title: 'Квест' }),
    ui.scroll([
      `<div class="vz-banner ${frame}"></div>`,
      ui.section({ children: [
        channel({ initial: people.me.initial, title: e.title, sub: `${e.meta} · придумали вы` }),
        ui.miniInfo([
          { icon: 'calendar', text: `${e.day}, ${e.time}` },
          { icon: 'map-pin', text: `Старт: ${e.start}` },
        ]),
        ui.usersStack({ faces: ['ДЧ', 'ОМ', 'ГК'], text: 'Дима, Оля, Гоша и ещё 3 идут' }),
      ] }),
      ui.section({ children: ui.list([
        ui.reminder({ title: 'Напомнить о старте в субботу в 12:00', titleGranted: 'Напомним в субботу в 11:00', sub: 'За час до старта, всем командам', here: 'embankment' }),
      ]) }),
      ui.section({ title: 'Точки', meta: `${e.points.length} из ${e.pointsCount} готовы`, children: ui.list(e.points.map((p) =>
        ui.row({ lead: ui.leadIcon('', { round: true, text: String(p.n) }), title: p.task, sub: p.place }))) }),
      ui.actions(ui.button({ label: 'Добавить точку', icon: 'map-pin', variant: 'secondary', block: true, go: 'newpoint' }), { className: 'vz-bottom' }),
    ]),
  ],
});
