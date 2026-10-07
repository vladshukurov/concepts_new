import { THEME } from './_shared.mjs';
import { route, parts } from '../model.mjs';

/* Подсказки по таймеру отрезка: плеер играет свою запись на нужной минуте, GPS не нужен */
export default (ui) => ui.screen({
  id: 'player', theme: THEME,
  body: [
    ui.nav({ title: `${route.name} · ${route.km} км` }),
    ui.scroll([
      ui.section({ children: `<div class="ry-run"><div class="ry-run-km"><strong>${route.km} км</strong><span>${route.minutes} минут с подсказками</span></div><div class="ry-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Повторить подсказку', toast: 'Подсказка повторена' })}${ui.button({ label: 'Начать', icon: 'play', activate: 'audio|background', primary: true })}${ui.iconButton({ icon: 'skip-forward', label: 'Следующий отрезок', toast: `Следующий отрезок · ${parts[1][1]}` })}</div></div>` }),
      ui.section({ title: 'Отрезки', meta: String(parts.length), children: ui.list(parts.map(([km, t, s]) => ui.row({ lead: `<span class="ry-km">${km}</span>`, title: t, sub: s }))) }),
    ]),
  ],
});
