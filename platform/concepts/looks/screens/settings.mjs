import { THEME, swapText } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 ··· 45 67', go: 'account' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Лукбук', cells: [
        ui.cell({ icon: 'shirt', title: 'Размеры', value: 'RU', menu: ['RU', 'EU', 'US'] }),
        ui.cell({ icon: 'cloud-sun', title: 'Температура', value: '°C', menu: ['°C', '°F'] }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: swapText('tracking', 'Без подбора', 'По интересам'), go: 'ads' }),
      ] }) }),
    ]),
  ],
});
