import { THEME, tools } from './_shared.mjs';
import { people, places } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Зарисовка', trailing: ui.iconButton({ icon: 'bookmark', label: 'Сохранить', toast: 'Сохранено' }) }),
    ui.scroll([
      ui.post({ author: { initial: people.alina.initial, name: people.alina.name, meta: `сегодня в 18:24 · ${places.panfilova.name}`, action: { go: 'profile' } }, text: 'Поймала тень от липы до того, как включили фонари', media: 'sh-s2', attach: tools('Линер 0.3', 'Бумага 160 г', '20 минут'), likes: 146, comments: 18, shares: 7, views: '1,2K' }),
      ui.section({ children: ui.list([ui.row({ thumb: places.panfilova.art, title: `Серия места · ${places.panfilova.works} работ`, sub: `${places.panfilova.authors} авторов рисовали эту точку`, go: 'series', primary: true })]) }),
      ui.section({ title: 'Комментарии', meta: '18', children: ui.list([
        ui.row({ lead: ui.avatar(people.misha.initial), title: people.misha.name, sub: 'Точно пойман ритм теней. Добавлю утренний вид', subWrap: true, end: { value: '8 мин' } }),
        ui.row({ lead: ui.avatar(people.lera.initial), title: people.lera.name, sub: 'Какой это оттенок линера?', end: { value: '3 мин' } }),
      ]) }),
    ]),
    ui.composer({ placeholder: 'Комментарий', attach: { go: 'picker' }, send: { toast: 'Комментарий отправлен' } }),
  ],
});
