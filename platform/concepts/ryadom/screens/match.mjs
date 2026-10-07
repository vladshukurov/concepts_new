import { THEME } from './_shared.mjs';
import { longrun } from '../model.mjs';

/* Позвать на лонгран: книга сверяется на устройстве, видно, кто уже бегает с клубом */
const found = [
  ['ЛК', 'Людмила Ковалёва', 'В клубе · бегает по четвергам'],
  ['МГ', 'Максим Громов', 'В книге «Максим вело» · не в клубе'],
  ['ЕС', 'Елена Сон', 'В клубе · утренняя группа с весны'],
];
const call = (name) => ({ value: 'Позвать', toast: `${name.split(' ')[0]} получит приглашение`, label: `Позвать: ${name}` });
export default (ui) => ui.screen({
  id: 'match', theme: THEME,
  body: [
    ui.nav({ title: 'Позвать на лонгран' }),
    ui.scroll([
      ui.section({ children: ui.list([ui.row({ lead: ui.leadIcon('calendar', { accent: true }), title: `${longrun.title} · ${longrun.start}`, sub: `Свободно ${longrun.spots - longrun.confirmed} мест · темп ${longrun.pace}` })]) }),
      ui.section({ title: 'Из контактов', meta: String(found.length), children: ui.list(found.map(([ini, name, sub]) => ui.row({ lead: ui.avatar(ini), title: name, sub, end: call(name) }))) }),
      ui.section({ children: ui.actions([ui.button({ label: `Позвать всех ${found.length}`, block: true, toast: `Приглашения отправлены · ${found.length}|meetup`, primary: true })]) }),
    ]),
  ],
});
