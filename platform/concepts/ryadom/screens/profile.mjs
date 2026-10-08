import { THEME, TABS } from './_shared.mjs';
import { people, longrun, club, own, route } from '../model.mjs';

/* Свой профиль: неделя по дням и цель, свои маршруты и видео, знакомые в клубе — без подписчиков */
const h = (km) => (km ? `is-h${Math.round(parseFloat(km.replace(',', '.')))}` : 'is-h0');
const week = `<div class="ry-week">${own.days.map(([d, km, today]) => `<span class="ry-day${today ? ' is-today' : ''}"><span>${km || "&nbsp;"}</span><i class="${h(km)}"></i><b>${d}</b></span>`).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="ry-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">${club.name} · бегаю по утрам с 2022 года</p>${ui.stats([[String(own.stats.runs), 'пробежки'], [own.stats.km, 'км за год'], [String(own.stats.withClub), 'с клубом']])}${ui.actions([ui.button({ label: 'Изменить', icon: 'pen-line', variant: 'secondary', go: 'account' }), ui.button({ label: 'Новая запись', icon: 'plus', go: 'compose' })], { row: true })}</div>`,
    ui.section({ title: 'Эта неделя', meta: `${own.week.done} из ${own.week.goal} км`, children: [
      week,
      ui.list([ui.row({ lead: ui.leadIcon('target', { round: true, accent: true }), title: `До цели ${own.week.left} км`, sub: `Лонгран сегодня в ${longrun.start} · ${longrun.km} км`, go: 'meetup' })]),
    ] }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'route', title: 'Маршруты', sub: `${route.name} и Медеу скачаны`, go: 'music' }),
      ui.cell({ icon: 'video', title: 'Мои видео техники', sub: `${own.clip.title} · ${own.clip.when}`, go: 'videos' }),
      ui.cell({ icon: 'users', title: 'Знакомые в клубе', sub: `${club.members} участников · семеро бегали с вами`, go: 'friends' }),
    ] }) }),
    ui.entry({ icon: 'activity', title: own.run.title, meta: `${own.run.when} · темп ${own.run.pace}`, text: own.run.note, open: { go: 'post' }, menu: ['Изменить', 'Удалить'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
