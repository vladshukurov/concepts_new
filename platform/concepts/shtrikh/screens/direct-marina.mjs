import { directScreen } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => directScreen(ui, { id: 'direct-marina', person: people.marina, status: 'была 14 сентября', msgs: [
  ['day', '14 сентября'], ['me', 'Приду пораньше, займу место у часов', '9:05'],
  ['in', 'Отлично, я буду к девяти', '9:12'],
] });
