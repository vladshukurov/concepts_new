import { THEME } from './_shared.mjs';
import { cookalong } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'call', theme: THEME, className: 'pd-call',
  body: ui.callView({ initial: 'АР', name: cookalong.title, status: `Амина ведёт · ${cookalong.cooks} участников · 00:42`, controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'volume-2', label: 'Динамик', toast: 'Звук на динамике' },
    { icon: 'tv', label: 'Шаги', go: 'steps' },
    { icon: 'phone-off', label: 'Завершить', end: true, back: true, primary: true },
  ] }),
});
