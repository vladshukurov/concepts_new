import { THEME, TABS, MINI, ico } from './_shared.mjs';
import { me, tones, picks, alarm, records, ORDER } from '../model.mjs';

/* Профиль: что сейчас стоит на звонке, будильнике и сообщениях, свои разделы и настройки */
const call = tones[picks.call];
const wake = tones[picks.alarm];
const msg = tones[picks.msg];
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: [
    ui.scroll([
      ui.largeTitle('Профиль', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
      `<div class="md-me">${ui.avatar(me.initial, { large: true })}<h1 class="ui-title">${me.name}</h1><p class="ui-sub">свои мелодии с августа</p></div>`,
      ui.stats([[ORDER.length, 'мелодий'], [3, 'контакта'], [records.recorder + records.files, 'записей']]),
      ui.section({ title: 'Сейчас стоит', children: ui.list([
        ui.row({ lead: ico('phone-incoming', true), title: `Звонок · ${call.title}`, sub: `${call.len} с из «${call.rec}»`, go: call.id }),
        ui.row({ lead: ico('alarm-clock', true), title: `Будильник ${alarm.time} · ${wake.title}`, sub: 'по будням, громче постепенно', go: wake.id }),
        ui.row({ lead: ico('message-circle', true), title: `Сообщения · ${msg.title}`, sub: `${msg.len} с, без затухания`, go: msg.id }),
      ]) }),
      ui.section({ title: 'Моё', children: ui.list([
        ui.row({ lead: ico('users'), title: 'Контакты', sub: 'у трёх своя мелодия, у бабушки скоро день рождения', go: 'contacts' }),
        ui.row({ lead: ico('mic'), title: 'Записи', sub: `${records.recorder} из «Диктофона», ${records.files} из «Файлов»`, go: 'records' }),
        ui.row({ lead: ico('alarm-clock'), title: 'Будильник', sub: `${alarm.time} · ${alarm.days}`, go: 'alarm' }),
      ]) }),
    ], { root: true }),
  ],
  tabs: ui.tabBar({ items: TABS, active: 'profile', mini: MINI }),
});
