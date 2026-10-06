import { THEME, seats } from './_shared.mjs';
import { people, tonight } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'table', theme: THEME,
  body: [
    ui.nav({ title: 'Стол' }),
    ui.scroll([
      ui.section({ children: `<div class="st-table"><small>Сегодня, ${tonight.start} · ${tonight.where}</small><strong>${tonight.game}</strong><span>${tonight.minutes} минут · ${tonight.pace} · собрала ${tonight.host.first}</span>${seats(tonight.taken, tonight.seats)}</div>` }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Открыть счёт', icon: 'list-ordered', block: true, go: 'score', primary: true }),
          ui.button({ label: 'Чат стола', icon: 'message-circle', variant: 'secondary', block: true, go: 'chat' }),
        ]),
      ] }),
      ui.section({ title: 'Не пропустить', children: [
        ui.group({ cells: [
          ui.cell({ icon: 'calendar-plus', title: 'В календарь', sub: `Сегодня, ${tonight.start}`, ask: 'calendar|table|table' }),
          ui.cell({ icon: 'bell', title: 'Следить за столом', sub: 'Если место освободится или время сдвинут', toggle: false, ask: 'push|table|table' }),
        ] }),
        ui.denied('calendar'),
        ui.list([ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: 'Стол в календаре', sub: 'Сегодня, 19:30 · напоминание за час', shownAfter: 'calendar' })]),
        ui.denied('push'),
      ] }),
      ui.section({ title: 'На телефоне', children: ui.list([
        ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Памятка правил скачана', sub: 'Голосом 4:20 · откроется без сети', go: 'audio' }),
        ui.row({ lead: ui.leadIcon('users', { round: true }), title: 'Состав обновился в 12:14', sub: 'Женя подтвердил — стол собран' }),
      ]) }),
      ui.section({ title: 'За столом', meta: `${tonight.taken} из ${tonight.seats}`, children: ui.list([
        ui.row({ lead: ui.avatar(people.masha.initial), title: people.masha.name, sub: 'Собрала стол' }),
        ui.row({ lead: ui.avatar(people.ilya.initial), title: people.ilya.name, sub: 'Объяснит правила' }),
        ui.row({ lead: ui.avatar(people.me.initial), title: people.me.name, sub: 'Вы · играли 9 раз' }),
        ui.row({ lead: ui.avatar(people.zhenya.initial), title: people.zhenya.name, sub: 'Принесёт дополнение', go: 'direct' }),
      ]) }),
    ]),
  ],
});
