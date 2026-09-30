import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'match', theme: THEME,
  body: [
    ui.nav({ title: 'Найденные' }),
    ui.scroll([
      ui.section({ title: 'Похожи на соседей', meta: '9 из книги', children: ui.list([
        ui.row({ lead: ui.avatar('ВЛ'), title: 'Вера Лебедева', sub: 'Участок 56 · номер совпал с книгой', end: { value: 'Добавить', go: 'classroom', label: 'Добавить Веру' } }),
        ui.row({ lead: ui.avatar('СГ'), title: 'Сергей Гущин', sub: 'Участок 42 · номер в архиве правления', end: { value: 'Добавить', go: 'classroom', label: 'Добавить Сергея' } }),
        ui.row({ lead: ui.avatar('ЗА'), title: 'Андрей Захаров', sub: 'Совпала фамилия, в реестре участков нет', end: { value: 'Пропустить', toast: 'Пропущено', label: 'Пропустить Захарова' } }),
        ui.row({ lead: ui.leadIcon('phone'), title: '+7 921 ··· 14-06', sub: 'Контакт без имени, прошлогодний сбор', end: { value: 'Пропустить', toast: 'Пропущено', label: 'Пропустить номер' } }),
        ui.row({ lead: ui.leadIcon('users'), title: 'Ещё 5 совпадений', sub: 'Слабее совпали имя или номер', toast: 'Показаны ещё 5 совпадений' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить · 2', block: true, primary: true, go: 'classroom' })]) }),
    ]),
  ],
});
