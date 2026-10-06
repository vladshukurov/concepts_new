import { THEME } from './_shared.mjs';
import { city } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'join', theme: THEME,
  body: [
    ui.nav({ title: 'Шаг 1 из 1', back: false, trailing: ui.textButton({ label: 'Пропустить', go: 'home' }) }),
    ui.scroll([
      ui.section({ children: '<div class="sh-head"><strong>Где вы рисуете?</strong><span>Покажем встречи вашего города</span></div>' }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('map-pin', { accent: true }), title: city.name, sub: '3 встречи в сентябре' }),
      ]) }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Алматы, верно', block: true, go: 'home', primary: true }),
          ui.button({ label: 'Другой город', variant: 'tertiary', block: true, go: 'manual' }),
        ]),
      ] }),
    ]),
  ],
});
