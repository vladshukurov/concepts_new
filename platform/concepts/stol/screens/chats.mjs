import { THEME, TABS } from './_shared.mjs';
import { people, tonight, saturday } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'square-pen', label: 'Новое сообщение', menu: ['Женя Ким>direct', 'Аня Соколова>chat-anya'] })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ initial: 'ЛС', name: `${tonight.game} · ${tonight.start}`, text: `${tonight.host.first}: Илья ходит, не подсказывайте`, time: '21:02', unread: 2, go: 'chat', primary: true }),
      ui.dialog({ initial: 'МС', name: saturday.game, text: `${people.ilya.first} сдвинул на ${saturday.start}`, time: 'вчера', go: 'chat-saturday' }),
      ui.dialog({ initial: people.zhenya.initial, name: people.zhenya.name, text: 'Сыграем ещё раз на неделе?', time: 'пн', online: true, go: 'direct' }),
      ui.dialog({ initial: 'ПК', name: 'Клуб «Полка»', text: 'Бронь на субботу открыта до пятницы', time: 'вт', muted: true, go: 'chat-klub' }),
      ui.dialog({ initial: 'ДН', name: 'Дома у Жени · вторник', text: 'Илья: 92, кто-нибудь верит?', time: 'вт', go: 'chat-zhenya' }),
      ui.dialog({ initial: 'АС', name: 'Аня Соколова', text: 'Верни «Сад камней», когда наиграешься', time: '12 сен', go: 'chat-anya' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
