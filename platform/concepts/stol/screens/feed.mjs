import { THEME, TABS, seats } from './_shared.mjs';
import { own, tonight } from '../model.mjs';

/* Свой дневник партий: всё на главной сыграл, купил или записал сам Саша.
   Чужих публикаций, лайков и подписок нет — с друзьями собирают стол и пишут в чат */
export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'В кругу' }), ui.iconButton({ icon: 'plus', label: 'Новая запись', go: 'compose' })),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Партии', filter: 'match' },
      { label: 'Коллекция', filter: 'box' },
      { label: 'Заметки', filter: 'note' },
    ]) }),
    ui.entry({
      icon: 'dices', title: `${tonight.game} · ${tonight.start}`, meta: `сегодня · ${tonight.where} · раунд 4`, status: { label: 'идёт', accent: true },
      attach: seats(tonight.taken, tonight.seats), actions: [{ label: 'Открыть счёт', icon: 'list-ordered', go: 'score', primary: true }], tags: ['match'],
    }),
    ui.entry({ icon: 'dices', title: `${own.last.game} · ${own.last.points} очка`, meta: `${own.last.when} · ${own.last.minutes} минут · ${own.last.place}`, text: own.last.note, open: { go: 'post' }, menu: ['Изменить', 'Удалить'], tags: ['match'] }),
    ui.entry({ icon: 'mic', title: own.voice.title, meta: `${own.voice.when} · памятка себе`, voice: { dur: own.voice.dur }, tags: ['note'] }),
    ui.entry({ icon: 'package', title: `В коллекции · ${own.box.title}`, meta: `${own.box.when} · ${own.box.about}`, text: 'Подарили на день рождения, ещё в плёнке. Сыграть с Женей вдвоём в пятницу, пока не забыли правила', open: { go: 'games' }, tags: ['box'] }),
    ui.entry({
      icon: 'calendar', title: `Сентябрь · ${own.month.games} партий`, meta: `${own.month.wins} победы · ${own.month.newGames} новые игры`,
      attach: ui.list([
        ui.row({ lead: ui.leadIcon('trophy', { round: true, accent: true }), title: 'Лесные союзы', sub: 'Победа · 83 очка' }),
        ui.row({ lead: ui.leadIcon('dices', { round: true }), title: 'Архив острова', sub: 'Кооператив · не успели к рассвету' }),
      ]), tags: ['match'],
    }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'feed' }),
});
