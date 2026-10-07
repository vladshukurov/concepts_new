import { THEME, map } from './_shared.mjs';
import { longrun } from '../model.mjs';

/* Тренировка: план, отметка на старте, где группа, свободные места и перенос */
const free = longrun.spots - longrun.confirmed;
export default (ui) => ui.screen({
  id: 'meetup', theme: THEME,
  body: [
    ui.nav({ title: 'Тренировка', trailing: ui.iconButton({ icon: 'message-circle', label: 'Чат тренировки', go: 'chat' }) }),
    ui.scroll([
      ui.section({ children: [
        `<div class="ry-plan"><small>Сегодня · ${longrun.start}</small><strong>${longrun.title}</strong><span>${longrun.from} → набережная</span><span class="ry-moved">${longrun.moved}</span></div>`,
        '<div class="ry-gap"></div>',
        `<div class="ry-figures"><span><b>${longrun.km} км</b><small>дистанция</small></span><span><b>${longrun.pace}</b><small>темп</small></span><span><b>${longrun.confirmed} из ${longrun.spots}</b><small>подтвердили</small></span></div>`,
        `<div data-hide-granted="wifiinfo">${ui.actions([ui.button({ label: 'Я на старте', icon: 'map-pin', variant: 'secondary', block: true, activate: 'wifiinfo|meetup' })], { className: 'ry-gap' })}</div>`,
        ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Вы на старте · только что', sub: `Отмечено по сети клуба «${longrun.wifi}»`, shownAfter: 'wifiinfo' })]),
      ] }),
      ui.section({ title: 'Свободные места', meta: String(free), children: [
        ui.denied('contacts'),
        ui.list([ui.row({ lead: ui.leadIcon('user-plus', { accent: true }), title: 'Позвать из контактов', sub: `Ещё ${free} мест · темп ${longrun.pace}`, ask: 'contacts|match|meetup' })]),
      ] }),
      ui.section({ title: 'Маршрут', children: [ui.denied('location'), map([['ИМ', 'ry-x10', 'ry-y56']]), ui.actions([ui.button({ label: 'Показать, где я, группе', icon: 'navigation', block: true, ask: 'location|route|meetup', primary: true })], { className: 'ry-gap' })] }),
      ui.section({ title: 'Не пропустить', children: [
        ui.group({ cells: [
          ui.cell({ icon: 'bell', title: 'Сообщить о переносе', sub: `Если ${longrun.host.first} сдвинет время или точку старта`, toggle: false, ask: 'push|meetup|meetup' }),
        ] }),
      ] }),
    ]),
  ],
});
