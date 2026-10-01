import { THEME } from './_shared.mjs';
import { meeting, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'live', theme: THEME, className: 'kl-call',
  body: ui.callView({ initial: people.chair.initial, name: 'Собрание правления', status: `${meeting.item[0].toUpperCase() + meeting.item.slice(1)} · ${meeting.listeners} собственников · ${meeting.elapsed}`, controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'hand', label: 'Слово', toast: 'Вы в очереди на слово · третья' },
    { icon: 'file-text', label: 'Повестка', go: 'thread' },
    { icon: 'phone-off', label: 'Выйти', end: true, back: true, primary: true },
  ] }),
});
