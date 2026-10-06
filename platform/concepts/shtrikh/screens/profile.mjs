import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Ещё', menu: ['Поделиться', 'Пожаловаться'] }) }),
    ui.scroll([
      `<div class="sh-me">${ui.avatar(people.alina.initial, { large: true })}<h1>${people.alina.name}</h1><p class="ui-sub">Линер, акварель · рисуем вместе на встречах</p>${ui.actions([ui.button({ label: 'Написать', go: 'direct', primary: true }), ui.button({ label: 'Позвать на встречу', variant: 'secondary', toast: 'Приглашение на встречу у базара отправлено' })], { row: true })}</div>`,
      ui.section({ title: 'Встречались', children: ui.list([
        ui.row({ lead: ui.leadIcon('calendar'), title: 'Утро на Зелёном базаре', sub: 'Завтра · идёт' }),
        ui.row({ lead: ui.leadIcon('calendar'), title: 'Дворы Панфилова', sub: 'Июль · рисовали липу вдвоём' }),
      ]) }),
    ]),
  ],
});
