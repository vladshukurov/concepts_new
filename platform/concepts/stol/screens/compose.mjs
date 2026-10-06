import { THEME } from './_shared.mjs';
import { tonight } from '../model.mjs';

/* Новая запись в свой дневник: партия, кадр поля, место */
export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Новая запись', back: 'cancel', trailing: ui.textButton({ label: 'Сохранить', strong: true, toast: 'Запись в дневнике|feed', primary: true }) }),
    ui.scroll([
      ui.section({ children: `<p class="st-text">«${tonight.game}» вчетвером, двое впервые. Объяснял я — уложился в 10 минут, начали с короткой партии</p>` }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять поле', sub: 'Расклад или итог партии', ask: 'camera|compose|compose' }),
        ui.cell({ icon: 'image', title: 'Фото', sub: 'Готовый снимок поля', ask: 'photos|compose|compose' }),
        ui.cell({ icon: 'map-pin', title: 'Место', sub: 'Клуб, кафе или дома', ask: 'location|compose|compose' }),
        ui.cell({ icon: 'dices', title: 'Игра', value: tonight.game, go: 'games' }),
      ] }) }),
      ui.denied('camera'),
      ui.denied('photos'),
      ui.denied('location'),
      ui.section({ shownAfter: 'camera', children: ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Кадр поля снят', sub: 'Итог четвёртого раунда · 1 фото' })]) }),
      ui.section({ shownAfter: 'photos', children: ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Добавлено 2 снимка', sub: 'Расклад до партии и после' })]) }),
      ui.section({ shownAfter: 'location', children: ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Клуб «Полка», Абая, 44', sub: 'Место партии в записи' })]) }),
      ui.section({ title: 'Счёт', children: ui.list([
        ui.row({ lead: ui.leadIcon('list-ordered'), title: 'Из табло партии', sub: 'Маша 71 · Илья 64 · Саша 58 · раунд 4', go: 'score' }),
      ]) }),
    ]),
  ],
});
