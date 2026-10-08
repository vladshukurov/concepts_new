import { seriesScreen } from './_series.mjs';
import { routes } from '../model.mjs';

/* Серия «Северный мол»: одна вылазка, фильм ещё собирается из роликов Артёма */
const r = routes.pier;
export default (ui) => seriesScreen(ui, {
  id: 'pier', route: r, note: `1 вылазка · ${r.clips} роликов · 20 сентября`,
  trips: [
    ui.row({ lead: ui.leadIcon('film', { round: true, accent: true }), title: 'Вылазка 1 · 20 сентября', sub: 'Фильм 7:05 собирается · 4 из 6 роликов загружены' }),
  ],
});
