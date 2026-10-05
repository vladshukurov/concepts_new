import { THEME, TABS } from './_shared.mjs';
import { house, journal, outage, meters } from '../model.mjs';

/* Своя лента квартиры: всё на главной записала сама Анна. Объявления УК сюда не
   попадают — они в её чате; здесь только то, что Анна сохранила себе */
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: `${house.address}, кв. 74` }), [
      ui.iconButton({ icon: 'plus', label: 'Новая запись', menu: ['Заявка с фото>problem', 'Показания>meters', 'Фото в хронику>chronicle'] }),
    ]),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, go: 'home' },
      { label: 'Заявки', go: 'events' },
      { label: 'Счётчики', go: 'meters' },
      { label: 'Фото', go: 'chronicle' },
    ]) }),
    ui.entry({
      icon: 'wrench', title: journal.door.title, meta: `${journal.door.when} · заявка`,
      status: { label: journal.door.status, accent: true }, text: journal.door.text, photos: journal.door.photos,
      open: { go: 'post' }, actions: [{ label: 'Чат УК', icon: 'message-circle', go: 'ukchat' }], menu: ['Изменить', 'Удалить'],
    }),
    ui.entry({
      icon: 'droplets', title: `Холодная вода · ${journal.water.reading}`, meta: `${journal.water.when} · показания`,
      text: `Было ${journal.water.prev} · ${journal.water.delta}. До срока ещё ${meters.left}`,
      actions: [{ label: 'Все счётчики', icon: 'gauge', go: 'meters' }],
    }),
    ui.entry({
      icon: 'megaphone', title: 'Сантехник на выезд', meta: 'Полевая, 10 · реклама',
      text: 'Замена доводчика и смесителя от 900 ₽, приедут сегодня до 18:00', actions: [{ label: 'Настроить рекламу', icon: 'sliders-horizontal', go: 'ads' }],
    }),
    ui.entry({ icon: 'mic', title: journal.voice.title, meta: `${journal.voice.when} · заметка`, voice: { dur: journal.voice.dur }, menu: ['Изменить', 'Удалить'] }),
    ui.entry({
      icon: 'triangle-alert', title: outage.title, meta: journal.outage.when, text: `${outage.label} · опрессовка стояка. Набрать воды заранее`,
      actions: [{ label: 'В Календарь', icon: 'calendar-plus', go: 'events' }],
    }),
    ui.entry({ icon: 'camera', title: journal.crack.title, meta: `${journal.crack.when} · фото`, text: journal.crack.text, photos: journal.crack.photos, open: { go: 'chronicle' } }),
    ui.section({ title: 'Хроника квартиры', meta: '42 снимка дома', children: [
      `<div class="dv-grid">${Array.from({ length: 6 }, (_, i) => `<button class="ph" data-go="chronicle" aria-label="Снимок ${i + 1}"></button>`).join('')}</div>`,
      ui.actions([ui.button({ label: 'Собрать хронику', icon: 'images', variant: 'secondary', block: true, ask: 'photos|chronicle|home' })], { className: 'dv-gap' }),
      ui.denied('photos'),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
