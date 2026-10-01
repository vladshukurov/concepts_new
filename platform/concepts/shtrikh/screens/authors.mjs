import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'authors', theme: THEME,
  body: [
    ui.nav({ title: 'Авторы' }),
    ui.scroll([
      ui.section({ children: [ui.search({ placeholder: 'Имя или псевдоним' }), ui.actions([ui.button({ label: 'Найти среди контактов', icon: 'users', variant: 'secondary', block: true, ask: 'contacts|authors|authors', primary: true })], { className: 'sh-gap' })] }),
      ui.granted('contacts', 'Трое из ваших контактов рисуют в «Штрихе»'),
      ui.denied('contacts', 'Ищите авторов по имени'),
      ui.section({ title: 'Знакомые', children: ui.list(['petr', 'alina', 'misha', 'lera'].map((k) =>
        ui.row({ lead: ui.avatar(people[k].initial), title: people[k].name, sub: people[k].about, go: 'profile' }))) }),
    ]),
  ],
});
