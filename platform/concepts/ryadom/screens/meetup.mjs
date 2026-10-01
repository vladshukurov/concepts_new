import { THEME, map } from './_shared.mjs';
import { longrun } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'meetup', theme: THEME,
  body: [
    ui.nav({ title: 'Тренировка', trailing: ui.iconButton({ icon: 'message-circle', label: 'Чат тренировки', go: 'chat' }) }),
    ui.scroll([
      ui.section({ children: [
        `<div class="ry-plan"><small>Сегодня · ${longrun.start}</small><strong>${longrun.title}</strong><span>${longrun.from} → набережная</span></div>`,
        '<div class="ry-gap"></div>',
        `<div class="ry-figures"><span><b>${longrun.km} км</b><small>дистанция</small></span><span><b>${longrun.pace}</b><small>темп</small></span><span><b>${longrun.confirmed} из ${longrun.spots}</b><small>подтвердили</small></span></div>`,
      ] }),
      ui.section({ title: 'Маршрут', children: [map([['ИМ', 'ry-x10', 'ry-y56']]), ui.actions([ui.button({ label: 'Отмечать дорогу', icon: 'navigation', block: true, ask: 'locationalways|route|meetup', primary: true })], { className: 'ry-gap' }), ui.denied('locationalways', 'Отметьтесь вручную, когда придёте', ui.actions([ui.button({ label: 'Я на месте', variant: 'secondary', block: true, toast: 'Отмечено: вы на месте' })]))] }),
      ui.section({ title: 'Не пропустить', children: [
        ui.group({ cells: [
          ui.cell({ icon: 'bell', title: 'Напомнить накануне', sub: 'В пятницу в 21:00', toggle: false, ask: 'push|meetup|meetup' }),
        ] }),
        ui.list([ui.row({ lead: ui.leadIcon('map-pin'), title: 'Точка старта обновится сама', sub: `Если ${longrun.host.first} её сдвинет, она поменяется здесь`, activate: 'remotenotif|meetup' })]),
        ui.granted('remotenotif', 'Точку сдвинули к главному входу — обновилось в 06:40'),
        ui.denied('push', 'Напоминание будет в разделе «Тренировки»'),
      ] }),
    ]),
  ],
});
