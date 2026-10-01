import { THEME } from './_shared.mjs';
import { route, longrun } from '../model.mjs';

const parts = [['0,0', 'Central Club', 'Вода до 08:00'], ['2,8', 'Восточный мост', 'Лёд — объезд справа'], ['5,2', '600 метров в темпе', 'Голосовая подсказка Ильи'], ['8,2', 'Возвращение к клубу', 'Заминка во дворе']];
export default (ui) => ui.screen({
  id: 'player', theme: THEME,
  body: [
    ui.nav({ title: `${route.name} · ${route.km} км` }),
    ui.scroll([
      ui.section({ children: `<div class="ry-run"><div class="ry-run-km"><strong>${route.done} км</strong><span>осталось ${route.left} км</span></div>${ui.progress({ fillClass: 'ry-w-30' })}<div class="ry-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Повторить подсказку', toast: 'Подсказка повторена' })}${ui.button({ label: 'Начать', icon: 'play', activate: 'audio|background', primary: true })}${ui.iconButton({ icon: 'skip-forward', label: 'Следующий отрезок', toast: 'Следующий отрезок · Восточный мост' })}</div></div>` }),
      ui.section({ title: 'Отрезки', meta: String(parts.length), children: ui.list(parts.map(([km, t, s]) => ui.row({ lead: `<span class="ry-km">${km}</span>`, title: t, sub: s }))) }),
    ]),
  ],
});
