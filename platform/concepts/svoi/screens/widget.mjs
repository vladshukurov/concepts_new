import { THEME } from './_shared.mjs';
import { family, home, people, pickup } from '../model.mjs';

/* Системная поверхность: экран «Домой» с виджетом «Кто заберёт». Касание открывает доску во вкладке «Дом» */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'house', kicker: `Кто заберёт · ${family.name}`, title: `Милу никто не забирает · до ${pickup.to}`, sub: `Даню из бассейна — Роза · ${people.timur.short} к ${home.timurBack}`, go: 'home' },
    app: { name: 'Все дома', icon: 'house', go: 'chats' },
    apps: ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Фото'],
  }),
});
