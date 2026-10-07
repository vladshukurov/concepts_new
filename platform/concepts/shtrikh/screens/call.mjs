import { THEME } from './_shared.mjs';
import { people, pleinair } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'sh-call',
  body: ui.callView({ initial: people.marina.initial, name: 'Сбор перед встречей', status: `${pleinair.title} · 6 в разговоре · 04:10`, controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'map-pin', label: 'Точка сбора', toast: 'Главный вход, у часов' },
    { icon: 'image', label: 'Показать работу', go: 'picker' },
    { icon: 'phone-off', label: 'Выйти', end: true, back: true, primary: true },
  ] }),
});
