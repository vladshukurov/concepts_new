import { THEME } from './_shared.mjs';
import { exhibit } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'exhibit', theme: THEME,
  body: [
    ui.nav({ title: 'Экран выставки' }),
    ui.scroll([
      ui.section({ children: `<div class="sh-head"><small>До ${exhibit.until}</small><strong>${exhibit.title}</strong><span>Работы рядом показываются на общем экране площадки</span></div>` }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Я на выставке', icon: 'map-pin', block: true, activate: 'wifiinfo|exhibit', primary: true }),
          ui.button({ label: `Подключиться к ${exhibit.network}`, icon: 'wifi', variant: 'secondary', block: true, ask: 'hotspot|exhibit|exhibit' }),
          ui.button({ label: 'Код со стойки', icon: 'qr-code', variant: 'tertiary', block: true, go: 'scan' }),
        ]),
        ui.denied('hotspot'),
      ] }),
    ]),
  ],
});
