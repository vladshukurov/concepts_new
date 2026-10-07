import { THEME, TABS } from './_shared.mjs';
import { people, regent, choir } from '../model.mjs';

/* Контакты — своя вкладка, как в Telegram: хор по партиям, адресная книга — по кнопке */
const p = people;
export default (ui) => ui.screen({
  id: 'contacts', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Контакты', ui.iconButton({ icon: 'user-plus', label: 'Ссылка-приглашение', go: 'invite' })),
    ui.section({ children: ui.search({ placeholder: 'Имя или номер' }) }),
    ui.section({ children: [
      ui.list([
        ui.row({ lead: ui.leadIcon('users', { round: true, accent: true }), title: 'Найти хористов из контактов', sub: 'Кто из адресной книги уже в «В унисон»', ask: 'contacts|contacts|contacts', primary: true }),
        ui.row({ lead: ui.leadIcon('link', { round: true, accent: true }), title: 'Пригласить в хор', sub: 'Ссылка-приглашение новичку', go: 'invite' }),
      ]),
      ui.denied('contacts'),
    ] }),
    ui.section({ title: 'Уже в «В унисон»', meta: '14', shownAfter: 'contacts', children: ui.list([
      ui.row({ lead: ui.avatar(p.marina.initial), title: p.marina.name, sub: 'в контактах «Марина хор» · альт' }),
      ui.row({ lead: ui.avatar(p.kostya.initial), title: p.kostya.name, sub: 'в контактах «Костя тенор» · был в 17:40' }),
      ui.row({ lead: ui.avatar('ЕС'), title: 'Евгения Смолина', sub: 'в контактах «Женя работа» · поёт в хоре «Лира»' }),
    ]) }),
    ui.section({ title: 'Пригласить', meta: '38', shownAfter: 'contacts', children: ui.list([
      ui.row({ lead: ui.avatar('ГТ'), title: 'Глеб Тарасов', sub: '+7 925 ••• 07 33', end: { value: 'Ссылка', toast: 'Ссылка-приглашение отправлена Глебу', label: 'Пригласить: Глеб Тарасов' } }),
      ui.row({ lead: ui.avatar('НВ'), title: 'Нина Воронцова', sub: '+7 916 ••• 48 12', end: { value: 'Ссылка', toast: 'Ссылка-приглашение отправлена Нине', label: 'Пригласить: Нина Воронцова' } }),
    ]) }),
    ui.section({ title: `${choir.name} · по партиям`, meta: String(choir.people + 1), children: ui.list([
      ui.row({ lead: ui.avatar(regent.initial), title: regent.name, sub: 'регент', go: 'regent' }),
      ui.row({ lead: ui.avatar(p.lena.initial), title: p.lena.name, sub: 'сопрано · в сети' }),
      ui.row({ lead: ui.avatar(p.dasha.initial), title: p.dasha.name, sub: 'сопрано · вступила по ссылке' }),
      ui.row({ lead: ui.avatar(p.vera.initial), title: p.vera.name, sub: 'альт · в сети' }),
      ui.row({ lead: ui.avatar(p.anya.initial), title: p.anya.name, sub: 'альт · в сети' }),
      ui.row({ lead: ui.avatar(p.yulia.initial), title: p.yulia.name, sub: 'альт · была в 17:31' }),
      ui.row({ lead: ui.avatar(p.timur.initial), title: p.timur.name, sub: 'тенор · в сети' }),
      ui.row({ lead: ui.avatar(p.denis.initial), title: p.denis.name, sub: 'бас · староста' }),
      ui.row({ lead: ui.avatar(p.oleg.initial), title: p.oleg.name, sub: 'бас · в пути' }),
      ui.row({ lead: ui.avatar(p.sergey.initial), title: p.sergey.name, sub: 'бас · в сети' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'contacts' }),
});
