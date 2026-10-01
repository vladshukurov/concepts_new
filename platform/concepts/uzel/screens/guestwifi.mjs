import { THEME } from './_shared.mjs';
import { workshops, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'guestwifi', theme: THEME,
  body: [
    ui.nav({ title: 'Гостевой Wi‑Fi', back: 'close' }),
    ui.scroll([
      ui.section({ children: ui.list([ui.row({ lead: ui.leadIcon('wifi', { accent: true }), title: workshops.revers.network, sub: `Пароль обновил ${people.pavel.name} сегодня` })]) }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Подключиться', icon: 'wifi', block: true, ask: 'hotspot|guestwifi|guestwifi', primary: true })]),
        ui.granted('hotspot', `Вы в сети ${workshops.revers.network}`),
        ui.denied('hotspot', `Выберите ${workshops.revers.network} в Настройках iPhone`),
      ] }),
    ]),
  ],
});
