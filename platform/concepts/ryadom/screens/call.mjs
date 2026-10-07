import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

/* Звонок Даше из личного диалога: CallKit, договориться, где встретиться на маршруте */
export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'ry-dark',
  body: ui.callView({ initial: people.dasha.initial, name: people.dasha.name, status: 'Голосовой звонок · 00:37', controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'volume-2', label: 'Динамик', toast: 'Звук в наушниках' },
    { icon: 'phone-off', label: 'Завершить', end: true, back: true, primary: true },
  ] }),
});
