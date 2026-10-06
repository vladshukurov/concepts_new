import { THEME } from './_shared.mjs';
import { cookalong, step } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'cast', theme: THEME,
  body: [
    ui.nav({ title: 'Экран на кухне', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'В этой сети', children: ui.group({ cells: [
        ui.cell({ icon: 'tv', title: 'Кухня · Apple TV', sub: 'Та же сеть Wi‑Fi', activate: 'wifiinfo|cast' }),
        ui.cell({ icon: 'monitor', title: 'Гостиная · Smart TV', sub: 'Показ шагов', toast: 'Шаги показаны в гостиной' }),
      ] }) }),
      ui.denied('wifiinfo'),
      ui.section({ shownAfter: 'wifiinfo', children: ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Кухня · Apple TV подключена', sub: `Шаг ${step.n} из ${cookalong.steps} на экране` })]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Показать шаги', block: true, toast: `Шаг ${step.n} на экране кухни|kitchen`, primary: true })]) }),
    ]),
  ],
});
