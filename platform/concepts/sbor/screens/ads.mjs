import { THEME } from './_shared.mjs';
import { ad } from '../model.mjs';

/* Реклама — то, на что живёт бесплатный мессенджер: одна строка в списке чатов. Подбор — по выбору человека */
export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'Сейчас в чатах', children: ui.list([
        ui.row({ lead: ui.avatar('КС'), title: ad.title, sub: `Реклама · ${ad.text}` }),
        ui.row({ lead: ui.avatar('ТР'), title: 'Трансфер в аэропорт', sub: 'Реклама · минивэн до 7 человек, 2 900 ₽' }),
      ]) }),
      ui.section({ title: 'Раньше в чатах', children: ui.list([
        ui.row({ lead: ui.avatar('ЭК'), title: 'Кремль на английском', sub: '9 октября · скрыто вами' }),
        ui.row({ lead: ui.avatar('ЧЧ'), title: 'Чак-чак с доставкой в отель', sub: '9 октября · 2 показа' }),
        ui.row({ lead: ui.avatar('АР'), title: 'Аренда самокатов на Баумана', sub: '8 октября · 1 показ' }),
      ]) }),
      ui.section({ children: [
        ui.list([ui.row({ lead: ui.leadIcon('shuffle', { round: true, accent: true }), title: '<span data-hide-granted="tracking">Сейчас: без подбора</span><span class="perm-hidden" data-show-granted="tracking">Сейчас: по интересам</span>', sub: '<span data-hide-granted="tracking">Реклама одна и та же для всех в городе поездки</span><span class="perm-hidden" data-show-granted="tracking">Экскурсии и трансферы по Казани — с учётом ваших интересов</span>' })]),
        ui.actions([
        ui.button({ label: 'Подбирать по интересам', block: true, ask: 'tracking|ads|ads', primary: true }),
        ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, back: true }),
      ]),
      ] }),
    ]),
  ],
});
