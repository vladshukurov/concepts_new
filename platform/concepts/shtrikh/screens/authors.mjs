import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'authors', theme: THEME,
  body: [
    ui.nav({ title: 'Знакомые' }),
    ui.scroll([
      ui.section({ children: [ui.search({ placeholder: 'Имя или псевдоним' }), ui.actions([ui.button({ label: 'Найти среди контактов', icon: 'users', variant: 'secondary', block: true, ask: 'contacts|authors|authors', primary: true })], { className: 'sh-gap' })] }),
      ui.denied('contacts'),
      ui.section({ title: 'Из ваших контактов', meta: '2', shownAfter: 'contacts', children: ui.list([
        ui.row({ lead: ui.avatar('ПИ'), title: 'Пётр Ильин', sub: 'В контактах «Петя» · был на встрече в июле', go: 'profile' }),
        ui.row({ lead: ui.avatar('ДС'), title: 'Дина Сагиева', sub: 'В контактах «Дина акварель»', end: { value: 'Позвать', toast: 'Приглашение на встречу отправлено Дине', label: 'Позвать Дину' } }),
      ]) }),
      ui.section({ title: 'Рисуем вместе', children: ui.list(['petr', 'alina', 'misha', 'lera'].map((k) =>
        ui.row({ lead: ui.avatar(people[k].initial), title: people[k].name, sub: people[k].about, go: 'profile' }))) }),
    ]),
  ],
});
