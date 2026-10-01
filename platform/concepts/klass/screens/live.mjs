import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'live', theme: THEME, className: 'kl-call',
  body: ui.callView({ initial: 'АВ', name: 'Собрание правления', status: 'Пункт 2 из 5 · 38 собственников · 41:06', controls: [
    { icon: 'mic-off', label: 'Микрофон', toast: 'Микрофон выключен' },
    { icon: 'hand', label: 'Слово', toast: 'Вы в очереди на слово · третья' },
    { icon: 'file-text', label: 'Повестка', go: 'thread' },
    { icon: 'phone-off', label: 'Выйти', end: true, back: true, primary: true },
  ] }),
});
