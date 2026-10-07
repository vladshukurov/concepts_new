import { own } from '../model.mjs';
import { THEME } from './_shared.mjs';

/* Сохранённое открывается по Face ID: мерки и размеры — самое личное в гардеробе */
export default (ui) => ui.screen({
  id: 'lock', theme: THEME,
  body: [
    ui.nav({ title: 'Сохранённое' }),
    ui.scroll([
      ui.section({ title: 'Мерки и размеры', meta: 'обновлены в апреле', children: ui.list(own.sizes.map(([t, v]) => ui.row({ title: t, sub: v }))) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'bookmark', title: 'Сохранённые образы', value: String(own.saved.looks) }),
        ui.cell({ icon: 'file-text', title: 'Черновики', value: String(own.saved.drafts) }),
        ui.cell({ icon: 'clock', title: 'Закрывать', value: 'Сразу', menu: ['Сразу', 'Через минуту', 'Через 15 минут'] }),
      ] }) }),
    ]),
  ],
});
