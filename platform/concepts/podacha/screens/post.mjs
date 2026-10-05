import { THEME, dish } from './_shared.mjs';
import { people } from '../model.mjs';

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
        ui.denied('photosadd'),
      ] }),
      ui.comments({ count: 18, items: [
        { initial: people.amina.initial, name: people.amina.name, text: 'Тахини какое брали — светлое или из обжаренного кунжута?', time: '12:40', likes: 4 },
        { initial: people.zhanna.initial, name: people.zhanna.name, text: 'Светлое, две столовые ложки. С тёмным суп горчит', time: '12:52', likes: 6, reply: true, author: true },
        { initial: people.timur.initial, name: people.timur.name, text: 'Сварил вчера на четверых, перец пёк в аэрогриле 12 минут — нормально', time: '14:09', liked: true, likes: 11 },
      ] }),
    ]),
    ui.composer({ placeholder: 'Комментарий', attach: { label: 'Прикрепить', menu: ['Камера>camera', 'Фото>picker'] }, send: { toast: 'Комментарий отправлен' } }),
  ],
});
