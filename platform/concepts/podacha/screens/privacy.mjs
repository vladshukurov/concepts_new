import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'privacy', theme: THEME,
  body: [
    ui.nav({ title: 'Конфиденциальность' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Публикации', cells: [
        ui.cell({ icon: 'eye', title: 'Кто видит публикации', value: 'Все', toast: 'Публикации видны всем' }),
        ui.cell({ icon: 'map-pin', title: 'Место в публикациях', value: 'Район', toast: 'Показываем только район' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Реклама', cells: [
        ui.cell({ icon: 'sparkles', title: 'Персональные рекомендации', toggle: false, ask: 'tracking|privacy|privacy' }),
      ] }) }),
      ui.denied('tracking', 'Реклама остаётся контекстной'),
      ui.section({ children: ui.actions([ui.button({ label: 'Открыть политику', variant: 'tertiary', block: true, toast: 'podacha.app/privacy', primary: true })]) }),
    ]),
  ],
});
