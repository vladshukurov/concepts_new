import { pieceScreen } from './_shared.mjs';
import { pieces } from '../model.mjs';

/* Выученная пьеса: цель достигнута, занятия остаются в истории */
export default (ui) => pieceScreen(ui, pieces.etude, { extra: [ui.section({ children: ui.list([ui.row({ lead: `<span class="ui-thumb mt-ico is-accent">${ui.icon('trophy')}</span>`, title: 'Выучено 29 сентября', sub: 'цель 120 ударов взята на 14-м занятии' })]) })], notesArt: ['mt-art mt-n3'] });
