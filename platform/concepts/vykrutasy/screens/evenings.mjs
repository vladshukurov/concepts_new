import { THEME, TABS, MINI } from './_shared.mjs';
import { tonight, lenaEvening, dimaEvening, invite, highlightsTotal } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'evenings', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Вечера', ui.iconButton({ icon: 'plus', label: 'Новый вечер', go: 'newevening' })),
    ui.section({ title: 'Скоро', children: ui.list([
      ui.row({ lead: ui.avatar('ЛО'), title: invite.title, sub: `${invite.when} · зовёт Лена`, go: 'invite' }),
    ]) }),
    ui.section({ title: 'Сегодня', children: ui.videoCard({
      art: tonight.art, duration: '5 раундов', go: 'room', avatar: ui.avatar('СК'),
      title: tonight.title, sub: `Вы ведущий · ${tonight.time} · ${tonight.players.length} игроков · ещё не начали`,
    }) }),
    ui.section({ title: 'Прошедшие', meta: '2 вечера', children: ui.list([
      ui.row({ thumb: lenaEvening.art, wide: true, duration: highlightsTotal, title: lenaEvening.title, sub: `${lenaEvening.meta} · вчера`, go: 'evening' }),
      ui.row({ lead: ui.leadIcon('history', { round: true }), title: dimaEvening.title, sub: `${dimaEvening.meta} · ${dimaEvening.day} · хайлайты у Димы` }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'evenings', mini: MINI }),
});
