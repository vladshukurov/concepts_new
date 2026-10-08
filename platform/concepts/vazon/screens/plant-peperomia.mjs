import { plantScreen } from './_shared.mjs';
import { own } from '../model.mjs';

export default (ui) => plantScreen(ui, 'peperomia', {
  care: [ui.row({ lead: ui.leadIcon('cloud-sun'), title: 'Подоконник на юг', sub: 'Летом притеняла, сейчас света хватает' })],
  extra: [ui.section({ children: ui.entry({ icon: 'mic', title: own.peperVoice.title, meta: `${own.peperVoice.when} · голосовая заметка`, voice: { dur: own.peperVoice.dur } }) })],
  growth: [
    ui.row({ thumb: 'ph', title: 'Октябрь · три новых побега', sub: 'Снято 6 октября' }),
    ui.row({ thumb: 'ph', title: 'Август · подрезала', sub: 'Черенки укоренились в воде за 12 дней' }),
  ],
});
