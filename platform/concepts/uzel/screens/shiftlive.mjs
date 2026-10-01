import { THEME } from './_shared.mjs';
import { shift, workshops } from '../model.mjs';

const log = [['19:41', 'Тостер Т‑18 передан на измерение'], ['19:26', 'Лампа Л‑74 подключена через защитный стенд'], ['19:08', 'Рабочие места отмечены безопасными'], ['18:30', 'Смена открыта · 8 участников']];
export default (ui) => ui.screen({
  id: 'shiftlive', theme: THEME,
  body: [
    ui.nav({ title: 'Ход смены' }),
    ui.scroll([
      ui.section({ children: `<div class="uz-live"><small><i></i>Идёт · ${workshops.revers.name}</small><strong>${shift.elapsed}</strong><span>Сейчас: проверка лампы Л‑74 — новый абажур, контроль устойчивости</span></div>` }),
      ui.section({ title: 'Сегодня', children: ui.list(log.map(([t, s]) => ui.row({ lead: `<span class="uz-ts">${t}</span>`, title: s, wrap: true }))) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Написать в чат смены', icon: 'message-circle', variant: 'secondary', block: true, go: 'chat', primary: true })]) }),
    ]),
  ],
});
