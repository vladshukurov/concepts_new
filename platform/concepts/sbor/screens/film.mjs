import { viewScreen } from './_shared.mjs';
import { film } from '../model.mjs';
export default (ui) => viewScreen(ui, { id: 'film', title: `Фильм пятницы ${film.fri.dur}`, icon: 'film', sub: `${film.fri.frames} кадров и ${film.fri.circles} кружка · собран в 3:12` });
