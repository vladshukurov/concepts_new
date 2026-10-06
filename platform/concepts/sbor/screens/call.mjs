import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

/* Звонок Марату, который отстал от группы: системный экран звонка */
export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'sb-call',
  body: ui.callView({ initial: people.marat.initial, name: people.marat.name, status: 'Казань · осень · 00:47', controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'volume-2', label: 'Динамик', toast: 'Звук на динамике' },
    { icon: 'video', label: 'Видео', toast: 'Камера включена' },
    { icon: 'phone-off', label: 'Завершить', end: true, back: true, primary: true },
  ] }),
});
