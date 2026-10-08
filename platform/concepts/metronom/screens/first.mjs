import { sessionScreen } from './_shared.mjs';
import { sessions } from '../model.mjs';

/* Первое занятие «Испанским романсом» — отсюда считается «было 72» */
export default (ui) => sessionScreen(ui, sessions.first, { extra: [ui.section({ children: ui.foot('Первое занятие этой пьесы') })] });
