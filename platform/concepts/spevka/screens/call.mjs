import { THEME } from './_shared.mjs';
import { regent } from '../model.mjs';

/* Звонок регенту из личного чата: системный экран звонка */
export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'sp-call',
  body: ui.callView({ initial: regent.initial, name: regent.name, status: 'Регент · 01:12', controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'volume-2', label: 'Динамик', toast: 'Звук на динамике' },
    { icon: 'video', label: 'Видео', toast: 'Камера включена' },
    { icon: 'phone-off', label: 'Завершить', end: true, back: true, primary: true },
  ] }),
});
