import { THEME, TABS } from './_shared.mjs';
import { people, longrun, club } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="ry-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">${club.name} · участник с 2022 года</p>${ui.stats([['62', 'публикации'], ['47', 'знакомых'], ['83', 'тренировки']])}${ui.actions([ui.button({ label: 'Опубликовать', go: 'compose', primary: true }), ui.button({ label: 'Пригласить', variant: 'secondary', go: 'invite' })], { row: true })}</div>`,
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('users', { accent: true }), title: 'Знакомые в клубе', sub: '47 участников · семеро бегали с вами на неделе', go: 'friends' }),
      ui.row({ lead: ui.leadIcon('calendar'), title: longrun.title, sub: `Вы идёте · ${longrun.confirmed} из ${longrun.spots}`, go: 'meetup' }),
    ]) }),
    ui.post({
      author: { initial: people.me.initial, name: people.me.name, meta: 'сегодня, 06:20' },
      text: 'Первый выезд после замены цепи: 24,7 км без щелчков. Кто в воскресенье на Медеу?',
      likes: 18, comments: 4, shares: 1, menu: { toast: 'Закрепить · Изменить · Удалить' },
    }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
