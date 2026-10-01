import { THEME, TABS, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Хвосты', glyph: 'paw-print' }), [
      ui.iconButton({ icon: 'plus', label: 'Новая запись', go: 'create' }),
      ui.iconButton({ icon: 'users', label: 'Друзья из контактов', go: 'mates' }),
    ]),
    ui.stories([
      { label: 'История', icon: 'plus', seen: true, go: 'create' },
      { label: 'Трюфель', face: PET.truffle, go: 'pet' },
      { label: 'Мята', face: PET.mint, go: 'pet' },
      { label: 'Локи', face: PET.loki, seen: true, go: 'pet' },
      { label: 'Барни', face: PET.barni, seen: true, go: 'profile' },
    ]),
    `<button class="tl-nearby" data-ask="location|nearby|home"><span class="tl-nearby-ico">${ui.icon('map-pin')}</span><span class="ui-row-text"><strong>Кто гуляет рядом</strong><span>7 питомцев в Петроградском районе</span></span>${ui.icon('chevron-right')}</button>`,
    ui.denied('location', 'Район можно выбрать вручную — прогулки останутся доступны'),
    ui.post({
      author: { face: PET.truffle, name: 'Ксения и Трюфель', meta: '18 минут назад · Петроградская', action: { go: 'pet' } },
      text: 'Трюфель впервые дошёл до дальнего пруда. Утки заинтересовали, но команда «рядом» победила',
      media: PET.truffle, likes: 184, comments: 16, shares: 3, views: '1,2K', liked: true,
      menu: { toast: 'Скрыть · Пожаловаться' },
    }),
    ui.post({
      author: { face: PET.loki, name: 'Марина Гурьева', meta: 'кинолог · сегодня в 08:30', action: { go: 'course' } },
      text: 'Новое занятие курса: учимся отпускать с поводка на площадке без забора',
      attach: `<button class="tl-attach" data-go="course"><span class="ui-thumb ${PET.loki}"></span><span class="ui-row-text"><strong>Подзыв в парке с отвлечениями</strong><span>Осталось 7:39 из 14:20 · занятие 4 из 12</span></span></button>`,
      likes: 61, comments: 9, views: 804,
    }),
    ui.post({
      author: { face: PET.mint, name: 'Алёна и Мята', meta: 'вчера в 21:14', action: { go: 'pet' } },
      text: 'Главное место в доме занято. Наблюдение за двором началось ровно в 06:40',
      media: PET.mint, likes: 92, comments: 7, views: 640,
    }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
