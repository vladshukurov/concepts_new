import { THEME } from './_shared.mjs';
import { people, tonight } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Публикация' }),
    ui.scroll([
      ui.post({ author: { initial: people.masha.initial, name: people.masha.name, meta: `сегодня, 12:14 · ${tonight.where}` }, text: `Вечером раскладываем «${tonight.game}». Объяснение — минут десять, играем спокойно, без гонки за первым ходом`, likes: 18, comments: 6, shares: 4 }),
      ui.section({ children: [ui.list([ui.row({ lead: ui.leadIcon('dices', { accent: true }), title: `${tonight.game} · ${tonight.start}`, sub: `${tonight.minutes} минут · ${tonight.pace}` })]), ui.actions([ui.button({ label: 'Открыть стол', block: true, go: 'table', primary: true })], { className: 'st-gap' })] }),
      ui.comments({ count: 6, items: [
        { initial: people.ilya.initial, name: people.ilya.name, text: 'Возьму дополнение с портами, если никто не против — партия станет на полчаса длиннее', time: '12:30', likes: 3 },
        { initial: people.masha.initial, name: people.masha.name, text: 'Сегодня без дополнения, двое играют впервые', time: '12:41', likes: 4, reply: true, author: true },
        { initial: people.zhenya.initial, name: people.zhenya.name, text: 'Опоздаю минут на пятнадцать, начинайте без меня объяснение', time: '13:05', likes: 1 },
      ] }),
    ]),
    ui.composer({ placeholder: 'Комментарий', attach: { label: 'Прикрепить', menu: ['Снять поле?camera', 'Фото из галереи?photos'] }, send: { toast: 'Комментарий отправлен' } }),
  ],
});
