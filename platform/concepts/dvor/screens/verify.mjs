import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'verify', theme: THEME,
  body: [
    ui.nav({ title: 'Проверка', back: 'close' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'wifi', title: 'Сеть', value: 'Polevaya-12' }),
        ui.cell({ icon: 'house', title: 'В профиле дома', value: 'Polevaya-12' }),
        ui.cell({ icon: 'circle-check', title: 'Совпало', value: 'да' }),
        ui.cell({ icon: 'map-pin', title: 'До дома', value: '38 м из 150' }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Проверить сеть', icon: 'wifi', block: true, activate: 'wifiinfo|home' })]) }),
    ]),
  ],
});
