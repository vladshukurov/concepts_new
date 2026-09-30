import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'netqr', theme: THEME,
  body: [
    ui.nav({ title: 'Сеть площадки' }),
    ui.scroll([
      `<div class="lk-qr"><span class="lk-qr-code">${ui.icon('qr-code')}</span><span><strong>Novaya-Gollandia-Guest</strong><span>Код со стойки у входа · до 21:52</span></span></div>`,
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Подключиться', icon: 'wifi', block: true, ask: 'hotspot|netqr|netqr', primary: true })]),
        ui.granted('hotspot', 'Вы в сети площадки'),
        ui.denied('hotspot', 'Сеть выбирается вручную в Настройках iPhone'),
      ] }),
      ui.section({ title: 'Сети площадок', children: ui.group({ cells: [
        ui.cell({ icon: 'wifi', title: 'Новая Голландия', value: 'рядом' }),
        ui.cell({ icon: 'wifi', title: 'Двор на Рубинштейна', value: 'не видно' }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Вернуться к отметке', variant: 'secondary', block: true, go: 'checkin' })]) }),
    ]),
  ],
});
