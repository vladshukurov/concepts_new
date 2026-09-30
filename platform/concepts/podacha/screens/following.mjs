import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'following', theme: THEME,
  body: [
    ui.nav({ title: 'Подписки' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Имя или ссылка на автора' }) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.avatar('ЖК'), title: 'Жанна Ким', sub: 'Простые супы · 18 проверенных блюд', go: 'direct-zhanna' }),
        ui.row({ lead: ui.avatar('ТС'), title: 'Тимур Садыков', sub: 'Тесто и сковорода · 41 публикация', go: 'direct-timur' }),
        ui.row({ lead: ui.avatar('АР'), title: 'Амина Рахимова', sub: 'Ужины вместе · ведёт сегодня', go: 'cookalong' }),
      ]) }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Найти знакомых', icon: 'user-plus', variant: 'secondary', block: true, ask: 'contacts|matches|following', primary: true })]),
        ui.denied('contacts', 'Контакты закрыты — ищите авторов по имени или ссылке'),
      ] }),
    ]),
  ],
});
