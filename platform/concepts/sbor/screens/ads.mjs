import { THEME } from './_shared.mjs';
import { ad } from '../model.mjs';

/* Реклама — то, на что живёт бесплатный мессенджер: одна строка в списке чатов. Подбор — по выбору человека */
export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'Сейчас в чатах', meta: 'одна строка в списке', children: ui.list([
        ui.row({ lead: ui.avatar('КС'), title: ad.title, sub: `Реклама · ${ad.text}`, subWrap: true, end: { badge: 'реклама' } }),
        ui.row({ lead: ui.avatar('ТР'), title: 'Трансфер в аэропорт', sub: 'Реклама · минивэн до 7 человек, 2 900 ₽' }),
      ]) }),
      ui.section({ title: 'Подбор', children: ui.group({ cells: [
        ui.cell({ icon: 'route', title: 'По интересам', sub: 'Экскурсии, трансферы и жильё — с учётом других приложений и сайтов' }),
        ui.cell({ icon: 'shuffle', title: 'Без подбора', check: true }),
      ] }) }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Подбирать по интересам', block: true, ask: 'tracking|chats|ads', primary: true }),
        ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, back: true }),
      ]) }),
    ]),
  ],
});
