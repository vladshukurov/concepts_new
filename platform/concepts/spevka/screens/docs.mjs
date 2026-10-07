import { THEME } from './_shared.mjs';
import { tour, choir } from '../model.mjs';

/* Документы для гастролей под Face ID: паспортные данные хора и договоры */
const files = [
  ['users', 'Список хора для автобуса', `${choir.people} человека · PDF`, 'Денис, 2 октября'],
  ['landmark', 'Договор с филармонией', 'концерт в 17:00 · PDF', 'Ирина, 28 сентября'],
  ['car', 'Договор на автобус', '45 мест · PDF', 'Денис, 30 сентября'],
  ['bed', 'Бронь гостиницы «Волжская»', '16 номеров, 1 ночь', 'Денис, 1 октября'],
  ['clipboard-check', 'Согласия на обработку данных', `${choir.people} подписи`, 'Денис, вчера'],
  ['id-card', 'Мой паспорт — скан', 'видно только вам', 'вы, 2 октября'],
];
export default (ui) => ui.screen({
  id: 'docs', theme: THEME,
  body: [
    ui.nav({ title: 'Документы для гастролей', trailing: ui.iconButton({ icon: 'plus', label: 'Добавить документ', menu: ['Из Файлов=Откроются Файлы', 'Сканировать камерой>camera'] }) }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Поиск по документам' }) }),
      ui.section({ title: `${tour.city} · ${tour.dates}`, meta: `${files.length} файлов`, children: ui.list(files.map(([ic, title, sub, who]) => ui.row({ lead: ui.leadIcon(ic, { round: true, accent: true }), title, sub: `${sub} · ${who}`, toast: `${title} открыт` }))) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'scan-face', title: 'Закрывать через минуту', sub: 'После выхода из документов', toggle: true }),
      ] }) }),
    ]),
  ],
});
