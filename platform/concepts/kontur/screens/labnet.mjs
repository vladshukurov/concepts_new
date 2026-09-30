import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'labnet', theme: THEME,
  body: [
    ui.nav({ title: 'Сеть Lab-Red' }),
    ui.scroll([
      ui.section({ children: [
        ui.group({ cells: [
          ui.cell({ icon: 'wifi', title: 'Lab-Red', sub: 'Сканер Noritsu доступен', value: '5 ГГц' }),
          ui.cell({ icon: 'repeat-2', title: 'Проверить сеть', activate: 'wifiinfo|labnet', primary: true }),
        ] }),
        ui.denied('wifiinfo', 'Имя сети не читается — выберите лабораторию вручную'),
      ] }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Подключиться к Lab-Red', icon: 'wifi', variant: 'secondary', block: true, ask: 'hotspot|labnet|labnet' })]),
        ui.denied('hotspot', 'Подключитесь через Настройки iOS и вернитесь'),
      ] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'scan-line', title: 'Сканер', sub: 'Noritsu HS-1800 · свободен' }),
        ui.cell({ icon: 'clock', title: 'Последняя передача', sub: '12 файлов · сегодня 17:46' }),
      ] }) }),
    ]),
  ],
});
