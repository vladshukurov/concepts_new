import { THEME } from './_shared.mjs';
import { docsCount } from '../model.mjs';

/* Документы семьи под Face ID: паспорта, полисы, свидетельства — всегда под рукой у врача и в школе */
const files = [
  ['id-card', 'Паспорт Алины', '1,8 МБ', 'Алина, 2023'],
  ['id-card', 'Паспорт Тимура', '1,6 МБ', 'Тимур, 2023'],
  ['badge-check', 'Свидетельство о рождении Дани', '940 КБ', 'Алина, 2024'],
  ['badge-check', 'Свидетельство о рождении Милы', '910 КБ', 'Алина, 2024'],
  ['stethoscope', 'Полис ОМС — Даня', '180 КБ', 'Алина, вчера'],
  ['stethoscope', 'Полис ОМС — Мила', '180 КБ', 'Алина, вчера'],
  ['shield', 'СНИЛС детей', '2 файла', 'Тимур, март'],
  ['droplets', 'Справка в бассейн — Даня', 'до 4 апреля 2027', 'Алина, 4 октября'],
  ['palette', 'Договор со студией «Акварель»', 'до 31 мая', 'Алина, 1 сентября'],
];
export default (ui) => ui.screen({
  id: 'docs', theme: THEME,
  body: [
    ui.nav({ title: 'Документы семьи', trailing: ui.iconButton({ icon: 'plus', label: 'Добавить документ', menu: ['Из Файлов=Откроются Файлы', 'Сканировать камерой>camera'] }) }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Поиск по документам' }) }),
      ui.section({ title: 'Гариповы', meta: `${docsCount} файлов`, children: ui.list(files.map(([ic, title, sub, who]) => ui.row({ lead: ui.leadIcon(ic, { round: true, accent: true }), title, sub: `${sub} · ${who}`, toast: `${title} открыт` }))) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'scan-face', title: 'Закрывать через минуту', sub: 'После выхода из документов', toggle: true }),
      ] }) }),
    ]),
  ],
});
