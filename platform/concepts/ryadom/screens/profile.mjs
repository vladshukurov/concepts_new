import { THEME, TABS } from './_shared.mjs';
import { people, longrun, club, own } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="ry-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">${club.name} · участник с 2022 года</p>${ui.stats([[String(own.stats.runs), 'пробежки'], [own.stats.km, 'км за год'], [String(own.stats.withClub), 'с клубом']])}</div>`,
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('users', { accent: true }), title: 'Знакомые в клубе', sub: '47 участников · семеро бегали с вами на неделе', go: 'friends' }),
      ui.row({ lead: ui.leadIcon('calendar'), title: longrun.title, sub: `Вы идёте · ${longrun.confirmed} из ${longrun.spots}`, go: 'meetup' }),
    ]) }),
    ui.entry({ icon: 'activity', title: own.run.title, meta: `${own.run.when} · темп ${own.run.pace}`, text: own.run.note, open: { go: 'post' }, menu: ['Изменить', 'Удалить'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
