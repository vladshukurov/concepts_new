import { THEME, TABS, face } from './_shared.mjs';
import { swap, item, people, myItems, next, queue, site } from '../model.mjs';

/* Свопы: сегодняшний — со своими вещами и очередью на приём, дальше — встречи,
   куда Марина идёт сама. Каталога чужих мест здесь нет */
export default (ui) => ui.screen({
  id: 'swap', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Свопы'),
    ui.section({ children: [
      `<div class="lk-swap"><small>Сегодня · ${swap.hours} · идёт</small><strong>${swap.title}</strong><span>${swap.where} · вход свободный</span></div>`,
      ui.list([
        ui.row({ lead: ui.leadIcon('map-pin', { accent: true }), title: 'Отметиться на свопе', sub: 'После входа во двор Бутылки', go: 'checkin' }),
        ui.row({ lead: ui.leadIcon('list-ordered', { round: true, accent: true }), title: `В очереди на приём · ${queue.place}-я`, sub: `Сейчас ${people.lera.first} принимает ${queue.called}-го`, shownAfter: 'wifiinfo' }),
        ui.row({ lead: ui.leadIcon('wifi'), title: 'Сеть площадки', sub: 'Код на стойке у входа', go: 'netqr' }),
      ]),
    ] }),
    ui.section({ title: 'Мои вещи', meta: String(myItems.length), children: [
      ui.list(myItems.map((v) => ui.row({ lead: ui.leadIcon('shirt'), title: v.title, sub: v.sub, end: v.fresh ? { badge: 'новое' } : v.check ? { badge: 'на проверке' } : undefined }))),
      ui.actions([
        ui.button({ label: `Показать ${item.short} ведущей`, icon: 'video', block: true, activate: 'voip|call', primary: true }),
        ui.button({ label: 'Сообщить, когда примут', icon: 'bell', variant: 'secondary', block: true, activate: 'commnotif|background' }),
      ]),
      ui.list([ui.row({ lead: ui.leadIcon('globe'), title: 'Анкета вещей на сайте свопа', sub: site.domain, activate: 'autofill|fill' })]),
    ] }),
    ui.section({ title: 'Дальше', children: [
      ui.list(next.map((e, i) => ui.row({ lead: ui.leadIcon('', { text: e.day }), title: e.title, sub: `${e.when} · ${e.where}`, end: i === 0 ? { value: 'В Календарь', ask: 'calendar|swap|swap', label: `${e.title} в Календарь` } : undefined }))),
      ui.list([ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: `${next[0].title} в Календаре`, sub: `Напомним в ${next[0].remind} · перенос подхватится сам`, shownAfter: 'calendar' })]),
    ] }),
    ui.section({ title: 'Идут сегодня', meta: String(swap.going), children: [
      ui.list([
        ui.row({ ...face(ui, 'lera'), title: people.lera.name, sub: 'Ведёт своп · принесла 4 вещи', go: 'chat' }),
        ui.row({ ...face(ui, 'yura'), title: people.yura.name, sub: 'Отметился в 9:35', go: 'chat-yura' }),
        ui.row({ ...face(ui, 'mark'), title: people.mark.name, sub: 'Отметился в 9:31 · принёс два пальто', go: 'chat-mark' }),
        ui.row({ ...face(ui, 'olya'), title: people.olya.name, sub: 'Приглашена вами · ждём ответа', shownAfter: 'contacts' }),
      ]),
      ui.actions([ui.button({ label: 'Позвать на своп', icon: 'user-plus', variant: 'secondary', block: true, ask: 'contacts|mates|mates' })]),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'swap' }),
});
