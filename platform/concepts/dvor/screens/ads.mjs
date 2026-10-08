import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'Подбор', children: ui.group({ cells: [
        ui.cell({ icon: 'map-pin', title: 'Местная', sub: 'Мастера и сервисы с Полевой и соседних улиц', value: '<span data-hide-granted="tracking">Выбрать</span><span class="perm-hidden" data-show-granted="tracking">Выбрана</span>', ask: 'tracking|ads|ads' }),
        ui.cell({ icon: 'shuffle', title: 'Случайная', value: '<span data-hide-granted="tracking">Выбрана</span>' }),
      ] }) }),
      ui.section({ title: 'Сейчас в ленте квартиры', meta: 'раз в день', children: ui.list([
        ui.row({ lead: ui.leadIcon('megaphone', { round: true }), title: 'Сантехник на выезд', sub: '<span data-hide-granted="tracking">По городу · от 900 ₽</span><span class="perm-hidden" data-show-granted="tracking">Рядом с Полевой, 12 · приедут через час</span>' }),
        ui.row({ lead: ui.leadIcon('sparkles', { round: true }), title: 'Уборка после ремонта', sub: 'По городу · от 3 400 ₽ за квартиру' }),
      ]) }),
      ui.denied('tracking'),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Готово', block: true, back: true }),
      ]) }),
    ]),
  ],
});
