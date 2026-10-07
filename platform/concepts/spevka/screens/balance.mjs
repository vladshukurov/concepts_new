import { THEME, balanceBars, ifGo } from './_shared.mjs';
import { choir, today, me, people, swap, balance } from '../model.mjs';

/* Баланс партий перед спевкой: кто из каждой партии подтвердил приход. У слабой партии — «Попросить подменить»,
   свой ответ «Иду» / «Не смогу» переключается на месте, а в зале «Иду» становится «На месте» по сети зала */
const alto = balance.find((v) => v.id === 'alto');
export default (ui) => ui.screen({
  id: 'balance', theme: THEME,
  body: [
    ui.nav({ title: 'Баланс партий' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="sp-sum"><small>Спевка сегодня в ${today.time} · через ${today.inMin} минуты</small><strong>Подтвердили ${ifGo(today.confirmed, today.confirmed - 1)} из ${choir.people}</strong><span>${choir.dk}, ${choir.hall}</span></div>`,
        balanceBars({ live: true }),
        `<button class="sp-swap" data-toggle="on" aria-pressed="false" aria-label="Попросить подменить альтов"><span class="sp-swap-off">${ui.icon('users')}Попросить подменить</span><span class="sp-swap-on">${ui.icon('check')}Запрос отправлен ${swap.to} · ${swap.answered} ответили</span></button>`,
        ui.foot(`Альтов меньше ${alto.need} — в «Вечернем звоне» не разойтись на divisi`, 'sp-bal-foot'),
      ] }),
      ui.section({ title: `Вы · ${me.voice}`, children: [
        `<div class="sp-rsvp-wrap" data-hide-granted="wifiinfo"><button class="sp-rsvp is-on" data-toggle="on" aria-pressed="true" aria-label="Иду на спевку"><span>Иду</span><span>Не смогу</span></button></div>`,
        `<div data-hide-granted="wifiinfo">${ui.list([ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: 'Я в зале', sub: `«Иду» станет «На месте» по сети ${choir.ssid}`, activate: 'wifiinfo|balance' })])}</div>`,
        ui.list([
          ui.row({ shownAfter: 'wifiinfo', lead: ui.leadIcon('check', { round: true, accent: true }), title: `${me.name} · на месте`, sub: `альт · по сети ${choir.ssid} · ${today.here}` }),
          ui.reminder({ title: 'Напомнить о спевке за час', titleGranted: 'Напомним о спевке за час', sub: 'Перед каждой спевкой — время, зал и баланс партий', here: 'balance' }),
        ]),
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('history', { round: true }), title: `Ответы обновились в ${today.synced}`, sub: 'Тимур и Сергей подтвердили, пока приложение было закрыто', subWrap: true }),
      ]) }),
      ui.section({ title: 'Альты', meta: `${ifGo(alto.yes, alto.yes - 1)} из ${alto.of}`, children: ui.list([
        ui.row({ lead: ui.avatar(people.vera.initial), title: people.vera.name, sub: 'иду' }),
        ui.row({ lead: ui.avatar(people.anya.initial), title: people.anya.name, sub: 'иду' }),
        ui.row({ lead: ui.avatar(people.marina.initial), title: people.marina.name, sub: 'иду · после работы, к 19:40' }),
        ui.row({ lead: ui.avatar(people.yulia.initial), title: people.yulia.name, sub: 'не смогу · болеет' }),
        ui.row({ lead: ui.leadIcon('users', { round: true }), title: 'Ещё 3 альта', sub: 'не ответили · в чате альтов с утра' }),
      ]) }),
    ]),
  ],
});
