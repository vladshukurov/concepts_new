import { THEME } from './_shared.mjs';
import { trip, meet } from '../model.mjs';

/* Системная поверхность: экран «Домой» с виджетом ближайшего сбора. Касание открывает чат поездки без входа */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'route', kicker: `В сборе · ${trip.name}`, title: `${meet.time} ${meet.place}`, sub: `На месте ${meet.here} из ${trip.people} · дальше Кремль в 10:30`, activate: 'keychain|trip' },
    app: { name: 'В сборе', icon: 'route', activate: 'keychain|trip' },
    apps: ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Фото'],
  }),
});
