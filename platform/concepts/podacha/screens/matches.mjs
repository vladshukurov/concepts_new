import { THEME } from './_shared.mjs';

const follow = (name) => ({ value: 'Подписаться', toast: 'Вы подписались', label: `Подписаться: ${name}` });
export default (ui) => ui.screen({
  id: 'matches', theme: THEME,
  body: [
    ui.nav({ title: 'Знакомые в «Подаче»' }),
    ui.scroll([
      ui.section({ title: 'Нашли', meta: '3', children: ui.list([
        ui.row({ lead: ui.avatar('ЛО'), title: 'Лена Орлова', sub: '3 общих автора', end: follow('Лена Орлова') }),
        ui.row({ lead: ui.avatar('МС'), title: 'Марат Сафиуллин', sub: '7 общих авторов · быстрые ужины', end: follow('Марат Сафиуллин') }),
        ui.row({ lead: ui.avatar('ИЧ'), title: 'Ира Чен', sub: '2 общих автора · сезонная кухня', end: follow('Ира Чен') }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Пригласить по ссылке', icon: 'link', variant: 'secondary', block: true, go: 'invite', primary: true })]) }),
    ]),
  ],
});
