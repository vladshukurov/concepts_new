import { THEME } from './_shared.mjs';
import { workshops } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'nearby', theme: THEME,
  body: [
    ui.nav({ title: 'Мастерские рядом' }),
    ui.scroll([
      ui.section({ title: 'Открыты сегодня', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: workshops.revers.distance }), title: workshops.revers.name, sub: `${workshops.revers.address} · до ${workshops.revers.until}`, go: 'workshop' }),
        ui.row({ lead: ui.leadIcon('', { text: workshops.electro.distance }), title: workshops.electro.name, sub: `${workshops.electro.address} · суббота`, go: 'workshop' }),
      ]) }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Я у мастерской', icon: 'navigation', block: true, ask: 'location|verify|nearby', primary: true })]),
        ui.denied('location', 'Выберите мастерскую вручную — дежурный подтвердит участие'),
      ] }),
    ]),
  ],
});
