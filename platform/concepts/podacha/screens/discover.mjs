import { THEME } from './_shared.mjs';

/* Поиск по своему дневнику: блюда, рецепты и заметки самой Саши */
export default (ui) => ui.screen({
  id: 'discover', theme: THEME,
  body: [
    ui.nav({ title: 'Поиск' }),
    ui.scroll([
      ui.section({ children: ui.search({ value: 'груш', clear: { toast: 'Запрос очищен' } }) }),
      ui.section({ title: 'Рецепты', meta: '2', children: ui.list([
        ui.row({ lead: ui.leadIcon('book-open'), title: 'Грушевый пирог', sub: '55 минут · пекла 6 раз', go: 'recipe', primary: true }),
        ui.row({ lead: ui.leadIcon('book-open'), title: 'Салат с грушей и сыром', sub: '10 минут · ещё не готовила' }),
      ]) }),
      ui.section({ title: 'Записи', children: ui.list([
        ui.row({ lead: ui.leadIcon('utensils'), title: 'Грушевый пирог', sub: 'Вчера, 18:40 · 2 фото', go: 'post' }),
        ui.row({ lead: ui.leadIcon('mic'), title: 'Груши брать твёрдые', sub: 'Голосовая заметка · 2 сентября · 0:14' }),
        ui.row({ lead: ui.leadIcon('shopping-basket'), title: 'Покупки к выходным', sub: 'Груши · 1 кг — куплено' }),
      ]) }),
    ]),
  ],
});
