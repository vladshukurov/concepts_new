import { dmScreen } from './_shared.mjs';

/* Диалог с Денисом из 79-й: ремонт до мая */
export default (ui) => dmScreen(ui, { id: 'chatdenis', initial: 'ДН', name: 'Денис, кв. 79', status: 'был 1 апреля', msgs: [
  ['day', '1 апреля'], ['in', 'Шуметь будем до 19:00, простите', '12:04'],
  ['me', 'Спасибо, что предупредили', '12:20'],
] });
