import { THEME } from './_shared.mjs';

const log = [['04:12', 'Задача запущена системой'], ['04:12', 'В ленте +9 записей'], ['04:13', 'Состав прогулки: 4 участника'], ['04:13', 'Снимок виджета обновлён'], ['07:26', 'Прогулку перенесли на 18:40'], ['08:51', 'Пропущено: мало заряда']];
export default (ui) => ui.screen({
  id: 'refresh', theme: THEME,
  body: [
    ui.nav({ title: 'Обновление в фоне' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'repeat-2', title: 'Задача', value: 'app.tails.refresh' }),
        ui.cell({ icon: 'clock', title: 'Последний запуск', value: '04:12' }),
        ui.cell({ icon: 'gauge', title: 'Средний прогон', value: '1,8 с' }),
      ] }) }),
      ui.section({ title: 'Журнал', meta: 'сегодня', children: ui.list(log.map(([t, s]) => ui.row({ lead: `<span class="tl-ts">${t}</span>`, title: s }))) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Проверить задачу', block: true, primary: true, activate: 'bgtask|home' })]) }),
    ]),
  ],
});
