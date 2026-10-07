import { THEME } from './_shared.mjs';
import { project, people } from '../model.mjs';

/* Системная поверхность: «Поделиться» в Файлах. Подписанный бриф уходит прямо в чат проекта */
const rows = [
  ['Бриф_подписанный.pdf', 'сегодня, 9:58 · 1,2 МБ'],
  ['Акт № 14, скан.pdf', 'вчера · 860 КБ'],
  ['Чек-лист демо.pdf', 'сегодня, 8:05 · 96 КБ'],
  ['Смета ролика.xlsx', '30 сентября · 48 КБ'],
];
export default (ui) => ui.screen({
  id: 'share', theme: THEME, className: 'lt-sys-surface',
  body: [
    `<div class="lt-files-bg" aria-hidden="true"><strong>Загрузки</strong>${rows.map(([n, s]) => `<span class="lt-files-row"><i>${ui.icon('file-text')}</i><span><b>${n}</b><small>${s}</small></span></span>`).join('')}</div>`,
    `<section class="lt-sheet" aria-label="Поделиться">
      <div class="lt-sheet-head"><span class="lt-place-ico">${ui.icon('file-text')}</span><span><strong>Бриф_подписанный.pdf</strong><span>PDF · 2 страницы · 1,2 МБ</span></span><button class="lt-sheet-x" data-back aria-label="Закрыть">${ui.icon('x')}</button></div>
      <div class="lt-share-people">${[
        [project.initial, project.name, ' data-activate="shareext|project"'],
        [people.pasha.initial, 'Паша', ' data-toast="Файл отправлен Паше"'],
        [people.artem.initial, 'Артём', ' data-toast="Файл отправлен Артёму"'],
        ['ИЗ', 'Избранное', ' data-toast="Файл сохранён в Избранное"'],
      ].map(([ini, name, a]) => `<button class="lt-share-to"${a} aria-label="Отправить в «В курсе»: ${name}"><span class="lt-share-face is-initial ${ui.hue(ini)}">${ini}<i>${ui.icon('message-circle')}</i></span><span>${name}</span></button>`).join('')}</div>
      <div class="lt-share-apps">${[['message-circle', 'В курсе'], ['send', 'Сообщения'], ['mail', 'Почта'], ['bookmark', 'Заметки']].map(([ic, name]) => `<span class="lt-share-app"><i>${ui.icon(ic)}</i>${name}</span>`).join('')}</div>
      <div class="lt-share-list"><button data-toast="Файл скопирован" aria-label="Скопировать">Скопировать${ui.icon('copy')}</button><button data-toast="Файл отправлен на печать" aria-label="Напечатать">Напечатать${ui.icon('file-text')}</button></div>
    </section>`,
  ],
});
