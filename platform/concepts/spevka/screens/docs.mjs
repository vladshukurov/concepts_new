import { THEME } from './_shared.mjs';
import { tour, choir } from '../model.mjs';

/* Документы для гастролей под Face ID: паспортные данные хора и договоры */
const files = [
  ['file-text', 'Список хора для автобуса', `${choir.people} человека · имена и паспорта · PDF, 284 КБ`, 'Денис, 2 октября'],
  ['file-text', 'Договор с филармонией', 'Ярославль, 7 ноября · концерт в 17:00 · PDF, 1,4 МБ', 'Ирина, 28 сентября'],
  ['file-text', 'Договор на автобус', '45 мест · 7–8 ноября · PDF, 620 КБ', 'Денис, 30 сентября'],
  ['file-text', 'Бронь гостиницы «Волжская»', '16 номеров, 1 ночь · подтверждение 50418', 'Денис, 1 октября'],
  ['file-text', 'Согласия на обработку данных', `${choir.people} подписи · PDF, 2,2 МБ`, 'Денис, вчера'],
  ['id-card', 'Мой паспорт — скан', '2 страницы · 1,8 МБ · видно только вам', 'вы, 2 октября'],
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
