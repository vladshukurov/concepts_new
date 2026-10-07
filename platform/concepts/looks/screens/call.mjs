import { THEME, who } from './_shared.mjs';
import { item, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'lk-call',
  body: ui.callView({ ...who('lera'), name: people.lera.name, status: `Проверка: ${item.short} · 00:48`, controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'video', label: 'Камера', toast: 'Камера включена' },
    { icon: 'switch-camera', label: 'Повернуть', toast: 'Задняя камера' },
    { icon: 'phone-off', label: 'Завершить', end: true, back: true, primary: true },
  ] }),
});
