import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'manual', theme: THEME,
  body: [
    ui.nav({ title: 'Добавить дом' }),
    ui.scroll([
      ui.denied('location'),
      ui.section({ children: [
        `<label class="dv-field"><span>Улица</span><input value="Полевая" aria-label="Улица"></label>`,
        `<label class="dv-field"><span>Дом</span><input value="12" inputmode="numeric" aria-label="Дом"></label>`,
      ] }),
      ui.section({ title: 'Похожие адреса', children: ui.list([
        ui.row({ lead: ui.leadIcon('house', { accent: true }), title: 'Полевая, 12', sub: '3 корпуса · 214 квартир · 18 жильцов здесь', go: 'home' }),
        ui.row({ lead: ui.leadIcon('house'), title: 'Полевая, 12к2', sub: '1 корпус · 96 квартир', go: 'home' }),
        ui.row({ lead: ui.leadIcon('house'), title: 'Полевой переулок, 12', sub: 'Частный дом · чата подъезда нет', go: 'home' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить дом', block: true, go: 'home' })]) }),
    ]),
  ],
});
