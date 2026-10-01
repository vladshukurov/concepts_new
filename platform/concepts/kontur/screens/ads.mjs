import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Предложения' }),
    ui.scroll([
      `<div class="kt-batch"><h1>Плёнка и печать рядом</h1><p class="ui-sub">Реклама магазинов и мастерских Алматы</p></div>`,
      ui.section({ children: `<div class="kt-offer"><span class="ui-thumb ph"></span><span class="ui-row-text"><strong>Свежая HP5 в Медеу</strong><span>Самовывоз сегодня · предложение без подбора</span></span></div>` }),
      ui.denied('tracking', 'Предложения остаются, но без подбора по интересам'),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Персонализировать предложения', block: true, primary: true, ask: 'tracking|profile|ads' }),
        ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, go: 'profile' }),
      ]) }),
    ]),
  ],
});
