import { THEME } from './_shared.mjs';
import { people, longrun } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'notif', theme: THEME,
  body: [
    ui.nav({ title: 'Уведомления' }),
    ui.scroll([
      ui.section({ title: 'Сегодня', children: ui.list([
        ui.row({ lead: ui.avatar(people.ilya.initial), title: `${people.ilya.first} сдвинул точку старта`, sub: `${longrun.title} · к главному входу · 06:40`, go: 'meetup' }),
        ui.row({ lead: ui.avatar(people.dasha.initial), title: `${people.dasha.first} идёт на лонгран`, sub: '07:02', go: 'route' }),
      ]) }),
      ui.section({ title: 'Вчера', children: ui.list([
        ui.row({ lead: ui.avatar(people.alina.initial), title: `${people.alina.first} отметила вас в публикации`, sub: 'Набережная · 6,4 км', go: 'post' }),
      ]) }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Включить уведомления', icon: 'bell', block: true, ask: 'push|notif|notif', primary: true })]),
        ui.denied('push'),
      ] }),
    ]),
  ],
});
