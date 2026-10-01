import { THEME } from './_shared.mjs';
import { tonight, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'st-call',
  body: ui.callView({ initial: people.masha.initial, name: `Стол · ${tonight.game}`, status: `${tonight.taken} игрока · 01:48`, controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'volume-2', label: 'Динамик', toast: 'Звук на динамике' },
    { icon: 'list-ordered', label: 'Счёт', go: 'score' },
    { icon: 'phone-off', label: 'Завершить', end: true, back: true, primary: true },
  ] }),
});
