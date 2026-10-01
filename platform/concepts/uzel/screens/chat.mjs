import { THEME } from './_shared.mjs';
import { people, shift } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ initial: 'РВ', name: `Смена · ${shift.workshop}`, status: `Идёт · ${shift.start}–${shift.end}`, call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ from: `${people.pavel.name}`, text: `Места отмечены безопасными, стенд включён`, time: '19:08' }),
      ui.bubble({ from: `${people.irina.name}`, text: `Л‑74 на стенде, абажур держится. Нужен второй взгляд`, time: '19:30' }),
      ui.bubble({ out: true, text: 'Подойду через пять минут', time: '19:32', read: true }),
      ui.voice({ dur: '0:14', time: '19:44' }),
    ])),
    ui.denied('voip', 'Звонок смены выключен — пишите в чат'),
    ui.composer({ attach: { go: 'photos' }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
