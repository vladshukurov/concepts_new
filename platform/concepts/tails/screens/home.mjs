import { THEME, TABS, PET, faces } from './_shared.mjs';
import { own, revaccination } from '../model.mjs';

/* Дневник Трюфеля: прогулки, заметки и здоровье — всё своё. Чужих публикаций,
   лайков и подписок нет — с друзьями гуляют вместе и пишут в чат */
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Выгул' }), ui.iconButton({ icon: 'plus', label: 'Новая запись', go: 'create' })),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Прогулки', filter: 'walk' },
      { label: 'Здоровье', filter: 'health' },
      { label: 'Заметки', filter: 'note' },
    ]) }),
    ui.entry({
      icon: 'paw-print', title: 'Спокойный круг у пруда · 18:40', meta: 'сегодня · Лопухинский сад · с Барни, Мятой и Локи', status: { label: 'сегодня', accent: true },
      text: '6 участников · обновлено в 7:10', attach: faces(PET.barni, PET.mint, PET.loki), actions: [{ label: 'Открыть прогулку', icon: 'map-pin', go: 'walk', primary: true }], tags: ['walk'],
    }),
    ui.entry({ icon: 'route', title: own.walk.title, meta: `${own.walk.when} · ${own.walk.dur}`, text: own.walk.text, attach: `<span class="tl-chat-photo ${PET.truffle}"></span>`, menu: ['Изменить', 'Удалить'], tags: ['walk'] }),
    ui.entry({
      icon: 'syringe', title: `Ревакцинация через ${revaccination.left}`, meta: `${revaccination.vaccine} · ${revaccination.day}, ${revaccination.time}`,
      text: 'Обработку от клещей пропустили на 4 дня', actions: [{ label: 'Открыть здоровье', icon: 'stethoscope', go: 'vaccine' }], tags: ['health'],
    }),
    ui.entry({ icon: 'mic', title: own.note.title, meta: `${own.note.when} · наблюдение`, voice: { dur: own.note.dur }, open: { go: 'vetnote' }, tags: ['note', 'health'] }),
    ui.section({ children: ui.adCard({ icon: 'store', title: 'Корм для активных собак −20 %', sub: 'Реклама · доставка в день заказа по Петроградской', subGranted: 'Реклама · по интересам · корм для ретриверов 25–30 кг', go: 'ads' }) }),
    ui.entry({
      icon: 'map-pin', title: 'Кто гуляет рядом', meta: 'Петроградская · сейчас',
      text: 'Площадки и прогулки поблизости — по вашему месту', actions: [{ label: 'Показать рядом', icon: 'navigation', ask: 'location|nearby|home' }], tags: ['walk'],
    }),
    ui.denied('location'),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
