import { THEME } from './_shared.mjs';
import { exhibit } from '../model.mjs';

/* Выставка: свои зарисовки уходят на общий экран площадки, пока вы здесь */
export default (ui) => ui.screen({
  id: 'exhibit', theme: THEME,
  body: [
    ui.nav({ title: 'Экран выставки', trailing: ui.iconButton({ icon: 'qr-code', label: 'Код со стойки', go: 'scan' }) }),
    ui.scroll([
      ui.section({ children: `<div class="sh-head"><small>До ${exhibit.until}</small><strong>${exhibit.title}</strong><span>Площадка показывает работы тех, кто сейчас в зале</span></div>` }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Я на выставке', icon: 'map-pin', block: true, activate: 'wifiinfo|exhibit', primary: true }),
          ui.button({ label: 'Подключиться к сети площадки', icon: 'wifi', variant: 'secondary', block: true, ask: 'hotspot|exhibit|exhibit' }),
        ]),
        ui.denied('hotspot'),
        ui.list([
          ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `Подключено к ${exhibit.network}`, sub: 'Сеть площадки до закрытия выставки', shownAfter: 'hotspot' }),
          ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Вы на выставке', sub: '3 ваши зарисовки на общем экране', shownAfter: 'wifiinfo' }),
        ]),
      ] }),
      ui.section({ title: 'На общий экран', meta: '3', children: ui.list([
        ui.row({ lead: ui.leadIcon('pen-line'), title: 'Липа на Панфилова', sub: 'Сегодня · линер 0.3' }),
        ui.row({ lead: ui.leadIcon('pen-line'), title: 'Прилавок с яблоками', sub: 'Вчера · карандаш' }),
        ui.row({ lead: ui.leadIcon('pen-line'), title: 'Мост на Терренкуре', sub: '2 сентября · акварель' }),
      ]) }),
    ]),
  ],
});
