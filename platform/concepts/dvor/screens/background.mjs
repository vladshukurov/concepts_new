import { THEME } from './_shared.mjs';

const log = [['04:12', 'Задача запущена системой'], ['04:12', 'Объявления дома: +2'], ['04:13', 'Срок показаний: 25 апреля'], ['04:13', 'Виджет обновлён'], ['09:41', 'Тема 4417-Б обновлена']];
export default (ui) => ui.screen({
  id: 'background', theme: THEME,
  body: [
    ui.nav({ title: 'Обновление в фоне' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'repeat-2', title: 'Режим', value: 'Раз в сутки' }),
        ui.cell({ icon: 'clock', title: 'Последний запуск', value: '04:12' }),
      ] }) }),
      ui.section({ title: 'Журнал', meta: 'сегодня', children: ui.list(log.map(([t, s]) => ui.row({ lead: ui.leadIcon('', { text: t }), title: s }))) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Проверить задачу', block: true, activate: 'bgtask|meters' })]) }),
    ]),
  ],
});
