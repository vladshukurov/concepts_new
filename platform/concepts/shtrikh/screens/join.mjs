import { THEME } from './_shared.mjs';
import { city } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'join', theme: THEME,
  body: [
    ui.nav({ title: 'Шаг 1 из 1', back: false, trailing: ui.textButton({ label: 'Пропустить', go: 'home' }) }),
    ui.scroll([
      ui.section({ children: '<div class="sh-head"><strong>Где вы рисуете?</strong><span>Покажем работы, места и встречи вашего города</span></div>' }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('map-pin', { accent: true }), title: city.name, sub: `${city.authors} автора рядом · ${city.places} мест с сериями` }),
      ]) }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Определить город', icon: 'navigation', block: true, ask: 'location|home|manual', primary: true }),
          ui.button({ label: 'Выбрать вручную', variant: 'tertiary', block: true, go: 'manual' }),
        ]),
        ui.denied('location', 'Город выбирается из списка'),
      ] }),
    ]),
  ],
});
