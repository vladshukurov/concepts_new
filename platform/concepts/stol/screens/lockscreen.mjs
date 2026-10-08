import { THEME } from './_shared.mjs';
import { now, people, tonight, zhenyaNote } from '../model.mjs';

/* Системная поверхность: экран блокировки за игрой. Памятка правил звучит с погашенным экраном,
   сообщения приходят от людей — с именем и аватаром, превью расшифровано на телефоне */
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'ui-lock',
  body: ui.lockScreen({
    time: now.time, date: now.date[0].toUpperCase() + now.date.slice(1), appIcon: 'dices',
    notifications: [
      { initials: people.masha.initial, title: people.masha.name, app: `${tonight.game} · ${tonight.start}`, text: 'Илья ходит, не подсказывайте', time: '21:02', activate: 'commnotif|chat', label: `Уведомление: ${people.masha.name}` },
      { initials: people.zhenya.initial, title: people.zhenya.name, text: zhenyaNote.text, time: zhenyaNote.time, activate: 'keychain|direct', label: `Уведомление: ${people.zhenya.name}` },
    ],
    nowPlaying: { title: `Правила: ${tonight.game}`, sub: 'Глава 3 · Ход игрока · памятка', at: '4:02', left: '−6:10', fillClass: 'st-w-40', go: 'audio' },
  }),
});
