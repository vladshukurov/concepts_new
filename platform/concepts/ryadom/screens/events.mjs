import { THEME, TABS } from './_shared.mjs';
import { longrun, recovery, technique } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'events', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Тренировки'),
    ui.section({ title: 'Сегодня', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: longrun.start }), title: `${longrun.title} · ${longrun.km} км`, sub: `Темп ${longrun.pace} · ${longrun.confirmed} из ${longrun.spots} подтвердили`, end: { badge: 'скоро' }, go: 'meetup', primary: true }),
      ui.row({ lead: ui.leadIcon('', { text: recovery.start }), title: `${recovery.title} · ${recovery.km} км`, sub: `${recovery.from} · темп ${recovery.pace} · нужен ведущий`, go: 'meetup' }),
    ]) }),
    ui.section({ title: 'На неделе', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: 'вт' }), title: technique.title, sub: `${technique.day}, ${technique.start} · осталось ${technique.left} места`, go: 'meetup' }),
    ]) }),
    ui.section({ title: 'Задачи', meta: '2', children: ui.list([
      ui.row({ lead: ui.leadIcon('shield'), title: 'Аптечка на лонгран', sub: 'Назначено вам · до старта', end: { value: 'Принять', toast: 'Задача принята', label: 'Принять задачу' } }),
      ui.row({ lead: ui.leadIcon('repeat-2'), title: 'Номер на полумарафон', sub: 'Даша не бежит и отдаёт номер', end: { value: 'Забрать', toast: 'Номер ваш · перерегистрация на сайте забега', label: 'Забрать номер' } }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'events' }),
});
