import { THEME, TABS } from './_shared.mjs';
import { trip } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Лента', [ui.iconButton({ icon: 'bell', label: 'Оповещения', go: 'notif' })]),
    ui.composerPrompt({ initial: 'ОЗ', placeholder: 'Что нового в товариществе?', go: 'compose', primary: true, trailing: ui.iconButton({ icon: 'camera', label: 'Снять для публикации', go: 'shoot' }) }),
    ui.section({ children: [
      `<button class="kl-event" data-go="event"><small>${trip.date[0].toUpperCase() + trip.date.slice(1)} · выезд в ${trip.departure}</small><strong>${trip.title}</strong><span>Записались ${trip.signed} из ${trip.seats} · осталось пять мест</span>${ui.progress({ fillClass: 'kl-w-64' })}</button>`,
      ui.list([ui.row({ lead: ui.avatar('СБ'), title: 'СНТ «Берёзка» · 28 участков', sub: 'В приложении 24, четверых ещё не позвали', go: 'classroom' })]),
    ] }),
    ui.post({
      author: { initial: 'АВ', name: 'Анна Викторовна', meta: 'председатель · вчера, 19:40', action: { go: 'classroom' } },
      text: 'Завтра субботник на улице: нужны рабочие перчатки и куртка потеплее, зал заняли под ярмарку. Кто забыл — форму даст Марина Игоревна',
      likes: 9, comments: 4, views: 21, menu: ['Пожаловаться', 'Скрыть', 'Копировать ссылку'],
      open: { go: 'post' }, discuss: { go: 'thread' },
    }),
    ui.post({
      author: { initial: 'ЕС', name: 'Елена Соколова', meta: 'участок 24 · сегодня, 09:12', action: { go: 'classroom' } },
      text: 'Ярмарка удалась: привезли саженцы для общей клумбы и договорились о доставке щебня. Наталья обещала выложить список сортов',
      likes: 26, comments: 11, views: 63, open: { go: 'post' }, discuss: { go: 'thread' }, menu: ['Пожаловаться', 'Скрыть', 'Копировать ссылку'],
    }),
    ui.post({
      author: { initial: 'ИМ', name: 'Илья Макаров', meta: 'участок 18 · 2 сентября', action: { go: 'classroom' } },
      text: 'Записал собрание целиком — кто был в командировке, послушайте с двадцатой минуты: там про воду и ремонт въезда',
      attach: ui.list([ui.row({ lead: `<span class="ui-thumb ph"></span>`, title: 'Собрание 4 сентября', sub: '48:20 · диктофон на столе правления', go: 'player' })]),
      likes: 7, comments: 34, views: 88, discuss: { go: 'thread' },
    }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'feed' }),
});
