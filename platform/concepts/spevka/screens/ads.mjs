import { THEME } from './_shared.mjs';
import { ad } from '../model.mjs';

/* Реклама — то, на что живёт бесплатный мессенджер: одна карточка в списке чатов. Подбор — по выбору человека */
export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'Сейчас в чатах', children: ui.list([
        ui.row({ lead: ui.avatar('НА'), title: ad.title, sub: `Реклама · ${ad.text}` }),
        ui.row({ lead: ui.avatar('КВ'), title: 'Курсы вокала «Голос»', sub: 'Реклама · постановка дыхания, группа по субботам' }),
      ]) }),
      ui.section({ title: 'Раньше в чатах', children: ui.list([
        ui.row({ lead: ui.avatar('КМ'), title: 'Камертон ля 440 Гц', sub: '6 октября · скрыто вами' }),
        ui.row({ lead: ui.avatar('ПП'), title: 'Пюпитры складные', sub: '5 октября · 2 показа' }),
        ui.row({ lead: ui.avatar('ЧФ'), title: 'Чай для связок', sub: '1 октября · 1 показ' }),
      ]) }),
      ui.section({ children: [
        ui.list([ui.row({ lead: ui.leadIcon('shuffle', { round: true, accent: true }), title: 'Сейчас: без подбора', sub: 'Реклама одна и та же для всех в городе' })]),
        ui.actions([
          ui.button({ label: 'Подбирать по интересам', block: true, ask: 'tracking|chats|ads', primary: true }),
          ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, back: true }),
        ]),
      ] }),
    ]),
  ],
});
