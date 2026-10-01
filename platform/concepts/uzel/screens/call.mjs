import { THEME } from './_shared.mjs';
import { people, shift } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'uz-call',
  body: ui.callView({ initial: people.pavel.initial, name: `Смена · ${shift.workshop}`, status: `Дежурный ${people.pavel.name} · 03:12`, controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'volume-2', label: 'Динамик', toast: 'Звук на динамике' },
    { icon: 'video', label: 'Показать', toast: 'Камера включена — покажите деталь' },
    { icon: 'phone-off', label: 'Завершить', end: true, back: true, primary: true },
  ] }),
});
