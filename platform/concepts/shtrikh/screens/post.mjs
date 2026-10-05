import { THEME, tools } from './_shared.mjs';
import { people, places } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Зарисовка', trailing: ui.iconButton({ icon: 'bookmark', label: 'Сохранить', toast: 'Сохранено' }) }),
    ui.scroll([
      ui.post({ author: { initial: people.alina.initial, name: people.alina.name, meta: `сегодня в 18:24 · ${places.panfilova.name}`, action: { go: 'profile' } }, text: 'Поймала тень от липы до того, как включили фонари', media: 'sh-s2', attach: tools('Линер 0.3', 'Бумага 160 г', '20 минут'), likes: 146, comments: 18, shares: 7, views: '1,2K' }),
      ui.section({ children: ui.list([ui.row({ thumb: places.panfilova.art, title: `Серия места · ${places.panfilova.works} работ`, sub: `${places.panfilova.authors} авторов рисовали эту точку`, go: 'series', primary: true })]) }),
      ui.comments({ count: 18, items: [
        { initial: people.misha.initial, name: people.misha.name, text: 'Точно пойман ритм теней. Добавлю утренний вид', time: '8 мин', likes: 5 },
        { initial: people.lera.initial, name: people.lera.name, text: 'Какой это оттенок линера?', time: '3 мин', likes: 1 },
        { initial: people.alina.initial, name: people.alina.name, text: 'Обычный чёрный 0.3, просто бумага тёплая', time: '1 мин', reply: true, author: true },
      ] }),
    ]),
    ui.composer({ placeholder: 'Комментарий', attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>picker'] }, send: { toast: 'Комментарий отправлен' } }),
  ],
});
