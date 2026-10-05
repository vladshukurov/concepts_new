import { THEME } from './_shared.mjs';
import { walk } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'calendar', theme: THEME,
  body: [
    ui.nav({ title: 'Прогулка в календаре' }),
    ui.scroll([
      `<div class="kt-batch"><small>Сегодня, ${walk.hours}</small><h1>${walk.title}</h1><p class="ui-sub">Арбат → Lab-Red</p></div>`,
      ui.section({ children: [
        ui.group({ cells: [
          ui.cell({ icon: 'calendar', title: 'Календарь', value: 'Личный', toast: 'Календарь выбран' }),
          ui.cell({ icon: 'bell', title: 'Напомнить', value: 'За 45 минут', toast: 'Напоминание изменено' }),
          ui.cell({ icon: 'map-pin', title: 'Место', sub: 'Арбат, вход со стороны Панфилова' }),
        ] }),
        ui.denied('calendar'),
      ] }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить в календарь', icon: 'calendar-plus', block: true, primary: true, ask: 'calendar|walk|calendar' })]) }),
    ]),
  ],
});
