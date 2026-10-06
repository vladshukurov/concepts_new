import { THEME, dish } from './_shared.mjs';
import { own } from '../model.mjs';

/* Своё блюдо целиком: кадры, что поменяла, как повторить — и отправить Жанне, если нужен совет */
export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Блюдо', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с блюдом', menu: ['Изменить', 'Отправить Жанне>direct-zhanna', 'Удалить'] }) }),
    ui.scroll([
      ui.entry({ icon: 'utensils', title: own.dish.title, meta: `${own.dish.when} · готовила ${own.dish.times} раз`, text: own.dish.text, photos: own.dish.photos, attach: dish(ui, own.dish.title, '55 минут · мой рецепт') }),
      ui.section({ title: 'Как повторить', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '01' }), title: 'Груши дольками', sub: 'Сбрызнуть лимоном, чтобы не темнели' }),
        ui.row({ lead: ui.leadIcon('', { text: '02' }), title: 'Сахара вдвое меньше', sub: 'Мёд — только в груши' }),
        ui.row({ lead: ui.leadIcon('', { text: '03' }), title: 'Печь 40 минут при 180°', sub: 'На 25-й минуте накрыть фольгой' }),
      ]) }),
      ui.section({ title: 'Когда готовила', children: ui.list([
        ui.row({ lead: ui.leadIcon('calendar'), title: 'Вчера, для мамы', sub: 'Мягкий, но груш мало' }),
        ui.row({ lead: ui.leadIcon('calendar'), title: '2 сентября', sub: 'Пересушила на 5 минут' }),
      ]) }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Открыть рецепт', block: true, go: 'recipe', primary: true }),
          ui.button({ label: 'Спросить Жанну', icon: 'message-circle', variant: 'secondary', block: true, go: 'direct-zhanna' }),
        ]),
      ] }),
    ]),
  ],
});
