import { pieceScreen } from './_shared.mjs';
import { pieces } from '../model.mjs';

/* Greensleeves: три занятия, записи ещё в «Диктофоне», ноты — табы */
export default (ui) => pieceScreen(ui, pieces.green, { extra: [ui.section({ children: ui.foot('Три занятия без записи — темп отмечен вручную') })], notesArt: ['mt-art mt-n2'] });
