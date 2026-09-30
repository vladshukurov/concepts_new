import { THEME, chain } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'handoff', theme: THEME,
  body: [
    ui.nav({ title: 'Передача K-184' }),
    ui.scroll([
      `<div class="kt-batch"><small>Передача материалов</small><h1>Три отпечатка для Даны</h1></div>`,
      ui.section({ children: chain([['Подготовлено', '18:12 · Айжан', 'done'], ['Передано', '19:06 · Lab-Red', 'done'], ['Получение', 'Дана', 'now']]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'send', title: 'От', sub: 'Lab-Red · Айжан', label: 'Отправитель: Lab-Red, Айжан', toast: 'Состав передачи проверен' }),
        ui.cell({ icon: 'user', title: 'Кому', sub: 'Дана · сегодня после 19:00' }),
        ui.cell({ icon: 'mail', title: 'Материал', sub: '3 отпечатка 13×18 · конверт K-184' }),
        ui.cell({ icon: 'map-pin', title: 'Точка', sub: 'Кофейня у лаборатории', toast: 'Точка передачи подтверждена' }),
        ui.cell({ icon: 'clock', title: 'Окно', value: '19:00–20:30', toast: 'Время передачи подтверждено' }),
      ] }) }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Отметить полученным', icon: 'circle-check', block: true, primary: true, toast: 'Получение зафиксировано · 19:24' }),
        ui.button({ label: 'Состав не совпадает', variant: 'tertiary', block: true, toast: 'Состав отправлен на повторную проверку' }),
      ]) }),
    ]),
  ],
});
