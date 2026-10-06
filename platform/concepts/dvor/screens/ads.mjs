import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'Подбор', children: ui.group({ cells: [
        ui.cell({ icon: 'map-pin', title: 'Местная', sub: 'Мастера и сервисы с Полевой и соседних улиц' }),
        ui.cell({ icon: 'shuffle', title: 'Случайная', check: true }),
      ] }) }),
      ui.section({ title: 'Сейчас в ленте квартиры', meta: 'раз в день', children: ui.list([
        ui.row({ lead: ui.leadIcon('megaphone', { round: true }), title: 'Сантехник на выезд', sub: 'По городу · от 900 ₽' }),
        ui.row({ lead: ui.leadIcon('sparkles', { round: true }), title: 'Уборка после ремонта', sub: 'По городу · от 3 400 ₽ за квартиру' }),
      ]) }),
      ui.denied('tracking'),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Продолжить', block: true, ask: 'tracking|menu|ads' }),
        ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true, back: true }),
      ]) }),
    ]),
  ],
});
