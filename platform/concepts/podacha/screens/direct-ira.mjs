import { plainDirect } from './_shared.mjs';

export default (ui) => plainDirect(ui, { id: 'direct-ira', initial: 'ИЧ', name: 'Ира Чен', status: 'была в 9', items: [
  ui.day('Сегодня'),
  ui.bubble({ out: true, text: '12', time: '9:02', read: true }),
  ui.bubble({ text: 'Ира, что берём к пятнице?:Я принесу груши', time: '9:10' }),
] });
