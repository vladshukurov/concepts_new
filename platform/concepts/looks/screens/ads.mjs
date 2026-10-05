import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'Подбор', children: ui.group({ cells: [
        ui.cell({ icon: 'store', title: 'Магазины рядом', sub: 'Винтаж и ателье в вашем районе' }),
        ui.cell({ icon: 'shuffle', title: 'Без подбора', check: true }),
      ] }) }),
      ui.section({ title: 'Сейчас в лукбуке', meta: 'одна карточка в день', children: ui.list([
        ui.row({ lead: ui.leadIcon('store', { round: true }), title: 'Винтаж на Большой Пушкарской', sub: 'Реклама · 600 м · до 21:00' }),
        ui.row({ lead: ui.leadIcon('scissors', { round: true }), title: 'Ателье «Подшив»', sub: 'Реклама · подшить джинсы за день, от 700 ₽' }),
      ]) }),
      ui.denied('tracking'),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Продолжить', block: true, ask: 'tracking|profile|ads', primary: true }),
        ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true, back: true }),
      ]) }),
    ]),
  ],
});
