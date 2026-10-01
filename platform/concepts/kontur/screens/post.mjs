import { THEME, sheet, kit } from './_shared.mjs';
import { batch } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Контакт-лист', trailing: ui.iconButton({ icon: 'share', label: 'Поделиться листом', toast: 'Ссылка на лист скопирована' }) }),
    ui.scroll([
      `<div class="kt-batch"><small>Лист № ${batch.id} · проявлено ${batch.developed}</small><h1>36 кадров после дождя</h1><p class="ui-sub">Сначала искала отражения, потом оставила только переходы между сухим и мокрым асфальтом</p></div>`,
      ui.section({ children: [sheet(36, [4, 11, 12, 19, 23, 27, 30, 33, 35]), `<div class="kt-sheet-cap"><span>Отмечено 9</span><span>К печати 3</span></div>`, kit('Olympus XA', 'Ilford HP5', 'EI 800', 'DD-X 1+4', '20 °C')] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.avatar('ДС'), title: 'Дана Садыкова', sub: 'Самал-2 · 4 общие прогулки', go: 'photographer' }),
      ]) }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Передать автору материал', icon: 'send', block: true, primary: true, go: 'handoff' }),
        ui.button({ label: 'Открыть практику Даны', variant: 'tertiary', block: true, go: 'photographer' }),
      ]) }),
    ]),
  ],
});
