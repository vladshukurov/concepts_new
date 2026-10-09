import { THEME, TABS, MINI, toneList, contactRow, ico } from './_shared.mjs';
import { tones, picks, contacts, alarm, KINDS } from '../model.mjs';

/* Главная «Мелодии»: крупный заголовок и сегменты «Звонок · Будильник · Сообщения»,
   под ними — компактный список, как звуки в настройках iOS: play в строке и галочка выбранной */
const kind = (id) => KINDS.find((k) => k.id === id);
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мелодии', `<div class="md-actions">${[
      ui.iconButton({ icon: 'alarm-clock', label: `Будильник ${alarm.time}`, go: 'alarm' }),
      ui.iconButton({ icon: 'plus', label: 'Новая мелодия', go: 'newtone' }),
    ].join('')}</div>`),
    ui.segments(KINDS.map((k, i) => ({ label: k.label, on: i === 0, filter: k.id }))),
    /* Звонок */
    ui.section({ title: kind('call').title, meta: tones[picks.call].title, tags: ['call'], children: toneList('call') }),
    ui.section({ title: 'Для контактов', more: { label: 'Контакты', go: 'contacts' }, tags: ['call'], children: ui.list([
      contactRow(contacts.mama), contactRow(contacts.andrey), contactRow(contacts.lyosha),
    ]) }),
    /* Будильник */
    ui.section({ className: 'is-filtered-out', tags: ['alarm'], children: ui.list([
      ui.row({ lead: ico('alarm-clock', true), title: `${alarm.time} · ${alarm.days}`, sub: `${tones[alarm.tone].title} · громче постепенно`, go: 'alarm', label: `Будильник ${alarm.time}` }),
    ]) }),
    ui.section({ title: 'Будильник', meta: tones[picks.alarm].title, className: 'is-filtered-out', tags: ['alarm'], children: toneList('alarm') }),
    /* Сообщения */
    ui.section({ title: kind('msg').title, meta: tones[picks.msg].title, className: 'is-filtered-out', tags: ['msg'], children: toneList('msg') }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home', mini: MINI }),
});
