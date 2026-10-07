import { THEME } from './_shared.mjs';
import { ad } from '../model.mjs';

/* Реклама — то, на что живёт бесплатный тариф: одна карточка в списке чатов. Подбор — по выбору человека */
export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'Сейчас в чатах', children: ui.list([
        ui.row({ lead: ui.avatar('БЛ'), title: ad.title, sub: `Реклама · ${ad.text}` }),
        ui.row({ lead: ui.avatar('КВ'), title: 'Коворкинг на Обводном', sub: 'Реклама · переговорная на 8 человек, 1 200 ₽ в час' }),
      ]) }),
      ui.section({ title: 'Раньше в чатах', children: ui.list([
        ui.row({ lead: ui.avatar('КФ'), title: 'Кофейня у Лиговского, 70', sub: '6 октября · скрыто вами' }),
        ui.row({ lead: ui.avatar('ПЧ'), title: 'Печать визиток за сутки', sub: '5 октября · 2 показа' }),
        ui.row({ lead: ui.avatar('СМ'), title: 'Самокаты у Московского вокзала', sub: '2 октября · 1 показ' }),
      ]) }),
      ui.section({ children: [
        ui.list([ui.row({ lead: ui.leadIcon('shuffle', { round: true, accent: true }), title: 'Сейчас: без подбора', sub: 'Реклама одна и та же для всех рядом с офисом' })]),
        ui.actions([
          ui.button({ label: 'Подбирать по интересам', block: true, ask: 'tracking|chats|ads', primary: true }),
          ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, back: true }),
        ]),
      ] }),
    ]),
  ],
});
