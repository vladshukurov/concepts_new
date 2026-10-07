import { THEME, face } from './_shared.mjs';
import { people, swap } from '../model.mjs';

/* Позвать конкретного человека на конкретный своп: из книги — кто уже в «Вешалке», кого пригласить ссылкой */
export default (ui) => ui.screen({
  id: 'mates', theme: THEME,
  body: [
    ui.nav({ title: 'Позвать на своп' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Имя или номер' }) }),
      ui.denied('contacts'),
      ui.section({ title: 'Уже в «Вешалке»', meta: '6', children: ui.list([
        ui.row({ ...face(ui, 'yura'), title: people.yura.name, sub: 'Уже идёт · отметился в 9:35', go: 'chat-yura' }),
        ui.row({ ...face(ui, 'mark'), title: people.mark.name, sub: 'Уже идёт · принёс два пальто', go: 'chat-mark' }),
        ui.row({ lead: ui.avatar('АБ'), title: 'Аня Белова', sub: 'Уже на свопе · с 9:38' }),
        ui.row({ lead: ui.avatar('ТК'), title: 'Таня Ким', sub: 'Была на 3 свопах', end: { value: 'Позвать', toast: 'Таня позвана', label: 'Позвать Таню' } }),
        ui.row({ lead: ui.avatar('НГ'), title: 'Ника Гаврилова', sub: 'Шьёт сама · уже на свопе' }),
        ui.row({ lead: ui.avatar('ВМ'), title: 'Вера Миронова', sub: 'Последний раз в марте', end: { value: 'Позвать', toast: 'Вера позвана', label: 'Позвать Веру' } }),
      ]) }),
      ui.section({ title: 'Пригласить ссылкой', meta: swap.place, children: ui.list([
        ui.row({ ...face(ui, 'olya'), title: people.olya.name, sub: '+7 921 ··· 44 17', end: { value: 'Пригласить', toast: 'Оля приглашена|swap', label: 'Пригласить Олю' } }),
        ui.row({ lead: ui.avatar('КР'), title: 'Ксения Раух', sub: '+7 981 ··· 51 03', end: { value: 'Пригласить', toast: 'Ксения приглашена', label: 'Пригласить Ксению' } }),
        ui.row({ lead: ui.avatar('ПИ'), title: 'Полина Ильина', sub: '+7 911 ··· 08 62', end: { value: 'Пригласить', toast: 'Полина приглашена', label: 'Пригласить Полину' } }),
      ]) }),
    ]),
  ],
});
