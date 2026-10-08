import { THEME, TABS } from './_shared.mjs';
import { own, today, plants, repot, ad } from '../model.mjs';

/* Свой дневник растений: всё на главной сняла и записала сама Катя. Чужих
   публикаций и подписок нет — с людьми переписываются в мессенджере */
export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Вазон' }), [
      ui.iconButton({ icon: 'bell', label: 'Уведомления', go: 'notif' }),
      ui.iconButton({ icon: 'plus', label: 'Создать', menu: ['Новая запись>compose', 'Добавить растение>plantnew'] }),
    ]),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Полив', filter: 'water' },
      { label: 'Рост', filter: 'grow' },
      { label: 'Заметки', filter: 'note' },
    ]) }),
    ui.entry({
      icon: 'droplets', title: `Полить сегодня · ${today.length} растения`, meta: 'четверг · отметки ставятся прямо здесь', status: { label: 'сегодня', accent: true },
      attach: ui.checklist(today.map((p) => ({ title: p.name, sub: `${p.room} · последний раз ${p.last}` }))),
      actions: [{ label: 'Открыть полив', icon: 'droplets', go: 'water' }], tags: ['water'],
    }),
    ui.entry({ icon: 'trees', title: own.newLeaf.title, meta: `${own.newLeaf.when} · ${plants.monstera.room}`, text: own.newLeaf.text, photos: own.newLeaf.photos, open: { go: plants.monstera.id }, menu: ['Изменить', 'Удалить'], tags: ['grow'] }),
    ui.entry({ icon: 'mic', title: own.peperVoice.title, meta: `${own.peperVoice.when} · голосовая заметка`, voice: { dur: own.peperVoice.dur }, open: { go: plants.peperomia.id }, tags: ['note', 'grow'] }),
    ui.section({ children: ui.adCard({ icon: 'flask-conical', title: ad.title, sub: `Реклама · ${ad.text}`, subGranted: `Реклама · по интересам · ${ad.near}`, go: 'privacy' }) }),
    ui.entry({ icon: 'layers', title: repot.title, meta: `${repot.when} · горшок ${repot.pot}, три детки отсажены`, text: 'Корни вылезли из дренажа. Одну детку забирает Ира — меняемся на хойю', open: { go: 'repot' }, tags: ['grow'] }),
    ui.entry({ icon: 'flask-conical', title: own.feed.title, meta: `${own.feed.when} · ${plants.ficus.room}`, text: own.feed.text, open: { go: plants.ficus.id }, tags: ['water'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'feed' }),
});
