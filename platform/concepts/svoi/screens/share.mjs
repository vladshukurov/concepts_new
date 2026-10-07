import { THEME } from './_shared.mjs';
import { family, people } from '../model.mjs';

/* Системная поверхность: «Поделиться» в «Фото». Снимок уходит прямо в чат семьи */
export default (ui) => ui.screen({
  id: 'share', theme: THEME, className: 'sv-sys-surface',
  body: [
    '<div class="sv-share-photo ph"></div>',
    `<section class="sv-sheet" aria-label="Поделиться">
      <div class="sv-sheet-head"><span class="sv-place-ico">${ui.icon('image')}</span><span><strong>1 фото выбрано</strong><span>Сегодня, 14:52 · «Фото»</span></span><button class="sv-sheet-x" data-back aria-label="Закрыть">${ui.icon('x')}</button></div>
      <div class="sv-share-people">${[
        [family.initial, family.name, ' data-activate="shareext|family"'],
        [people.roza.initial, 'Мама', ' data-toast="Фото отправлено маме"'],
        [people.timur.initial, 'Тимур', ' data-toast="Фото отправлено Тимуру"'],
        ['ИЗ', 'Избранное', ' data-toast="Фото сохранено в Избранное"'],
      ].map(([ini, name, a]) => `<button class="sv-share-to"${a} aria-label="Отправить в «Все дома»: ${name}"><span class="sv-share-face is-initial ${ui.hue(ini)}">${ini}<i>${ui.icon('house')}</i></span><span>${name}</span></button>`).join('')}</div>
      <div class="sv-share-apps">${[['house', 'Все дома'], ['message-circle', 'Сообщения'], ['mail', 'Почта'], ['bookmark', 'Заметки']].map(([ic, name]) => `<span class="sv-share-app"><i>${ui.icon(ic)}</i>${name}</span>`).join('')}</div>
      <div class="sv-share-list"><button data-toast="Фото скопировано" aria-label="Скопировать">Скопировать${ui.icon('copy')}</button><button data-toast="Добавлено в альбом «Гариповы»" aria-label="Добавить в альбом">Добавить в альбом${ui.icon('images')}</button></div>
    </section>`,
  ],
});
