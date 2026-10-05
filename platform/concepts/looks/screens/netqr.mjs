import { THEME } from './_shared.mjs';
import { swap } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'netqr', theme: THEME,
  body: [
    ui.nav({ title: 'Сеть площадки' }),
    ui.scroll([
      ui.section({ children: [
        ui.list([ui.row({ lead: ui.leadIcon('qr-code', { round: true }), title: swap.network, sub: `Код со стойки у входа · ${swap.networkUntil}` })]),
        ui.actions([ui.button({ label: 'Подключиться', icon: 'wifi', block: true, ask: 'hotspot|netqr|netqr', primary: true })]),
        ui.denied('hotspot'),
        ui.list([ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: 'Подключено', sub: `${swap.network} · сигнал отличный`, shownAfter: 'hotspot' })]),
      ] }),
      ui.section({ title: 'Сети площадок', children: ui.group({ cells: [
        ui.cell({ icon: 'wifi', title: 'Новая Голландия', value: 'рядом' }),
        ui.cell({ icon: 'wifi', title: 'Двор на Рубинштейна', value: 'не видно' }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Вернуться к отметке', variant: 'secondary', block: true, go: 'checkin' })]) }),
    ]),
  ],
});
