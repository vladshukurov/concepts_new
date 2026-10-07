import { THEME } from './_shared.mjs';
import { choir, today } from '../model.mjs';

/* Системная поверхность: экран «Домой» с виджетом «Спевка сегодня». Данные виджет берёт из общего контейнера */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'audio-lines', kicker: `В унисон · ${choir.name}`, title: `Спевка сегодня в ${today.time}`, sub: `${choir.dk}, ${choir.hall} · подтвердили ${today.confirmed} из ${choir.people}`, go: 'balance' },
    app: { name: 'В унисон', icon: 'audio-lines', go: 'chats' },
    apps: ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Диктофон', 'Фото'],
  }),
});
