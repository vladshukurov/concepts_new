import { THEME, TABS, MINI } from './_shared.mjs';
import { voices, byVoice, records } from '../model.mjs';

/* Голоса семьи: кто записывает колыбельные и сказки */
export default (ui) => ui.screen({
  id: 'voices', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Голоса'),
    ui.section({ children: ui.list(Object.values(voices).map((v) => {
      const list = byVoice(v);
      return ui.row({ lead: ui.avatar(v.initial), title: v.title, sub: `${v.name} · ${records(list.length)} · последняя ${list[0].when}`, go: v.id });
    })) }),
    ui.section({ children: ui.foot('Запишите в «Диктофоне» и пришлите файл — добавить его можно через «+» в «Колыбельных»') }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'voices', mini: MINI }),
});
