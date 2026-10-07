import { THEME, TABS, tools } from './_shared.mjs';
import { own, places, pleinair } from '../model.mjs';

/* Свой скетчбук: всё на главной нарисовала и записала сама Анна.
   Чужих работ, лайков и подписок нет — с людьми рисуют вместе на встречах */
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Вглядись' }), ui.iconButton({ icon: 'plus', label: 'Новая зарисовка', go: 'compose' })),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Зарисовки', filter: 'sketch' },
      { label: 'Серии', filter: 'series' },
      { label: 'Заметки', filter: 'note' },
    ]) }),
    ui.entry({
      icon: 'calendar', title: pleinair.title, meta: `${pleinair.start} · ${pleinair.where} · ${pleinair.people} идут`, status: { label: 'завтра', accent: true },
      text: 'Взять линер, складной стул и бумагу потолще', actions: [{ label: 'Открыть встречу', icon: 'calendar', go: 'events', primary: true }],
    }),
    ui.entry({ icon: 'pen-line', title: own.today.title, meta: own.today.when, text: own.today.text, photos: 1, attach: tools(...own.today.tools), open: { go: 'post' }, menu: ['Изменить', 'Удалить'], tags: ['sketch'] }),
    ui.entry({
      icon: 'layers', title: `${places.panfilova.series} · ${own.series.done} из ${own.series.of}`, meta: `${places.panfilova.name} · ${own.series.next}`,
      attach: ui.list([
        ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Лето', sub: 'Июль · тень липы' }),
        ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Дождь', sub: 'Август · мокрый асфальт' }),
        ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Осень', sub: 'Сегодня · первые жёлтые листья' }),
        ui.row({ lead: ui.leadIcon('circle', { round: true }), title: 'Снег', sub: 'Ждёт первого снега' }),
      ]), open: { go: 'series' }, tags: ['series'],
    }),
    ui.entry({ icon: 'mic', title: own.voice.title, meta: `${own.voice.when} · ${places.bazar.name}`, voice: { dur: own.voice.dur }, tags: ['note'] }),
    ui.entry({
      icon: 'megaphone', title: 'Бумага для скетчей −15 %', meta: 'художественная лавка · реклама',
      text: 'Блоки 160 г и линеры на Панфилова, 90', actions: [{ label: 'Почему эта реклама', icon: 'sliders-horizontal', go: 'ads' }],
    }),
    ui.entry({ icon: 'pen-line', title: own.apples.title, meta: `${own.apples.when} · ${places.bazar.name}`, text: own.apples.text, photos: 1, attach: tools(...own.apples.tools), tags: ['sketch'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
