import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'walk', theme: THEME,
  body: [
    ui.nav({ title: 'Прогулка' }),
    ui.scroll([
      `<div class="kt-batch"><small>Сегодня · сбор 18:40</small><h1>Тени вдоль Малой Алматинки</h1><p class="ui-sub">Старт у Арбата, четыре точки, финиш у Lab-Red</p></div>`,
      ui.section({ children: ui.actions([ui.button({ label: 'Присоединиться', block: true, primary: true, toast: 'Вы присоединились' })]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'route', title: 'Маршрут', sub: '4,2 км · 4 точки · без лестниц', go: 'route' }),
        ui.cell({ icon: 'calendar', title: 'Время', sub: '18:40–21:00 · закат 19:21', go: 'calendar' }),
        ui.cell({ icon: 'file-text', title: 'После прогулки', sub: 'Общий контакт-лист через 5–7 дней', go: 'post' }),
      ] }) }),
      ui.section({ title: 'Что взять', children: ui.list([
        ui.row({ lead: ui.leadIcon('film'), title: 'Плёнка от ISO 400', sub: 'Вечерний свет у воды' }),
        ui.row({ lead: ui.leadIcon('umbrella'), title: 'Лёгкий дождевик', sub: 'Обещают морось после 20:00' }),
        ui.row({ lead: ui.leadIcon('mail'), title: 'Пустой конверт', sub: 'Для передачи плёнки в Lab-Red' }),
      ]) }),
    ]),
  ],
});
