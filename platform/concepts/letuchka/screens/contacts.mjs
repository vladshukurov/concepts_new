import { THEME, TABS } from './_shared.mjs';
import { people, inOffice, away } from '../model.mjs';

/* Контакты — своя вкладка, как в Telegram: коллеги студии по алфавиту, адресная книга — по кнопке */
const where = Object.fromEntries([...inOffice.map(([p, s]) => [p.name, `в офисе ${s.split(' · ')[0]}`]), ...away.map(([p, s]) => [p.name, s])]);
const team = Object.values(people).slice().sort((a, b) => a.name.localeCompare(b.name, 'ru'));
export default (ui) => ui.screen({
  id: 'contacts', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Контакты', ui.iconButton({ icon: 'user-plus', label: 'Ссылка-приглашение', go: 'invite' })),
    ui.section({ children: ui.search({ placeholder: 'Имя или номер' }) }),
    ui.section({ children: [
      ui.list([
        ui.row({ lead: ui.leadIcon('users', { round: true, accent: true }), title: 'Найти коллег из контактов', sub: 'Кто из адресной книги уже в «В курсе»', ask: 'contacts|contacts|contacts', primary: true }),
        ui.row({ lead: ui.leadIcon('link', { round: true, accent: true }), title: 'Пригласить в «В курсе»', sub: 'Ссылка новичку в чат проекта', go: 'invite' }),
      ]),
      ui.denied('contacts'),
    ] }),
    ui.section({ title: 'Уже в «В курсе»', meta: '9', shownAfter: 'contacts', children: ui.list([
      ui.row({ lead: ui.avatar('ЕС'), title: 'Евгений Смолин', sub: 'в контактах «Женя типография» · был вчера' }),
      ui.row({ lead: ui.avatar('ТК'), title: 'Таня Кравец', sub: 'в контактах «Таня, прошлая работа» · в сети' }),
      ui.row({ lead: ui.avatar('МО'), title: 'Марк Осипов', sub: 'в контактах «Марк Северная верфь» · клиент' }),
    ]) }),
    ui.section({ title: 'Пригласить', meta: '64', shownAfter: 'contacts', children: ui.list([
      ui.row({ lead: ui.avatar('ТЕ'), title: 'Тёма Ершов', sub: '+7 921 ••• 48 12 · иллюстратор, с завтра в проекте', end: { value: 'Ссылка', toast: 'Ссылка на чат проекта отправлена Тёме', label: 'Пригласить: Тёма Ершов' } }),
      ui.row({ lead: ui.avatar('ГТ'), title: 'Глеб Тарасов', sub: '+7 925 ••• 07 33', end: { value: 'Ссылка', toast: 'Ссылка отправлена Глебу', label: 'Пригласить: Глеб Тарасов' } }),
    ]) }),
    ui.section({ title: 'Студия «Полдень»', meta: String(team.length), children: ui.list(team.map((p) => ui.row({
      lead: ui.avatar(p.initial), title: p.name, sub: `${p.role} · ${where[p.name]}`,
      ...(p.name === 'Артём Шилов' ? { go: 'chat' } : p.name === 'Паша Ильин' ? { go: 'pasha' } : {}),
    }))) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'contacts' }),
});
