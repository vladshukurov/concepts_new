import { THEME, dish } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Публикация', trailing: ui.iconButton({ icon: 'bookmark', label: 'Сохранить в рецепты', toast: 'Сохранено в рецепты' }) }),
    ui.scroll([
      ui.post({ author: { initial: 'ЖК', name: 'Жанна Ким', meta: 'сегодня, 12:14 · Алматы', action: { go: 'direct-zhanna' } }, text: 'Тот самый чечевичный суп, но без сливок: перец запекла заранее, а вместо сливок добавила тахини', attach: dish(ui, 'Чечевичный суп', '35 минут · 6 ингредиентов'), likes: 126, comments: 18, shares: 9 }),
      ui.section({ title: 'Как повторить', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '01' }), title: 'Запечь сладкий перец до подпалин' }),
        ui.row({ lead: ui.leadIcon('', { text: '02' }), title: 'Томить чечевицу 18 минут' }),
        ui.row({ lead: ui.leadIcon('', { text: '03' }), title: 'Пробить с тахини и лимоном' }),
      ]) }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Открыть проверенный рецепт', block: true, go: 'recipe', primary: true }),
          ui.button({ label: 'Сохранить карточку в Фото', icon: 'download', variant: 'secondary', block: true, ask: 'photosadd|post|post' }),
        ]),
        ui.granted('photosadd', 'Карточка сохранена в Фото'),
        ui.denied('photosadd', 'Карточка остаётся в сохранённых рецептах'),
      ] }),
    ]),
  ],
});
