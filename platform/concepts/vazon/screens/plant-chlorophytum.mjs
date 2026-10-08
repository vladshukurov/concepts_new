import { plantScreen } from './_shared.mjs';
import { repot, swap } from '../model.mjs';

export default (ui) => plantScreen(ui, 'chlorophytum', {
  care: [ui.row({ lead: ui.leadIcon('layers', { accent: true }), title: repot.title, sub: `${repot.when} · горшок ${repot.pot}`, go: 'repot' })],
  extra: [ui.section({ title: 'Детки', children: ui.list([
    ui.row({ lead: ui.leadIcon('arrow-left-right', { round: true, accent: true }), title: 'Одна — Ире', sub: `Обмен на ${swap.get} · ${swap.when}`, go: 'direct-ira' }),
    ui.row({ lead: ui.leadIcon('trees', { round: true }), title: 'Две — в стакане с водой', sub: 'Корешки 1–2 см · сажать через неделю' }),
  ]) })],
  growth: [ui.row({ thumb: 'ph', title: 'Октябрь · после пересадки', sub: 'Снято 5 октября' })],
});
