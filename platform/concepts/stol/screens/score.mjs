import { THEME } from './_shared.mjs';
import { score, tonight } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'score', theme: THEME,
  body: [
    ui.nav({ title: `Счёт · раунд ${score.round}`, trailing: ui.iconButton({ icon: 'tv', label: 'Показать на экране', go: 'cast' }) }),
    ui.scroll([
      ui.section({ title: tonight.game, children: `<div class="st-board">${score.players.map(([name, ini, pts, st], i) => `<div class="st-player${i === 1 ? ' is-now' : ''}">${ui.avatar(ini)}<span class="ui-row-text"><strong>${name}</strong><span>${st}</span></span>${ui.iconButton({ icon: 'minus', label: `Минус очко: ${name}`, look: 'fill', toast: 'Минус одно очко' })}<span class="st-points">${pts}</span>${ui.iconButton({ icon: 'plus', label: `Плюс очко: ${name}`, look: 'fill', toast: 'Плюс одно очко' })}</div>`).join('')}</div>` }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Назвать счёт', icon: 'mic', block: true, ask: 'speech+mic|score|score', primary: true })]),
        ui.denied('speech,mic'),
        ui.list([ui.row({ lead: ui.leadIcon('mic', { round: true, accent: true }), title: 'Голос записан · 0:02', sub: '«Илье плюс четыре»', shownAfter: 'mic' })]),
        ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Счёт обновлён', sub: 'Распознано · Илья 68', shownAfter: 'speech' })]),
      ] }),
    ]),
  ],
});
