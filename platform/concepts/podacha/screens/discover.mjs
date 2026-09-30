import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'discover', theme: THEME,
  body: [
    ui.nav({ title: 'Поиск' }),
    ui.scroll([
      ui.section({ children: ui.search({ value: 'ужин за 20 минут', clear: { toast: 'Запрос очищен' } }) }),
      ui.section({ title: 'Авторы', children: ui.list([
        ui.row({ lead: ui.avatar('АР'), title: 'Амина Рахимова', sub: 'Простые ужины · 18 проверенных блюд', go: 'cookings' }),
        ui.row({ lead: ui.avatar('ЖК'), title: 'Жанна Ким', sub: 'Супы · 34 повтора за неделю', go: 'direct-zhanna' }),
      ]) }),
      ui.section({ title: 'Публикации', children: ui.list([
        ui.row({ lead: ui.leadIcon('utensils'), title: 'Ужин за 20 минут', sub: '42 публикации от знакомых авторов', go: 'post', primary: true }),
        ui.row({ lead: ui.leadIcon('chef-hat', { accent: true }), title: 'Готовим сегодня', sub: '3 открытые совместные готовки', go: 'cookings' }),
      ]) }),
    ]),
  ],
});
