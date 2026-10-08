import { sessionScreen } from './_shared.mjs';
import { sessions } from '../model.mjs';

export default (ui) => sessionScreen(ui, sessions.yesterday, { prev: '84 в понедельник' });
