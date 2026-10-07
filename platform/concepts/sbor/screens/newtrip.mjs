import { THEME } from './_shared.mjs';

/* Новая поездка: название, даты, кто едет; «Создать» открывает чат новой поездки */
export default (ui) => ui.screen({
  id: 'newtrip', theme: THEME,
  body: [
    ui.nav({ title: 'Новая поездка', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'Название', children: `<label class="ui-search"><input placeholder="Например, Псков · ноябрь" aria-label="Название поездки"/></label>` }),
      ui.section({ title: 'Даты', children: ui.list([
        ui.row({ lead: ui.leadIcon('calendar', { round: true, accent: true }), title: 'Даты поездки', sub: '6–8 ноября', toast: 'Даты выбираются в календаре' }),
      ]) }),
      ui.section({ title: 'Кто едет', children: [
        ui.usersStack({ faces: ['ЛК', 'ИЛ', 'МГ'], text: 'Лена, Игорь, Марат' }),
        ui.list([ui.row({ lead: ui.leadIcon('user-plus', { round: true, accent: true }), title: 'Добавить участников', sub: 'Из контактов или по ссылке', go: 'contacts' })]),
      ] }),
      ui.section({ children: ui.actions([ui.button({ label: 'Создать', block: true, go: 'tripnew', primary: true })]) }),
    ]),
  ],
});
