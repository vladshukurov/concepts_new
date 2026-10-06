import { THEME } from './_shared.mjs';

/* Документы поездки под Face ID: брони, билеты и список группы с паспортными данными */
const files = [
  ['file-text', 'Список группы для музея', '16 человек · имена и паспорта · PDF, 312 КБ', 'Ника, 2 октября'],
  ['file-text', 'Бронь отеля «Кама»', '8 номеров, 2 ночи · подтверждение 77104', 'Ника, 21 сентября'],
  ['file-text', 'Билеты на поезд туда', '16 мест, вагон 5 · PDF, 1,1 МБ', 'Олег, 15 сентября'],
  ['file-text', 'Билеты на поезд обратно', '16 мест, вагон 7 · PDF, 1,0 МБ', 'Олег, 15 сентября'],
  ['file-text', 'Катер в Свияжск', '16 билетов · 22 400 ₽ · QR на каждого', 'Рустам, вчера'],
  ['id-card', 'Паспорт Ники — скан', '2 страницы · 1,8 МБ · видно только вам', 'вы, 2 октября'],
  ['banknote', 'Чеки поездки', '11 чеков · 61 870 ₽ · по 3 867 ₽ с человека', 'Лена, сегодня'],
];
export default (ui) => ui.screen({
  id: 'docs', theme: THEME,
  body: [
    ui.nav({ title: 'Документы', trailing: ui.iconButton({ icon: 'plus', label: 'Добавить документ', menu: ['Из Файлов=Откроются Файлы', 'Сканировать камерой>camera'] }) }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Поиск по документам' }) }),
      ui.section({ title: 'Казань · осень', meta: '7 файлов', children: ui.list(files.map(([ic, title, sub, who]) => ui.row({ lead: ui.leadIcon(ic, { round: true, accent: true }), title, sub: `${sub} · ${who}`, toast: `${title} открыт` }))) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'scan-face', title: 'Закрывать через минуту', sub: 'После выхода из документов', toggle: true }),
      ] }) }),
    ]),
  ],
});
