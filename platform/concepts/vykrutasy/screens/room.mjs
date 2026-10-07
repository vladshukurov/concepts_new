import { THEME } from './_shared.mjs';
import { tonight, tasks, roomLine } from '../model.mjs';

/* Страница сегодняшнего вечера: телефон ведущего находит телевизор и телефоны гостей в комнате */
const guests = tonight.players.slice(1);
const DEVICES = { 'ОМ': 'iPhone Оли', 'ГК': 'iPhone Гоши', 'НБ': 'Телефон Насти', 'ИВ': 'iPhone Ильи' };
export default (ui) => ui.screen({
  id: 'room', theme: THEME, className: 'vy-wrap',
  body: [
    ui.nav({ title: tonight.title, trailing: ui.iconButton({ icon: 'square-pen', label: 'Задания', go: 'tasks' }) }),
    ui.scroll([
      ui.section({ children: ui.miniInfo([
        { icon: 'calendar', text: `Сегодня, ${tonight.time} · вы ведущий` },
        { icon: 'list-ordered', text: '5 раундов · 4 от игры и 1 своё' },
      ]) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: 'Найти телевизор и игроков рядом', sub: 'Телевизор и телефоны гостей в этой комнате', ask: 'localnetwork|room|room' }),
      ]) }),
      ui.denied('localnetwork'),
      ui.section({ shownAfter: 'localnetwork', title: roomLine, children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: tonight.tv, sub: `${tonight.tvModel} · раунды пойдут здесь`, end: { badge: 'ТВ' } }),
        ...guests.map((p) => ui.row({ lead: ui.avatar(p.initial), title: p.name, sub: `${DEVICES[p.initial]} · готов снимать` })),
        ui.row({ lead: ui.avatar(tonight.players[0].initial), title: `${tonight.players[0].name} · ведущий`, sub: 'Этот iPhone' }),
      ]) }),
      ui.section({ title: 'Раунды', meta: '0 из 5 сыграно', children: ui.list(tonight.rounds.map((k, i) =>
        ui.row({ lead: ui.leadIcon('', { text: String(i + 1) }), title: tasks[k], sub: i === 0 ? 'Первый · ответ на камеру · 10 секунд' : k === 'prom' ? 'Из галереи · старый ролик или фото' : k === 'fishing' ? 'Своё задание' : 'Ответ на камеру' }))) }),
      ui.actions(ui.button({ label: 'Начать раунд 1', icon: 'play', fillIcon: true, block: true, go: 'round', primary: true }), { className: 'vy-bottom' }),
    ]),
  ],
});
