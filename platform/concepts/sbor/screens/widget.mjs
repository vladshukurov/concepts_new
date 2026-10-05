import { THEME } from './_shared.mjs';
import { trip, meet } from '../model.mjs';

/* Системная поверхность: экран «Домой» с виджетом ближайшего сбора. Касание открывает чат поездки без входа */
const apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Фото'];
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'sb-home',
  body: [
    `<button class="sb-widget" data-activate="keychain|trip" aria-label="Виджет «Ближайший сбор»"><small>${ui.icon('route')}Сбор · ${trip.name}</small><strong>${meet.time} ${meet.place}</strong><span>На месте ${meet.here} из ${trip.people} · дальше Кремль в 10:30</span><span class="sb-widget-bar" aria-hidden="true">${Array.from({ length: trip.people }, (_, i) => `<i${i < meet.here ? ' class="is-on"' : ''}></i>`).join('')}</span></button>`,
    `<div class="sb-apps"><button class="sb-app is-ours" data-activate="keychain|trip" aria-label="Сбор"><i>${ui.icon('route')}</i>Сбор</button>${apps.map((a) => `<span class="sb-app"><i></i>${a}</span>`).join('')}</div>`,
  ],
});
