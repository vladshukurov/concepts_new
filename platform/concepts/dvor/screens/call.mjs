import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'dv-call',
  body: ui.callView({ initial: 'МК', name: 'Марина, кв. 48', status: 'Двор · 01:06', controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'volume-2', label: 'Динамик', toast: 'Звук на динамике' },
    { icon: 'video', label: 'Видео', toast: 'Камера включена' },
    { icon: 'phone-off', label: 'Завершить', end: true, back: true, primary: true },
  ] }),
});
