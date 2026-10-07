import { dmScreen } from './_shared.mjs';
import { people } from '../model.mjs';

/* Личный чат со Светой, которая ещё не отметилась на перекличке */
export default (ui) => dmScreen(ui, { id: 'sveta', person: people.sveta, status: 'не в сети с 7:58', msgs: [
  ['day', 'Сегодня'], ['me', 'Света, сбор в 10:00 у отеля, ты спускаешься?', '9:18'],
  ['me', 'Позвонила, не берёшь. Отметься, как увидишь', '9:30'],
] });
