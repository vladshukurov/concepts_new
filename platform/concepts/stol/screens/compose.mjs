import { THEME } from './_shared.mjs';
import { tonight } from '../model.mjs';

/* Новая запись в свой дневник: партия, кадр поля, место */
export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Новая запись', back: 'cancel', trailing: ui.textButton({ label: 'Сохранить', strong: true, toast: 'Запись в дневнике|feed', primary: true }) }),
    ui.scroll([
      ui.section({ children: `<label class="st-field"><span>Заголовок</span><input value="${tonight.game} вчетвером" aria-label="Заголовок"></label><label class="st-field"><span>Что случилось за столом</span><textarea rows="4" aria-label="Текст записи">Женя впервые. Илья объяснил за 10 минут, к четвёртому раунду я отстаю на 13</textarea></label>` }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять поле', sub: 'Расклад или итог партии', ask: 'camera|compose|compose' }),
        ui.cell({ icon: 'image', title: 'Фото', sub: 'Снимки с сегодняшней партии', ask: 'photos|compose|compose' }),
        ui.cell({ icon: 'map-pin', title: 'Место', sub: 'Клуб, кафе или дома', ask: 'location|compose|compose' }),
        ui.cell({ icon: 'dices', title: 'Игра', value: tonight.game, go: 'games' }),
      ] }) }),
      ui.denied('camera'),
      ui.denied('photos'),
      ui.denied('location'),
      ui.section({ shownAfter: 'camera', children: ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Кадр поля снят', sub: 'Итог четвёртого раунда · 1 фото' })]) }),
      ui.section({ shownAfter: 'photos', children: ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Кадры с вечера · 19:30–21:00', sub: '3 снимка поля добавлены в запись' })]) }),
      ui.section({ shownAfter: 'location', children: ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Клуб «Полка», Абая, 44', sub: 'Место партии в записи' })]) }),
      ui.section({ title: 'Счёт', children: ui.list([
        ui.row({ lead: ui.leadIcon('list-ordered'), title: 'Из табло партии', sub: 'Маша 71 · Илья 64 · Саша 58 · Женя 52 · раунд 4', go: 'score' }),
      ]) }),
    ]),
  ],
});
