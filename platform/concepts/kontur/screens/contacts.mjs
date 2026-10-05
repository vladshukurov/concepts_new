import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'contacts', theme: THEME,
  body: [
    ui.nav({ title: 'Знакомые фотографы' }),
    ui.scroll([
      ui.section({ children: [ui.search({ placeholder: 'Имя или псевдоним' }), ui.actions([ui.button({ label: 'Найти в контактах', icon: 'users', block: true, primary: true, ask: 'contacts|contacts|contacts' })])] }),
      ui.denied('contacts'),
      ui.section({ title: 'В Контуре', meta: '18', children: ui.list([
        ui.row({ lead: ui.avatar('РМ'), title: 'Ренат Мусин', sub: '2 общих · снимает Бостандык', go: 'photographer' }),
        ui.row({ lead: ui.avatar('ЛВ'), title: 'Лиза Вэй', sub: 'Lab-Red · партия в очереди', go: 'photographer' }),
        ui.row({ lead: ui.avatar('ИК'), title: 'Илья Ким', sub: '1 общая прогулка · Медеу', go: 'photographer' }),
        ui.row({ lead: ui.avatar('МО'), title: 'Малика Омарова', sub: 'Нашлась по псевдониму · 7 листов', go: 'photographer' }),
      ]) }),
    ]),
  ],
});
