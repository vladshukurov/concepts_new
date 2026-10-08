import { toneScreen } from './_shared.mjs';
import { song } from '../model.mjs';

/* Мелодия, только что вырезанная формой из сегодняшней записи: ещё никуда не назначена */
export default (ui) => toneScreen(ui, song, { fresh: true });
