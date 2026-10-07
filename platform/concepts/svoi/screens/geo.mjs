import { THEME, map } from './_shared.mjs';
import { pickup, people, family } from '../model.mjs';

/* Где сейчас: шаг «Едем» у забирания — точка машины по пути домой, отправить её в чат семьи */
export default (ui) => ui.screen({
  id: 'geo', theme: THEME,
  body: [
    ui.nav({ title: 'Где сейчас', back: 'close' }),
    ui.scroll([
      ui.section({ children: map({ points: [['is-me', ''], ['is-club', ui.icon('flag')], ['is-kid', people.mila.initial]] }) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('navigation', { round: true, accent: true }), title: 'Отправить точку в чат семьи', sub: `Едем с ${pickup.child === 'Мила' ? 'Милой' : pickup.child} · дома около ${pickup.homeAt}`, toast: `Точка отправлена в «${family.name}»|family`, primary: true }),
        ui.row({ lead: ui.leadIcon('timer', { round: true, accent: true }), title: 'Показывать до дома', sub: 'Точка обновляется, пока не войдёте в домашнюю сеть', toast: `Семья видит вас до ${family.ssid}|family` }),
      ]) }),
      ui.section({ title: 'Маршрут', children: ui.list([
        ui.row({ lead: ui.leadIcon('flag', { round: true }), title: `${pickup.place}, ${pickup.addr}`, sub: `забрали Милу · ${pickup.to}` }),
        ui.row({ lead: ui.leadIcon('house', { round: true }), title: 'Дом, Чистопольская, 61', sub: `${pickup.dist} · шаг «Дома» отметится по ${family.ssid}` }),
      ]) }),
    ]),
  ],
});
