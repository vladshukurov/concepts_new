import { THEME } from './_shared.mjs';
import { project } from '../model.mjs';

/* Файлы проекта: макеты сеткой, документы списком; к утру всё скачано для офлайна — демо у клиента без сети */
const tile = (i, label) => `<button class="lt-tile ph" data-tags="mock" data-toast="${label}" aria-label="${label}"></button>`;
const mocks = [[1, 'Логотип v3'], [2, 'Логотип v3, тёмный'], [3, 'Вывеска на проходной'], [4, 'Бланк письма'], [5, 'Пропуск сотрудника'], [6, 'Флаг на катере']];
const docs = [
  ['Гайд «Северная верфь» v3.pdf', '38 страниц · 24 МБ · Паша, вчера', 'скачан'],
  ['Ролик к демо, черновик.mp4', '1:12 · 186 МБ · Катя, вчера', 'скачан'],
  ['Тексты гайда.docx', '14 страниц · 220 КБ · Оля, сегодня в 9:30', 'скачан'],
  ['Презентация для демо.key', '22 слайда · 64 МБ · Ира, правится', 'скачивается 62 %'],
  ['Исходники логотипа.fig', '412 МБ · Лера', 'не скачан, только по Wi‑Fi'],
];
export default (ui) => ui.screen({
  id: 'files', theme: THEME,
  body: [
    ui.nav({ title: 'Файлы проекта', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с файлами', menu: ['Скачать всё=Скачивание 46 файлов началось', 'Выбрать'] }) }),
    ui.scroll([
      ui.section({ children: ui.segments([
        { label: 'Все', on: true, filter: 'all' },
        { label: 'Макеты', filter: 'mock' },
        { label: 'Документы', filter: 'doc' },
      ]) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('download', { round: true, accent: true }), title: `Офлайн к демо · ${project.offlineSize}`, sub: `Вложения проекта скачаны для офлайна в ${project.offline}`, subWrap: true }),
      ]) }),
      ui.section({ title: 'Макеты', meta: '28', tags: ['mock'], children: `<div class="lt-grid">${mocks.map(([i, l]) => tile(i, l)).join('')}</div>` }),
      ui.section({ title: 'Документы', meta: '18', tags: ['doc'], children: ui.list(docs.map(([title, sub, state]) => ui.row({
        lead: ui.leadIcon('file-text', { round: true, accent: true }), title, sub: `${sub} · ${state}`, toast: `${title.split('.')[0]} открыт`,
      }))) }),
    ]),
  ],
});
