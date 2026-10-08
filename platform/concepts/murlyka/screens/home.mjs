import { THEME, TABS, MINI, recRow, timerSeg, timerText, eveningArt } from './_shared.mjs';
import { me, evening, voices, byVoice, records, reminder, child } from '../model.mjs';

/* «Сегодня» в грамматике ВК Музыки: карточка-микс «Вечер», таймер сна на месте, голоса семьи */
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.me({ name: me.short, initial: me.initial }), [
      ui.iconButton({ icon: 'plus', label: 'Новая колыбельная', go: 'new' }),
      ui.iconButton({ icon: 'search', label: 'Поиск', go: 'search' }),
    ]),
    `<section class="mr-evening">${eveningArt()}`
      + `<button class="mr-evening-copy" data-go="evening" aria-label="${evening.title}"><small>собран на сегодня · для ${child === 'Соня' ? 'Сони' : child}</small><strong>${evening.title}</strong><span>${evening.sub}</span></button>`
      + ui.play({ size: 'm', label: 'Слушать вечер', go: 'player', primary: true })
      + `<div class="mr-evening-timer"><p class="mr-timer-head">${ui.icon('timer')}Таймер сна</p>${timerSeg()}${timerText('mr-timer is-card')}</div>`
      + `</section>`,
    ui.section({ shownAfter: 'push', children: ui.list([
      ui.row({ lead: ui.leadIcon('bell', { round: true, accent: true }), title: `Сегодня в ${reminder.time} · начать укладывание`, sub: 'напомним про вечер' }),
    ]) }),
    ui.section({ title: 'В вечере', more: { label: evening.title, go: 'evening' }, children: ui.list(evening.list.map((r, i) => recRow(r, { n: i + 1 }))) }),
    ui.section({ title: 'Голоса семьи', more: { label: 'Голоса', go: 'voices' }, children: ui.hscroll(
      Object.values(voices).map((v) => ({ initial: v.initial, title: v.title, sub: records(byVoice(v).length), go: v.id })), { size: 's' },
    ) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home', mini: MINI }),
});
