import { THEME, map } from './_shared.mjs';
import { trip, people } from '../model.mjs';

/* Системная поверхность: «Поделиться» в Картах. Место уходит прямо в чат поездки */
export default (ui) => ui.screen({
  id: 'share', theme: THEME, className: 'sb-sys-surface',
  body: [
    map({ points: [['is-place', ui.icon('utensils')]], className: 'is-full' }),
    `<section class="sb-sheet" aria-label="Поделиться">
      <div class="sb-sheet-head"><span class="sb-place-ico">${ui.icon('utensils')}</span><span><strong>Тюбетей</strong><span>Баумана, 64 · Карты</span></span><button class="sb-sheet-x" data-back aria-label="Закрыть">${ui.icon('x')}</button></div>
      <div class="sb-share-people">${[
        [trip.initial, trip.name, ' data-activate="shareext|trip"'],
        [people.marat.initial, 'Марат', ' data-toast="Место отправлено Марату"'],
        [people.lena.initial, 'Лена', ' data-toast="Место отправлено Лене"'],
        ['ИЗ', 'Избранное', ' data-toast="Место сохранено в Избранное"'],
      ].map(([ini, name, a]) => `<button class="sb-share-to"${a} aria-label="Отправить в «Сбор»: ${name}"><span class="sb-share-face">${ini}<i>${ui.icon('route')}</i></span><span>${name}</span></button>`).join('')}</div>
      <div class="sb-share-apps">${[['send', 'Сбор'], ['message-circle', 'Сообщения'], ['mail', 'Почта'], ['bookmark', 'Заметки']].map(([ic, name]) => `<span class="sb-share-app"><i>${ui.icon(ic)}</i>${name}</span>`).join('')}</div>
      <div class="sb-share-list"><button data-toast="Ссылка скопирована" aria-label="Скопировать">Скопировать${ui.icon('copy')}</button><button data-toast="Добавлено в путеводитель Карт" aria-label="Добавить в путеводитель">Добавить в путеводитель${ui.icon('bookmark')}</button></div>
    </section>`,
  ],
});
