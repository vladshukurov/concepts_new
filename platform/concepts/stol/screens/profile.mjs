import { THEME, TABS } from './_shared.mjs';
import { people, own, pts } from '../model.mjs';

/* Свой профиль: что сыграно, сентябрь по дням, коллекция и с кем играю */
const month = own.september.map(([day, res, win]) => `<span class="${win ? 'is-win' : ''}"><b>${day}</b><i>${res}</i></span>`).join('');

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', [ui.textButton({ label: 'Изменить', go: 'account' }), ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })]),
    `<div class="st-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">Спокойный темп · объясняю правила новичкам</p>${ui.stats([[String(own.stats.plays), 'партия'], [String(own.stats.boxes), 'коробок'], [String(own.stats.wins), 'побед']])}</div>`,
    ui.section({ title: 'Сентябрь', meta: `${own.month.games} партий · ${own.month.wins} победы`, children: [
      `<div class="st-month" aria-label="Партии сентября по дням">${month}</div>`,
      ui.list([ui.row({ lead: ui.leadIcon('trophy', { round: true, accent: true }), title: `Лучший счёт сезона · ${pts(own.best.points)}`, sub: `${own.best.game} · ${own.best.when}` })]),
    ] }),
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('book-open', { accent: true }), title: 'Дневник', sub: `Последняя: ${own.last.game} · ${own.last.when}`, go: 'feed' }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Игры', sub: `${own.stats.boxes} коробок · 2 хочу сыграть`, go: 'games' }),
      ui.row({ lead: ui.leadIcon('calendar'), title: 'Столы', sub: 'Сегодня «Лесные союзы» · в субботу ещё 2 места', go: 'tables' }),
    ]) }),
    ui.section({ title: 'С кем играю', children: ui.list([
      ui.row({ lead: ui.avatar('ИЛ'), title: 'Илья Левин', sub: '14 партий вместе · объясняет правила' }),
      ui.row({ lead: ui.avatar('МО'), title: 'Маша Орлова', sub: '11 партий · собирает столы в «Полке»' }),
      ui.row({ lead: ui.avatar('ЖК'), title: 'Женя Ким', sub: '6 партий · играет дома', go: 'direct' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
