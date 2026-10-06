import { THEME, TABS } from './_shared.mjs';
import { people } from '../model.mjs';

/* Контакты — своя вкладка, как в Telegram: люди из поездок по последнему визиту, адресная книга — по кнопке */
export default (ui) => ui.screen({
  id: 'contacts', theme: THEME,
  body: ui.scroll([
      ui.largeTitle('Контакты', ui.iconButton({ icon: 'user-plus', label: 'Добавить контакт', go: 'invite' })),
      ui.section({ children: ui.search({ placeholder: 'Имя или номер' }) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('link', { round: true, accent: true }), title: 'Пригласить в «Сбор»', sub: 'Ссылка на вход в поездку', go: 'invite' }),
      ]) }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Найти знакомых из контактов', icon: 'users', variant: 'secondary', block: true, ask: 'contacts|contacts|contacts', primary: true })]),
        ui.denied('contacts'),
      ] }),
      ui.section({ title: 'Уже в «Сборе»', meta: '23', shownAfter: 'contacts', children: ui.list([
        ui.row({ lead: ui.avatar('АК'), title: 'Антон Карпов', sub: 'в контактах «Антон велик» · был вчера' }),
        ui.row({ lead: ui.avatar('ЕС'), title: 'Евгения Смолина', sub: 'в контактах «Женя работа» · в сети' }),
        ui.row({ lead: ui.avatar('ПВ'), title: 'Павел Воронцов', sub: 'в контактах «Паша Алтай» · общая поездка в августе' }),
      ]) }),
      ui.section({ title: 'Пригласить', meta: '41', shownAfter: 'contacts', children: ui.list([
        ui.row({ lead: ui.avatar(people.dasha.initial), title: people.dasha.name, sub: '+7 916 ••• 48 12', end: { value: 'Ссылка', toast: 'Ссылка на поездку отправлена Даше', label: `Пригласить: ${people.dasha.name}` } }),
        ui.row({ lead: ui.avatar('ГТ'), title: 'Глеб Тарасов', sub: '+7 925 ••• 07 33', end: { value: 'Ссылка', toast: 'Ссылка на поездку отправлена Глебу', label: 'Пригласить: Глеб Тарасов' } }),
      ]) }),
      ui.section({ title: 'Из поездок · по последнему визиту', meta: '27', children: ui.list([
        ui.row({ lead: ui.avatar(people.marat.initial), title: people.marat.name, sub: 'Казань · Алтай', go: 'chat' }),
        ui.row({ lead: ui.avatar(people.lena.initial), title: people.lena.name, sub: 'Казань · Псков · Калининград', go: 'lena' }),
        ui.row({ lead: ui.avatar(people.igor.initial), title: people.igor.name, sub: 'Казань · Алтай · Выборг' }),
        ui.row({ lead: ui.avatar(people.rustam.initial), title: people.rustam.name, sub: 'Казань' }),
        ui.row({ lead: ui.avatar(people.oleg.initial), title: people.oleg.name, sub: 'Казань · Калининград' }),
        ui.row({ lead: ui.avatar(people.sveta.initial), title: people.sveta.name, sub: 'Казань' }),
        ui.row({ lead: ui.avatar('ПВ'), title: 'Павел Воронцов', sub: 'Алтай · был вчера' }),
        ui.row({ lead: ui.avatar('ТЕ'), title: 'Таня Ершова', sub: 'Калининград · Выборг' }),
        ui.row({ lead: ui.avatar(people.ildar.initial), title: people.ildar.name, sub: 'Казань' }),
        ui.row({ lead: ui.avatar('МС'), title: 'Миша Соколов', sub: 'Алтай · в сети' }),
        ui.row({ lead: ui.avatar(people.vera.initial), title: people.vera.name, sub: 'Казань · Выборг' }),
        ui.row({ lead: ui.avatar('ЕГ'), title: 'Егор Гусев', sub: 'Калининград · был 3 дня назад' }),
        ui.row({ lead: ui.avatar(people.alina.initial), title: people.alina.name, sub: 'Казань · вступила по ссылке' }),
      ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'contacts' }),
});
