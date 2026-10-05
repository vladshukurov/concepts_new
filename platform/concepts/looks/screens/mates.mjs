import { THEME, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'mates', theme: THEME,
  body: [
    ui.nav({ title: 'Контакты в «Образах»' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Имя или ник' }) }),
      ui.denied('contacts'),
      ui.section({ title: 'Уже здесь', meta: '12', children: ui.list([
        ui.row({ thumb: `${P.lera} is-round`, title: 'Лера Савина', sub: '18 общих подписок', end: { value: 'Написать', go: 'chat', label: 'Написать Лере' }, go: 'post' }),
        ui.row({ thumb: `${P.yulia} is-round`, title: 'Юля Карпова', sub: '12 общих подписок', end: { value: 'Подписаться', toast: 'Вы подписались на Юлю', label: 'Подписаться на Юлю' }, go: 'clip' }),
        ui.row({ thumb: `${P.mark} is-round`, title: 'Марк Зотов', sub: '9 общих подписок', end: { value: 'Подписаться', toast: 'Вы подписались на Марка', label: 'Подписаться на Марка' } }),
      ]) }),
      ui.section({ title: 'Пригласить', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: 'ОТ', round: true }), title: 'Оля Тимченко', sub: '+7 921 ··· 44 17', end: { value: 'Пригласить', toast: 'Приглашение отправлено', label: 'Пригласить Олю' } }),
        ui.row({ lead: ui.leadIcon('', { text: 'КР', round: true }), title: 'Ксения Раух', sub: '+7 981 ··· 51 03', end: { value: 'Пригласить', toast: 'Приглашение отправлено', label: 'Пригласить Ксению' } }),
      ]) }),
    ]),
  ],
});
