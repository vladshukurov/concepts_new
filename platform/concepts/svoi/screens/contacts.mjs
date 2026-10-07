import { THEME, TABS } from './_shared.mjs';
import { people } from '../model.mjs';

/* Контакты — своя вкладка, как в Telegram: семья и близкие сверху, адресная книга — по кнопке */
export default (ui) => ui.screen({
  id: 'contacts', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Контакты', ui.iconButton({ icon: 'user-plus', label: 'Добавить контакт', menu: ['По номеру телефона=Новый контакт: имя и номер', 'Пригласить ссылкой>invite'] })),
    ui.section({ children: ui.search({ placeholder: 'Имя или номер' }) }),
    ui.section({ children: [
      ui.list([
        ui.row({ lead: ui.leadIcon('users', { round: true, accent: true }), title: 'Найти родных из контактов', sub: 'Кто из адресной книги уже здесь', ask: 'contacts|contacts|contacts', primary: true }),
        ui.row({ lead: ui.leadIcon('link', { round: true, accent: true }), title: 'Пригласить в «Все дома»', sub: 'Ссылка в чат семьи', go: 'invite' }),
      ]),
      ui.denied('contacts'),
    ] }),
    ui.section({ title: 'Уже здесь', meta: '14', shownAfter: 'contacts', children: ui.list([
      ui.row({ lead: ui.avatar('РГ'), title: 'Рустем Гарипов', sub: 'в контактах «Рустем брат Тимура» · был вчера' }),
      ui.row({ lead: ui.avatar('ЛХ'), title: 'Лилия Хабибуллина', sub: 'в контактах «Лиля сестра» · в сети' }),
      ui.row({ lead: ui.avatar('ЭХ'), title: 'Эльмира Хасанова', sub: 'в контактах «Эля крёстная» · была 2 дня назад' }),
    ]) }),
    ui.section({ title: 'Пригласить', meta: '38', shownAfter: 'contacts', children: ui.list([
      ui.row({ lead: ui.avatar(people.galya.initial), title: people.galya.name, sub: '+7 917 ••• 22 48', end: { value: 'Ссылка', toast: 'Ссылка в чат семьи отправлена Галине', label: `Пригласить: ${people.galya.name}` } }),
      ui.row({ lead: ui.avatar('НГ'), title: 'Нияз Гарипов', sub: '+7 927 ••• 05 19', end: { value: 'Ссылка', toast: 'Ссылка отправлена Ниязу', label: 'Пригласить: Нияз Гарипов' } }),
    ]) }),
    ui.section({ title: 'Семья и близкие', meta: '9', children: ui.list([
      ui.row({ lead: ui.avatar(people.timur.initial), title: people.timur.name, sub: 'муж · был в 16:01', go: 'timur' }),
      ui.row({ lead: ui.avatar(people.roza.initial), title: people.roza.name, sub: 'мама · в сети', go: 'mama' }),
      ui.row({ lead: ui.avatar(people.danya.initial), title: people.danya.name, sub: 'сын · дома', go: 'danya' }),
      ui.row({ lead: ui.avatar(people.mila.initial), title: people.mila.name, sub: 'дочь · пишет голосовыми' }),
      ui.row({ lead: ui.avatar(people.oksana.initial), title: people.oksana.name, sub: 'няня · была в 15:34' }),
      ui.row({ lead: ui.avatar(people.teacher.initial), title: 'Марина Сергеевна Котова', sub: 'классный руководитель 5 «Б»' }),
      ui.row({ lead: ui.avatar('ИП'), title: 'Ирина Павловна', sub: 'студия «Акварель» · педагог Милы' }),
      ui.row({ lead: ui.avatar(people.lena.initial), title: people.lena.name, sub: 'мама Артёма · 5 «Б»' }),
      ui.row({ lead: ui.avatar(people.igor.initial), title: people.igor.name, sub: 'папа Вики · 5 «Б»' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'contacts' }),
});
