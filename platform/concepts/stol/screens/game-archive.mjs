import { gameCard } from './_shared.mjs';

export default (ui) => gameCard(ui, { id: 'game-archive', title: 'Архив острова', sub: '1–4 игрока · кооператив · 90 минут', rows: [
  ['volume-2', 'Памятка вслух', 'Правила и порядок хода', 'audio'],
  ['user', 'С кем играть', 'Женя принесёт её в четверг'],
] });
