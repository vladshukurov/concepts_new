import { THEME } from './_shared.mjs';
import { standup, recap, studio } from '../model.mjs';

/* Запись вчерашней летучки для тех, кого не было: собрана ночью на зарядке, главы по говорящим,
   «Слушать подряд в дороге» играет с погашенным экраном. Внизу — что договорились и что уже сделано */
const y = standup.yesterday;
export default (ui) => ui.screen({
  id: 'recap', theme: THEME,
  body: [
    ui.nav({ title: 'Запись летучки' }),
    ui.scroll([
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('film', { round: true, accent: true }), title: `Запись летучки ${y.dur} готова`, sub: `собрана ночью на зарядке: ${y.raw} → ${y.packed} · не были ${y.missed} из ${studio.people}` }),
        ui.row({ lead: ui.leadIcon('headphones', { round: true, accent: true }), title: 'Слушать подряд в дороге', sub: `${y.label} · ${y.dur}, по говорящим`, activate: 'audio|lockscreen' }),
      ]) }),
      ui.section({ title: 'По говорящим', meta: `${recap.chapters.length} глав`, children: ui.list(recap.chapters.map(([at, who, sub]) => ui.row({
        lead: ui.leadIcon('', { text: at }), title: who, sub,
      }))) }),
      ui.section({ title: 'Договорились вчера', meta: `${recap.agreed.filter((a) => a.done).length} из ${recap.agreed.length} сделано`, children: ui.checklist(recap.agreed) }),
    ]),
  ],
});
