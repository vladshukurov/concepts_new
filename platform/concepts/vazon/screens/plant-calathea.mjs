import { plantScreen } from './_shared.mjs';
import { own } from '../model.mjs';

/* Калатея: листья желтеют — голосовая заметка, пока держишь лист в руках */
export default (ui) => plantScreen(ui, 'calathea', {
  care: [
    ui.row({ lead: ui.leadIcon('triangle-alert', { accent: true }), title: 'Листья желтеют по краям', sub: 'Третий лист за неделю · сухой воздух от батареи' }),
    ui.row({ lead: ui.leadIcon('droplets'), title: 'Вода', sub: 'Только отстоянная, комнатной температуры' }),
  ],
  extra: [
    ui.section({ title: 'Заметки', children: [
      ui.group({ cells: [ui.cell({ icon: 'mic', title: 'Записать, что с листьями', sub: 'Голосом, пока держите лист в руках', ask: 'mic|voice|plant-calathea' })] }),
      ui.denied('mic'),
    ] }),
    ui.section({ shownAfter: 'mic', children: ui.entry({ icon: 'mic', title: own.yellow.title, meta: 'сегодня · голосовая заметка', voice: { dur: own.yellow.dur } }) }),
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('message-circle'), title: 'Спросить Иру', sub: 'Она держит калатеи пятый год', go: 'direct-ira' }),
    ]) }),
  ],
  growth: [
    ui.row({ thumb: 'ph', title: 'Сентябрь · 9 листьев', sub: 'Два новых, один подсох' }),
    ui.row({ thumb: 'ph', title: 'Июль · 8 листьев', sub: 'Куплена в «Флоре» на Баумана' }),
  ],
});
