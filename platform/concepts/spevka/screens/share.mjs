import { THEME } from './_shared.mjs';
import { choir, regent } from '../model.mjs';

/* Системная поверхность: «Поделиться» в «Диктофоне». Запись распевки уходит прямо в чат партии альтов */
const memos = [['Распевка, альты', 'Сегодня, 19:03', '1:24'], ['Ой, то не вечер — дома', 'Вчера, 22:40', '3:41'], ['Вечерний звон — 17 такт', 'Вчера, 22:10', '0:36']];
export default (ui) => ui.screen({
  id: 'share', theme: THEME, className: 'sp-sys-surface',
  body: [
    `<div class="sp-memos" aria-hidden="true"><h2>Все записи</h2>${memos.map(([t, d, dur]) => `<div class="sp-memo"><strong>${t}</strong><span>${d}<b>${dur}</b></span></div>`).join('')}</div>`,
    `<section class="sp-sheet" aria-label="Поделиться">
      <div class="sp-sheet-head"><span class="sp-place-ico">${ui.icon('mic')}</span><span><strong>Распевка, альты</strong><span>Диктофон · 1:24 · сегодня в 19:03</span></span><button class="sp-sheet-x" data-back aria-label="Закрыть">${ui.icon('x')}</button></div>
      <div class="sp-share-people">${[
        ['АП', 'Альты · партии', ' data-activate="shareext|altos"'],
        [choir.initial, 'Хор «Камертон»', ' data-toast="Запись отправлена в чат хора"'],
        [regent.initial, 'Ирина', ' data-toast="Запись отправлена Ирине"'],
        ['ИЗ', 'Избранное', ' data-toast="Запись сохранена в Избранное"'],
      ].map(([ini, name, a]) => `<button class="sp-share-to"${a} aria-label="Отправить в «В унисон»: ${name}"><span class="sp-share-face is-initial ${ui.hue(ini)}">${ini}<i>${ui.icon('audio-lines')}</i></span><span>${name}</span></button>`).join('')}</div>
      <div class="sp-share-apps">${[['audio-lines', 'В унисон'], ['message-circle', 'Сообщения'], ['mail', 'Почта'], ['bookmark', 'Заметки']].map(([ic, name]) => `<span class="sp-share-app"><i>${ui.icon(ic)}</i>${name}</span>`).join('')}</div>
      <div class="sp-share-list"><button data-toast="Запись скопирована" aria-label="Скопировать">Скопировать${ui.icon('copy')}</button><button data-toast="Сохранено в Файлы" aria-label="Сохранить в Файлы">Сохранить в Файлы${ui.icon('folder')}</button></div>
    </section>`,
  ],
});
