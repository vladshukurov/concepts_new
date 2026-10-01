import { THEME } from './_shared.mjs';
import { score, club } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'cast', theme: THEME,
  body: [
    ui.nav({ title: 'Общий экран' }),
    ui.scroll([
      ui.section({ title: 'Что увидят игроки', children: `<div class="st-screen"><strong>${score.players[0][1]}</strong><span>${score.players[0][0]} лидирует · ${score.players.slice(1).map(([n, p]) => `${n} ${p}`).join(' · ')} · раунд ${score.round}</span></div>` }),
      ui.section({ children: [
        ui.group({ label: `Сеть ${club.network}`, cells: [
          ui.cell({ icon: 'tv', title: 'Экран у большого стола', sub: 'Готов к показу', ask: 'localnetwork|cast|cast' }),
          ui.cell({ icon: 'repeat-2', title: 'Проверить сеть', activate: 'wifiinfo|cast' }),
        ] }),
        ui.granted('localnetwork', 'Табло на экране у большого стола'),
        ui.granted('wifiinfo', `Вы в сети ${club.network} · экран рядом`),
        ui.denied('localnetwork', 'Табло остаётся на телефоне'),
      ] }),
      ui.section({ children: ui.actions([ui.button({ label: 'Вернуться к счёту', variant: 'secondary', block: true, go: 'score', primary: true })]) }),
    ]),
  ],
});
