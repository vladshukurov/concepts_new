import { THEME, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'mates', theme: THEME,
  body: [
    ui.nav({ title: 'Контакты в «Вешалке»' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Имя или ник' }) }),
      ui.denied('contacts'),
      ui.section({ title: 'Уже здесь', meta: '12', children: ui.list([
        ui.row({ thumb: `${P.lera} is-round`, title: 'Лера Савина', sub: 'Ведёт свопы · Петроградская', end: { value: 'Написать', go: 'chat', label: 'Написать Лере' }, go: 'chat' }),
        ui.row({ thumb: `${P.yulia} is-round`, title: 'Юра Карпов', sub: 'Был на 3 свопах', end: { value: 'Написать', go: 'chat', label: 'Написать Юре' }, go: 'chat' }),
        ui.row({ thumb: `${P.mark} is-round`, title: 'Марк Зотов', sub: 'Коломна · пишет о дениме', end: { value: 'Написать', go: 'chat', label: 'Написать Марку' } }),
        ui.row({ lead: ui.leadIcon('', { text: 'АБ', round: true }), title: 'Аня Белова', sub: 'Тоже идёт на своп в субботу', end: { value: 'Написать', go: 'chat', label: 'Написать Ане' } }),
        ui.row({ lead: ui.leadIcon('', { text: 'НГ', round: true }), title: 'Ника Гаврилова', sub: 'Шьёт сама · 2 вещи на свопе' }),
      ]) }),
      ui.section({ title: 'Пригласить', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: 'ОТ', round: true }), title: 'Оля Тимченко', sub: '+7 921 ··· 44 17', end: { value: 'Пригласить', toast: 'Приглашение отправлено', label: 'Пригласить Олю' } }),
        ui.row({ lead: ui.leadIcon('', { text: 'КР', round: true }), title: 'Ксения Раух', sub: '+7 981 ··· 51 03', end: { value: 'Пригласить', toast: 'Приглашение отправлено', label: 'Пригласить Ксению' } }),
        ui.row({ lead: ui.leadIcon('', { text: 'ВМ', round: true }), title: 'Вера Миронова', sub: '+7 911 ··· 08 62', end: { value: 'Пригласить', toast: 'Приглашение отправлено', label: 'Пригласить Веру' } }),
      ]) }),
    ]),
  ],
});
