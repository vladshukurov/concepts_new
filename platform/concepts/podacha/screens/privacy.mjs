import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'privacy', theme: THEME,
  body: [
    ui.nav({ title: 'Конфиденциальность' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Звонки и заметки', cells: [
        ui.cell({ icon: 'phone', title: 'Звонки ужина', value: 'Только знакомые' }),
        ui.cell({ icon: 'mic', title: 'Голосовые заметки', value: 'Только на телефоне' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Реклама', cells: [
        ui.cell({ icon: 'sparkles', title: 'Настроить рекомендации', toggle: false, ask: 'tracking|privacy|privacy' }),
      ] }) }),
      ui.denied('tracking'),
      ui.section({ children: ui.actions([ui.button({ label: 'Открыть политику', variant: 'tertiary', block: true, toast: 'vkusno.app/privacy', primary: true })]) }),
    ]),
  ],
});
