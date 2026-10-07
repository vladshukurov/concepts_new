import { gameCard } from './_shared.mjs';

export default (ui) => gameCard(ui, { id: 'game-island', title: 'Остров сокровищ', sub: '3–5 игроков · 50 минут · есть у Маши', rows: [
  ['user', 'Принесёт Маша', 'Коробка у неё, правила объяснит Илья'],
  ['calendar', 'Ближайший стол', 'Суббота, «Маршруты Севера» — других игр там нет'],
] });
