import { THEME, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'tl-call',
  body: ui.callView({
    face: PET.barni, name: 'Влада · Барни', status: 'Выгул · 02:14',
    controls: [
      { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
      { icon: 'volume-2', label: 'Динамик', toast: 'Звук на динамике' },
      { icon: 'video', label: 'Видео', toast: 'Камера включена' },
      { icon: 'phone-off', label: 'Завершить', end: true, back: true, primary: true },
    ],
  }),
});
