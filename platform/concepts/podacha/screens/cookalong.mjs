import { THEME } from './_shared.mjs';
import { cookalong, step } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'cookalong', theme: THEME,
  body: [
    ui.nav({ title: 'Готовим вместе' }),
    ui.scroll([
      `<div class="pd-head"><small>Сегодня · ${cookalong.start}</small><h1>${cookalong.title}</h1><p class="ui-sub">Амина ведёт · 8 участников подготовились</p></div>`,
      ui.section({ title: 'Сейчас', children: [
        `<div class="pd-now"><b>${step.label}</b><span><strong>${step.title}</strong><span>Осталось ${step.timer} · ${step.fire}</span></span></div>`,
        ui.actions([
          ui.button({ label: 'Открыть все шаги', block: true, go: 'steps', primary: true }),
          ui.button({ label: 'Чат ужина · 4 новых', icon: 'message-circle', variant: 'secondary', block: true, go: 'conversation' }),
        ], { className: 'pd-gap' }),
      ] }),
      ui.section({ title: 'На телефоне', children: ui.list([
        ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: `Шаги скачаны · ${cookalong.steps} из ${cookalong.steps}`, sub: 'С таймерами — готовить можно без сети' }),
        ui.row({ lead: ui.leadIcon('users'), title: 'Участники', sub: 'Амина, вы, Тимур, Жанна и ещё 4 · у всех шаг 2' }),
      ]) }),
    ]),
  ],
});
