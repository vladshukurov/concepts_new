import { THEME } from './_shared.mjs';
import { standup, queue, agreed, agreedNext, updates } from '../model.mjs';

/* Режим летучки: очередь говорящих, у каждого 2 минуты. «Пауза» останавливает таймер, «Дальше» передаёт слово
   следующему — всё на месте. Решения по ходу — в «Договорились» с ответственным */
const speaker = (ui, { p, about, note }, i) =>
  `<div class="lt-spk"><div class="lt-spk-head">${ui.avatar(p.initial)}<span><strong>${p.name}</strong><span>${about}</span></span><span class="lt-spk-n">${i + 1}</span><span class="lt-spk-done">${ui.icon('check')}</span></div>`
  + `<div class="lt-spk-live"><p>${note}</p><div class="lt-clock"><span class="lt-timer" role="timer" aria-label="2 минуты на человека"></span><i class="lt-clock-bar"><i></i></i></div>`
  + `<div class="lt-spk-ctl"><button class="ui-btn is-secondary lt-pause" data-toggle="on" aria-pressed="false" aria-label="Пауза">${ui.icon('pause')}<span class="lt-pause-a">Пауза</span><span class="lt-pause-b">Продолжить</span></button>`
  + `<button class="ui-btn is-primary lt-next" data-toggle="on" aria-pressed="false" aria-label="Дальше">${ui.icon('skip-forward')}<span>Дальше</span></button></div></div></div>`;

export default (ui) => ui.screen({
  id: 'standup', theme: THEME,
  body: [
    ui.nav({ title: 'Режим летучки' }),
    ui.scroll([
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: standup.time }), title: `Сегодня, ${standup.room} переговорка`, sub: `перенесена с ${standup.was} · ${queue.length} говорят, ${updates.written - queue.length + 1} — по апдейтам` }),
      ]) }),
      ui.section({ title: 'Очередь', meta: `${standup.perPerson} на человека`, children: [
        `<div class="lt-queue">${queue.map((s, i) => speaker(ui, s, i)).join('')}<p class="lt-end">${ui.icon('check-check')}Все высказались · решения ниже</p></div>`,
      ] }),
      ui.section({ title: 'Договорились', meta: 'кто отвечает', children: [
        ui.checklist(agreed),
        `<div class="lt-added">${ui.checklist([agreedNext])}</div>`,
        `<div class="lt-add"><label class="lt-line"><b>Решение</b><input value="${agreedNext.title}" aria-label="Решение"/></label><button class="ui-btn is-secondary is-m lt-add-btn" data-toggle="on" aria-pressed="false" aria-label="Добавить решение">${ui.icon('plus')}<span>${agreedNext.value}</span></button></div>`,
      ] }),
    ]),
  ],
});
