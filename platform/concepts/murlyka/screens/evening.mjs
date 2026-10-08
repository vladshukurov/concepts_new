import { THEME, recRow, eveningArt } from './_shared.mjs';
import { evening, reminder, recs, now } from '../model.mjs';

/* «Вечер · на сон» как плейлист: обложка-веер, «Слушать», три колыбельные, напоминание */
export default (ui) => ui.screen({
  id: 'evening', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.iconButton({ icon: 'shuffle', label: 'Перемешать вечер', toggle: 'on' }) }),
    ui.scroll([
      `<div class="mr-album">${eveningArt(' is-lg')}<h1 class="ui-title">${evening.title}</h1><p class="ui-sub">${evening.sub} · ${now.short}</p></div>`,
      ui.actions(ui.button({ label: 'Слушать', icon: 'play', fillIcon: true, block: true, go: 'player', primary: true })),
      ui.section({ children: ui.list([ui.reminder({
        title: 'Напомнить начать укладывание', titleGranted: `Напомним в ${reminder.time} · укладывание`,
        sub: `в ${reminder.time}, каждый вечер`, here: 'evening',
      })]) }),
      ui.section({ title: 'Колыбельные', meta: 'по порядку', children: ui.list(evening.list.map((r, i) => recRow(r, { n: i + 1 }))) }),
      ui.section({ title: 'Можно добавить', children: ui.list([recRow(recs.bayu), recRow(recs.ezhik)]) }),
    ]),
  ],
});
