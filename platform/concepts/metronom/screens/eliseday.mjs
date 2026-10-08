import { sessionScreen } from './_shared.mjs';
import { sessions } from '../model.mjs';

export default (ui) => sessionScreen(ui, sessions.eliseday, { prev: '80 неделю назад' });
