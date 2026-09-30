import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'materials', theme: THEME,
  body: [
    ui.nav({ title: 'Материалы', trailing: ui.textButton({ label: 'Добавить', strong: true, toast: 'Новая позиция' }) }),
    ui.scroll([
      ui.section({ children: ui.stats([['14', 'позиций'], ['3', 'заканчиваются'], ['2', 'в передаче']]) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('film'), title: 'Ilford HP5 · 135/36', sub: 'Осталось 2 · порог 4', end: { badge: 'мало' }, toast: 'Открыта партия HP5' }),
        ui.row({ lead: ui.leadIcon('flask-conical'), title: 'Kodak HC-110 · 420 мл', sub: 'Хватит примерно на 11 партий' }),
        ui.row({ lead: ui.leadIcon('file-text'), title: 'Ilford MG RC 13×18', sub: '18 листов · заберут завтра', go: 'handoff' }),
        ui.row({ lead: ui.leadIcon('mail'), title: 'Конверты для негативов', sub: '47 штук' }),
        ui.row({ lead: ui.leadIcon('flask-conical'), title: 'Фиксаж Adofix', sub: 'Смешан 1 сентября · тест через 2 дня' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Запросить Ilford HP5', block: true, primary: true, toast: 'Запрос отправлен в лабораторию' })]) }),
    ]),
  ],
});
