import { pieceScreen, sessionRow } from './_shared.mjs';
import { pieces, sessions } from '../model.mjs';

/* «К Элизе»: фортепиано, занятия из «Файлов» */
export default (ui) => pieceScreen(ui, pieces.elise, { list: [sessionRow(sessions.eliseday, { piece: false })], notesArt: ['mt-art mt-n1'] });
