import { plantScreen } from './_shared.mjs';
import { saturday } from '../model.mjs';

/* Фикус поливают по субботам: напоминание ставится прямо на его карточке */
export default (ui) => plantScreen(ui, 'ficus', {
  care: [
    ui.row({ lead: ui.leadIcon('flask-conical'), title: 'Подкормка 3 октября', sub: 'Половина дозы · следующая в марте' }),
    ui.row({ lead: ui.leadIcon('droplets'), title: 'Сколько воды', sub: '300 мл, до стока в поддон' }),
  ],
  extra: [
    ui.section({ title: 'Не забыть', children: [
      ui.list([ui.reminder({ title: 'Напомнить полить фикус в субботу', titleGranted: `Напомним в субботу, ${saturday.short}, в 10:00 — 300 мл`, sub: 'Фикус не любит пересыхания — сбрасывает листья', here: 'plant-ficus' })]),
    ] }),
  ],
  growth: [
    ui.row({ thumb: 'ph', title: 'Сентябрь · 1,4 м', sub: 'Сбросил 6 листьев после переезда к балкону' }),
    ui.row({ thumb: 'ph', title: 'Май · 1,3 м', sub: 'Обрезала верхушку, пошли боковые' }),
  ],
});
