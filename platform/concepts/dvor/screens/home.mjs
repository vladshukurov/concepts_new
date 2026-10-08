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
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Заявки', filter: 'repair' },
      { label: 'Счётчики', filter: 'meters' },
      { label: 'Фото', filter: 'photo' },
    ]) }),
    ui.section({ children: ui.list([ui.row({ lead: ui.leadIcon('sunrise', { round: true, accent: true }), title: 'Сводка на утро собрана в 7:00', sub: `1 заявка в работе · показания через ${meters.left} · без горячей воды с ${outage.from}-го`, wrap: true })]) }),
    ui.entry({
      icon: 'wrench', title: journal.door.title, meta: `${journal.door.when} · заявка`,
      status: { label: journal.door.status, accent: true }, text: journal.door.text, photos: journal.door.photos,
      open: { go: 'post' }, actions: [{ label: 'Чат УК', icon: 'message-circle', go: 'ukchat' }], menu: ['Изменить', 'Удалить'], tags: ['repair', 'photo'],
    }),
    ui.entry({
      icon: 'droplets', title: `Холодная вода · ${journal.water.reading}`, meta: `${journal.water.when} · показания`,
      text: `Было ${journal.water.prev} · ${journal.water.delta}. До срока ещё ${meters.left}`,
      actions: [{ label: 'Все счётчики', icon: 'gauge', go: 'meters' }], tags: ['meters'],
    }),
    ui.section({ children: ui.adCard({ icon: 'megaphone', title: 'Сантехник на выезд', sub: 'Реклама · по городу · замена доводчика от 900 ₽', subGranted: `Реклама · рядом с ${house.address} · приедут через час`, go: 'ads' }) }),
    ui.entry({ icon: 'mic', title: journal.voice.title, meta: `${journal.voice.when} · заметка`, voice: { dur: journal.voice.dur }, menu: ['Изменить', 'Удалить'], tags: ['repair'] }),
    ui.entry({
      icon: 'triangle-alert', title: outage.title, meta: journal.outage.when, text: `${outage.label} · опрессовка стояка. Набрать воды заранее`,
      actions: [{ label: 'В Календарь', icon: 'calendar-plus', go: 'events' }],
    }),
    ui.entry({ icon: 'camera', title: journal.crack.title, meta: `${journal.crack.when} · фото`, text: journal.crack.text, photos: journal.crack.photos, open: { go: 'chronicle' }, tags: ['photo', 'repair'] }),
    ui.section({ title: 'Хроника квартиры', meta: '42 снимка дома', tags: ['photo'], children: [
      `<div class="dv-grid">${Array.from({ length: 6 }, (_, i) => `<button class="ph" data-go="chronicle" aria-label="Снимок ${i + 1}"></button>`).join('')}</div>`,
      ui.actions([ui.button({ label: 'Собрать хронику', icon: 'images', variant: 'secondary', block: true, ask: 'photos|chronicle|home' })], { className: 'dv-gap' }),
      ui.denied('photos'),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
