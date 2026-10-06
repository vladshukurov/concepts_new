import { THEME } from './_shared.mjs';

/* Знакомые — люди, с которыми готовят вместе по звонку и переписываются */
export default (ui) => ui.screen({
  id: 'following', theme: THEME,
  body: [
    ui.nav({ title: 'Знакомые' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Имя или номер' }) }),
      ui.section({ title: 'Готовим вместе', meta: '3', children: ui.list([
        ui.row({ lead: ui.avatar('ЖК'), title: 'Жанна Ким', sub: 'Супы · 4 ужина вместе', go: 'direct-zhanna' }),
        ui.row({ lead: ui.avatar('ТС'), title: 'Тимур Садыков', sub: 'Тесто · прислал хачапури в понедельник', go: 'direct-timur' }),
        ui.row({ lead: ui.avatar('АР'), title: 'Амина Рахимова', sub: 'Ведёт ужин сегодня в 19:00', go: 'cookalong' }),
      ]) }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Найти знакомых', icon: 'user-plus', variant: 'secondary', block: true, ask: 'contacts|matches|following', primary: true })]),
        ui.denied('contacts'),
      ] }),
    ]),
  ],
});
