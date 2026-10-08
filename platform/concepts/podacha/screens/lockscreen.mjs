import { THEME } from './_shared.mjs';
import { now, people, cookalong, step } from '../model.mjs';

/* Системная поверхность: экран блокировки во время ужина. Шаги звучат с погашенным экраном,
   сообщения приходят от людей — с именем и аватаром, превью расшифровано на телефоне */
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'ui-lock',
  body: ui.lockScreen({
    time: '19:18', date: now.date[0].toUpperCase() + now.date.slice(1), appIcon: 'chef-hat',
    notifications: [
      { initials: people.amina.initial, title: people.amina.name, app: cookalong.title, text: 'Голосовое · 0:12', time: '19:18', activate: 'commnotif|conversation', label: `Уведомление: ${people.amina.name}` },
      { initials: people.zhanna.initial, title: people.zhanna.name, text: 'Добавила сметану в покупки, фарш возьмёшь?', time: '18:52', activate: 'keychain|direct-zhanna', label: `Уведомление: ${people.zhanna.name}` },
    ],
    nowPlaying: { title: `Шаг ${step.n} · ${step.short}`, sub: `${cookalong.title} · осталось ${step.timer}`, at: '0:48', left: '−1:10', fillClass: 'pd-fill-40', go: 'audio' },
  }),
});
