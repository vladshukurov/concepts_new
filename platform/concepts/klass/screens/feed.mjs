import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Лента', [ui.iconButton({ icon: 'bell', label: 'Оповещения', go: 'notif' })]),
    ui.composerPrompt({ initial: 'ОЗ', placeholder: 'Что нового в товариществе?', go: 'compose', primary: true, trailing: ui.iconButton({ icon: 'camera', label: 'Снять для публикации', go: 'shoot' }) }),
    ui.section({ children: [
      ui.list([ui.row({ lead: ui.leadIcon('sunrise'), title: 'Новости товарищества к утру', sub: 'Лента готова к первому открытию', activate: 'fetch|feed' })]),
      ui.granted('fetch', 'Обновлено в 06:12 · четыре новые записи'),
    ] }),
    ui.section({ children: [
      `<button class="kl-event" data-go="event"><small>Пятница, 12 сентября · выезд в 09:30</small><strong>Поездка на садовую ярмарку</strong><span>Записались 18 из 28 · осталось пять мест</span>${ui.progress({ fillClass: 'kl-w-64' })}</button>`,
      ui.list([ui.row({ lead: ui.avatar('СБ'), title: 'СНТ «Берёзка» · 28 участков', sub: 'В приложении 24, четверых ещё не позвали', go: 'classroom' })]),
    ] }),
    ui.post({
      author: { initial: 'АВ', name: 'Анна Викторовна', meta: 'председатель · вчера, 19:40', action: { go: 'classroom' } },
      text: 'Завтра субботник на улице: нужны рабочие перчатки и куртка потеплее, зал заняли под ярмарку. Кто забыл — форму даст Марина Игоревна',
      likes: 9, comments: 4, views: 21, menu: { toast: 'Пожаловаться · Скрыть · Копировать ссылку' },
      open: { go: 'post' }, discuss: { go: 'thread' },
    }),
    ui.post({
      author: { initial: 'ЕС', name: 'Елена Соколова', meta: 'участок 24 · сегодня, 09:12', action: { go: 'classroom' } },
      text: 'Ярмарка удалась: привезли саженцы для общей клумбы и договорились о доставке щебня. Наталья обещала выложить список сортов',
      likes: 26, comments: 11, views: 63, open: { go: 'post' }, discuss: { go: 'thread' }, menu: { toast: 'Пожаловаться · Скрыть · Копировать ссылку' },
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
