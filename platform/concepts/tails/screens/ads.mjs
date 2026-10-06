import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: '', back: 'close' }),
    ui.scroll([
      `<div class="tl-note-head"><h2>Реклама вместо подписки</h2><p>Корма, ветклиники и зоомагазины между записями дневника</p></div>`,
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'badge-check', title: 'По интересам' }),
        ui.cell({ icon: 'shield', title: 'Без подбора', value: '41 показ за неделю', check: true }),
      ] }) }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Продолжить', block: true, primary: true, ask: 'tracking|home|ads' }),
        ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true, back: true }),
      ]) }),
    ]),
  ],
});
