import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'cast', theme: THEME,
  body: [
    ui.nav({ title: 'Экран на кухне', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'В этой сети', children: ui.group({ cells: [
        ui.cell({ icon: 'tv', title: 'Кухня · Apple TV', sub: 'Та же сеть Wi‑Fi', activate: 'wifiinfo|cast' }),
        ui.cell({ icon: 'monitor', title: 'Гостиная · Smart TV', sub: 'Показ шагов', toast: 'Шаги показаны в гостиной' }),
      ] }) }),
      ui.granted('wifiinfo', 'Кухня · Apple TV в вашей сети'),
      ui.denied('wifiinfo', 'Выберите экран по названию устройства'),
      ui.section({ children: ui.actions([ui.button({ label: 'Показать шаги', block: true, toast: 'Шаг 3 на кухонном экране|kitchen', primary: true })]) }),
    ]),
  ],
});
