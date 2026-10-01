import { THEME } from './_shared.mjs';
import { people, tonight } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Публикация' }),
    ui.scroll([
      ui.post({ author: { initial: people.masha.initial, name: people.masha.name, meta: `сегодня, 12:14 · ${tonight.where}` }, text: `Вечером раскладываем «${tonight.game}». Объяснение — минут десять, играем спокойно, без гонки за первым ходом`, likes: 18, comments: 6, shares: 4 }),
      ui.section({ children: [ui.list([ui.row({ lead: ui.leadIcon('dices', { accent: true }), title: `${tonight.game} · ${tonight.start}`, sub: `${tonight.minutes} минут · ${tonight.pace}` })]), ui.actions([ui.button({ label: 'Открыть стол', block: true, go: 'table', primary: true })], { className: 'st-gap' })] }),
    ]),
    ui.composer({ placeholder: 'Комментарий', attach: { go: 'compose' }, send: { toast: 'Комментарий отправлен' } }),
  ],
});
