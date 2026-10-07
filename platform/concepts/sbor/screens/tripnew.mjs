import { tripScreen } from './_shared.mjs';

/* Чат только что созданной поездки: пока пусто, первое сообщение системное */
export default (ui) => tripScreen(ui, { id: 'tripnew', initial: 'НП', name: 'Новая поездка', status: '4 участника', msgs: [
  ['sys', 'Вы создали поездку, 6–8 ноября'], ['sys', 'Лена, Игорь и Марат приглашены'],
] });
