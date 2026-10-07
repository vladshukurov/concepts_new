import { THEME, roll } from './_shared.mjs';
import { choir, today } from '../model.mjs';

/* Системная поверхность: экран «Домой» с виджетом «Спевка сегодня». Данные виджет берёт из общего контейнера */
const apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Диктофон', 'Фото'];
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'sp-home',
  body: [
    `<button class="sp-widget" data-go="rollcall" aria-label="Виджет «Спевка сегодня»"><small>${ui.icon('audio-lines')}В унисон · ${choir.name}</small><strong>Спевка сегодня в ${today.time}</strong><span>${choir.dk}, ${choir.hall} · пришли ${today.came} из ${choir.people}</span>${roll(today.came, choir.people, 'sp-widget-bar')}</button>`,
    `<div class="sp-apps"><button class="sp-app is-ours" data-go="chats" aria-label="В унисон"><i>${ui.icon('audio-lines')}</i>В унисон</button>${apps.map((a) => `<span class="sp-app"><i></i>${a}</span>`).join('')}</div>`,
  ],
});
