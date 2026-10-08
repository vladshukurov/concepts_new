import { THEME, ico, lead } from './_shared.mjs';
import { me, totals, week, favourite, recs, voices, evening, records, lullabies } from '../model.mjs';

/* Профиль в грамматике ВК Музыки: вечера недели, любимая колыбельная, новое от семьи и свои разделы */
const bars = week.map(([d, m]) => `<span class="${m === null ? 'is-next' : d === 'чт' ? 'is-now' : ''}"><small>${m ?? ''}</small><i class="mr-d${m || 0}"></i><b>${d}</b></span>`).join('');
const F = favourite.rec;
const M = recs.medved;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: `<span class="mr-head-acts">${ui.textButton({ label: 'Изменить', go: 'account' })}${ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })}</span>` }),
    ui.scroll([
      `<div class="mr-me">${ui.avatar(me.initial, { large: true })}<h1 class="ui-title">${me.name}</h1><p class="ui-sub">Мама Сони · поём втроём с папой и бабушкой</p></div>`,
      ui.stats([[totals.records, 'записей'], [totals.voices, 'голоса'], [`${totals.mins} мин`, 'всего']]),
      ui.section({ title: 'Вечера недели', meta: '4 вечера подряд', children: [
        `<div class="mr-days" aria-label="Минуты до тишины по вечерам недели">${bars}</div>`,
        ui.list([
          ui.row({ lead: lead(F), title: F.title, sub: `Любимая недели · первой ${favourite.times} вечера · ${F.voice.who}`, go: F.id }),
          ui.row({ lead: lead(M), title: M.title, sub: `Новая · ${voices.mama.who} ${voices.mama.verb} ${M.when}, ${M.dur}`, go: M.id }),
        ]),
      ] }),
      ui.section({ title: 'Моё', children: ui.list([
        ui.row({ lead: ico('moon', true), title: 'Вечер', sub: `${evening.sub} · на сегодня`, go: 'evening' }),
        ui.row({ lead: ico('list-music'), title: 'Колыбельные', sub: `${records(totals.records)} · ${lullabies(4)} и 2 сказки`, go: 'lullabies' }),
        ui.row({ lead: ico('users'), title: 'Голоса', sub: 'Мама, папа и бабушка Нина', go: 'voices' }),
      ]) }),
    ]),
  ],
});
