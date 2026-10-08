import { contactScreen } from './_shared.mjs';
import { contacts, reminder } from '../model.mjs';

/* Бабушка: своей мелодии ещё нет, через неделю день рождения — напомнить поставить */
const c = contacts.babushka;
export default (ui) => contactScreen(ui, c, {
  actions: [ui.section({ children: ui.list([
    ui.reminder({ title: 'Напомнить поставить мелодию', titleGranted: `Напомним ${reminder.day} в ${reminder.time}`, sub: `ко дню рождения бабушки ${c.birthday}`, here: 'babushka' }),
  ]) })],
  extra: [ui.infoRows([['День рождения', c.birthday], ['Последний звонок', 'воскресенье, 12:30']])],
});
