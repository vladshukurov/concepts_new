import { THEME } from './_shared.mjs';
import { people, tonight } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ initial: 'ЛС', name: tonight.game, status: `Сегодня в ${tonight.start} · ${tonight.taken} игрока`, call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ from: `${people.masha.name}`, text: `Стол собран, четыре из четырёх. Зал у окна`, time: '12:02' }),
      ui.bubble({ from: `${people.masha.name}`, text: `Я принесу базовую коробку. Кто возьмёт дополнение?`, time: '12:08' }),
      ui.bubble({ out: true, text: 'Беру дополнение и жетоны', time: '12:11', read: true }),
      ui.voice({ dur: '0:12', time: '12:14' }),
      ui.bubble({ from: `${people.masha.name}`, text: 'Илья ходит, не подсказывайте', time: '21:02' }),
    ])),
    ui.denied('voip'),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Запись из дневника>post', 'Новая запись с кадром поля>compose'] } }),
  ],
});
