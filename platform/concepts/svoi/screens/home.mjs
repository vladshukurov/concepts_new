import { THEME, TABS } from './_shared.mjs';
import { me, people, family, home, today, clubs, pickup, docsCount, shopping, now } from '../model.mjs';

/* Дом: кто дома по домашней сети, расписание детей на сегодня, документы и покупки семьи */
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Дом', ui.iconButton({ icon: 'plus', label: 'Новое занятие', go: 'newclass' })),
    ui.section({ children: [
      `<div class="sv-now"><small>${family.name} · ${now.date}</small><strong>${people.danya.short} дома с ${home.danyaSince}</strong><span>${family.ssid} · ${people.mila.short} на рисовании до ${pickup.to}</span></div>`,
      ui.actions([ui.button({ label: 'Я дома', icon: 'house', block: true, activate: 'wifiinfo|home', primary: true })]),
    ] }),
    ui.section({ title: 'Кто дома', children: [
      ui.list([
        ui.row({ lead: ui.avatar(me.initial), title: `${me.short} дома`, sub: `${family.ssid} · с ${home.meSince}`, shownAfter: 'wifiinfo' }),
        ui.row({ lead: ui.avatar(people.danya.initial), title: `${people.danya.short} дома`, sub: `${family.ssid} · с ${home.danyaSince}` }),
        ui.row({ lead: ui.avatar(people.mila.initial), title: `${people.mila.short} на рисовании`, sub: `${pickup.place} · забрать в ${pickup.to}`, go: 'mila' }),
        ui.row({ lead: ui.avatar(people.oksana.initial), title: `${people.oksana.short} ушла`, sub: `в ${home.oksanaLeft} · была дома с 12:30` }),
        ui.row({ lead: ui.avatar(people.timur.initial), title: `${people.timur.short} на работе`, sub: `обещал быть к ${home.timurBack}` }),
      ]),
      ui.foot(`Статус «дома» обновился в ${home.danyaSince}, когда телефон Дани вошёл в сеть`),
    ] }),
    ui.section({ title: 'Сегодня', meta: today.label.split(', ')[1], children: [
      ui.list(today.items.map(([time, title, sub]) => ui.row({
        lead: ui.leadIcon('', { text: time }), title, sub,
        ...(/Милу|Мила/.test(title) ? { go: 'mila' } : {}),
      }))),
      ui.foot('Расписание обновлено в 06:30 — перенос шахмат уже здесь'),
      ui.actions([ui.button({ label: 'Кружки в Календарь', icon: 'calendar-plus', variant: 'secondary', block: true, ask: 'calendar|home|home' })]),
    ] }),
    ui.section({ shownAfter: 'calendar', children: ui.list([
      ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: `В Календаре · ${clubs.perWeek} занятий в неделю`, sub: 'Календарь «Кружки Гариповых», напоминания за 30 минут' }),
      ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: `${clubs.moved.what} — ${clubs.moved.to} в Календаре`, sub: `${clubs.moved.day[0].toUpperCase() + clubs.moved.day.slice(1)}, было ${clubs.moved.was} · событие поправлено` }),
    ]) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'lock', title: 'Документы семьи', sub: 'Паспорта, полисы, свидетельства', value: `${docsCount} файлов`, ask: 'faceid|docs|home' }),
      ui.cell({ icon: 'shopping-basket', title: 'Список покупок', sub: 'Молоко, гречка, плавки Дане', value: `${shopping.bought} из ${shopping.total}`, go: 'shopping' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
