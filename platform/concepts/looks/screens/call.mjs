import { THEME, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'lk-call',
  body: ui.callView({ face: P.lera, name: 'Лера Савина', status: 'Проверка жакета · 00:48', controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'video', label: 'Камера', toast: 'Камера включена' },
    { icon: 'repeat-2', label: 'Повернуть', toast: 'Задняя камера' },
    { icon: 'phone-off', label: 'Завершить', end: true, go: 'swap', primary: true },
  ] }),
});
