import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'matches', theme: THEME,
  body: [
    ui.nav({ title: 'Знакомые во «Вкусно»' }),
    ui.scroll([
      ui.section({ title: 'Нашли', meta: '3', children: ui.list([
        ui.row({ lead: ui.avatar('ЛО'), title: 'Лена Орлова', sub: 'В контактах «Лена соседка»', end: { value: 'Написать', toast: 'Чат с Леной создан|chats', label: 'Написать Лене' } }),
        ui.row({ lead: ui.avatar('МС'), title: 'Марат Сафиуллин', sub: 'В контактах «Марат работа» · готовит быстро', end: { value: 'Написать', toast: 'Чат с Маратом создан|chats', label: 'Написать Марату' } }),
        ui.row({ lead: ui.avatar('ИЧ'), title: 'Ира Чен', sub: 'В контактах «Ира Чен»', end: { value: 'Написать', toast: 'Чат с Ирой создан|chats', label: 'Написать Ире' } }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Пригласить по ссылке', icon: 'link', variant: 'secondary', block: true, go: 'invite', primary: true })]) }),
    ]),
  ],
});
