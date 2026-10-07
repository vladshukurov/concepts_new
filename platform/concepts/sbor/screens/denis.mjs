import { dmScreen } from './_shared.mjs';
import { people } from '../model.mjs';

/* Личный чат с Денисом: он в пути к отелю */
export default (ui) => dmScreen(ui, { id: 'denis', person: people.denis, status: 'в пути', msgs: [
  ['day', 'Сегодня'], ['me', 'Денис, где ты? Сбор в 10:00', '9:36'],
  ['in', 'Иду от Лядского сада, 400 м, успеваю', '9:38'],
] });
