import { THEME } from './_shared.mjs';
import { people, longrun } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'ry-dark',
  body: ui.callView({ initial: people.ilya.initial, name: `Эфир · ${people.ilya.name}`, status: `${longrun.title} · ${longrun.confirmed} в эфире · 02:41`, controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'volume-2', label: 'Динамик', toast: 'Звук в наушниках' },
    { icon: 'route', label: 'Маршрут', go: 'player' },
    { icon: 'phone-off', label: 'Выйти', end: true, back: true, primary: true },
  ] }),
});
