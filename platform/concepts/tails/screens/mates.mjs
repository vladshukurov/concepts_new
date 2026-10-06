import { THEME, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'mates', theme: THEME,
  body: [
    ui.nav({ title: 'Друзья из контактов' }),
    ui.scroll([
      ui.denied('contacts'),
      ui.section({ children: ui.search({ placeholder: 'Кличка или имя' }) }),
      ui.section({ title: 'Уже в «Выгуле»', meta: '8 из 214', children: ui.list([
        ui.row({ thumb: `${PET.barni} is-round`, title: 'Влада · Барни, лабрадор', sub: '12 прогулок вместе', go: 'chat' }),
                ui.row({ thumb: `${PET.loki} is-round`, title: 'Марат · Локи, шпиц', sub: '5 общих прогулок', end: { value: 'Позвать', toast: 'Приглашение на прогулку отправлено', label: 'Позвать Марата гулять' } }),
        ui.row({ thumb: `${PET.mint} is-round`, title: 'Алёна · Мята, кошка', sub: '3 общих прогулки', end: { value: 'Позвать', toast: 'Приглашение на прогулку отправлено', label: 'Позвать Алёну гулять' } }),
        ui.row({ lead: ui.leadIcon('users', { round: true }), title: 'Ещё 5 совпадений', sub: 'Сортировка по общим прогулкам', toast: 'Показаны все 8 совпадений' }),
      ]) }),
      ui.section({ title: 'Пригласить', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: 'ОТ', round: true }), title: 'Оля Тимченко', sub: '+7 921 ··· 44 17', end: { value: 'Пригласить', toast: 'Приглашение отправлено', label: 'Пригласить Олю' } }),
        ui.row({ lead: ui.leadIcon('', { text: 'СП', round: true }), title: 'Сергей Панов', sub: 'Приглашение ушло 3 дня назад', end: { value: 'отправлено' } }),
        ui.row({ lead: `<span class="tl-nearby-ico">${ui.icon('link')}</span>`, title: 'Ссылка-приглашение', sub: 'vygul.app/i/ksenia · 9 переходов', toast: 'Ссылка скопирована' }),
      ]) }),
    ]),
  ],
});
