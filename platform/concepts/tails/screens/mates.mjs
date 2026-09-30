import { THEME, PET } from './_shared.mjs';

const follow = { value: 'Подписаться' };
export default (ui) => ui.screen({
  id: 'mates', theme: THEME,
  body: [
    ui.nav({ title: 'Друзья из контактов' }),
    ui.scroll([
      ui.denied('contacts', 'Без контактов остаются поиск по кличке и ссылка-приглашение'),
      ui.section({ children: ui.search({ placeholder: 'Кличка или имя' }) }),
      ui.section({ title: 'Совпадения', meta: '9 из 214', children: ui.list([
        ui.row({ thumb: `${PET.barni} is-round`, title: 'Влада · Барни, лабрадор', sub: '12 общих прогулок', end: { value: 'взаимно' } }),
        ui.row({ thumb: `${PET.truffle} is-round`, title: 'Ксения · Трюфель', sub: 'Ретривер · 8 общих прогулок', end: { value: 'взаимно' } }),
        ui.row({ thumb: `${PET.loki} is-round`, title: 'Марат · Локи, шпиц', sub: '5 общих прогулок', end: { ...follow, toast: 'Подписка оформлена', label: 'Подписаться на Марата' } }),
        ui.row({ thumb: `${PET.mint} is-round`, title: 'Илья · Мята, кошка', sub: '3 общих прогулки', end: { ...follow, toast: 'Подписка оформлена', label: 'Подписаться на Илью' } }),
        ui.row({ thumb: 'ph is-round', title: 'Ещё 4 совпадения', sub: 'Сортировка по общим прогулкам', toast: 'Показаны все 9 совпадений' }),
      ]) }),
      ui.section({ title: 'Пригласить', children: ui.list([
        ui.row({ thumb: 'ph is-round', title: 'Оля Тимченко', sub: '+7 921 ··· 44 17', end: { value: 'Пригласить', toast: 'Приглашение отправлено', label: 'Пригласить Олю' } }),
        ui.row({ thumb: 'ph is-round', title: 'Сергей Панов', sub: 'Приглашение ушло 3 дня назад', end: { value: 'отправлено' } }),
        ui.row({ lead: `<span class="tl-nearby-ico">${ui.icon('link')}</span>`, title: 'Ссылка-приглашение', sub: 'tails.social/i/vlada · 9 переходов', toast: 'Ссылка скопирована' }),
      ]) }),
    ]),
  ],
});
