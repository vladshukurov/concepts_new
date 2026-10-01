import { THEME } from './_shared.mjs';
import { people, pleinair } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'sh-call',
  body: ui.callView({ initial: people.marina.initial, name: 'Аудиоразбор пленэра', status: `${pleinair.title} · 6 в разговоре · 12:40`, controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'hand', label: 'Слово', toast: 'Вы в очереди на разбор · вторая' },
    { icon: 'image', label: 'Работа', go: 'picker' },
    { icon: 'phone-off', label: 'Выйти', end: true, back: true, primary: true },
  ] }),
});
