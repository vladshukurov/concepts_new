import { THEME } from './_shared.mjs';
import { exhibit } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'exhibit', theme: THEME,
  body: [
    ui.nav({ title: 'Экран выставки' }),
    ui.scroll([
      ui.section({ children: `<div class="sh-head"><small>До ${exhibit.until}</small><strong>${exhibit.title}</strong><span>Свои зарисовки — на общем экране площадки, пока вы здесь</span></div>` }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Я на выставке', icon: 'map-pin', block: true, activate: 'wifiinfo|exhibit', primary: true }),
          ui.button({ label: 'Подключиться к сети площадки', icon: 'wifi', variant: 'secondary', block: true, ask: 'hotspot|exhibit|exhibit' }),
          ui.button({ label: 'Код со стойки', icon: 'qr-code', variant: 'tertiary', block: true, go: 'scan' }),
        ]),
        ui.denied('hotspot'),
        ui.list([
          ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `Подключено к ${exhibit.network}`, sub: 'Сеть площадки до закрытия выставки', shownAfter: 'hotspot' }),
          ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Вы на выставке', sub: '3 ваши зарисовки на общем экране', shownAfter: 'wifiinfo' }),
        ]),
      ] }),
    ]),
  ],
});
