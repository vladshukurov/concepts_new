import { THEME } from './_shared.mjs';
import { score, club } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'cast', theme: THEME,
  body: [
    ui.nav({ title: 'Счёт на экране' }),
    ui.scroll([
      ui.section({ title: 'Что увидят игроки', children: `<div class="st-screen"><strong>${score.players[0][2]}</strong><span>${score.players[0][0]} лидирует · ${score.players.slice(1).map(([n, , p]) => `${n} ${p}`).join(' · ')} · раунд ${score.round}</span></div>` }),
      ui.section({ children: [
        ui.group({ label: 'Экран клуба', cells: [
          ui.cell({ icon: 'tv', title: 'Экран у большого стола', sub: 'AirPlay · готов к показу', toast: 'Счёт на экране у большого стола' }),
          ui.cell({ icon: 'repeat-2', title: 'Проверить сеть', activate: 'wifiinfo|cast' }),
        ] }),
        ui.list([ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `Вы в сети ${club.network}`, sub: 'Экран клуба в той же сети', shownAfter: 'wifiinfo' })]),
      ] }),
      ui.section({ children: ui.actions([ui.button({ label: 'Вернуться к счёту', variant: 'secondary', block: true, go: 'score', primary: true })]) }),
    ]),
  ],
});
