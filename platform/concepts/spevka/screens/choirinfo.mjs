import { THEME } from './_shared.mjs';
import { choir, today, regent, people, me, schedule, drill, tour, video } from '../model.mjs';

/* Сведения о хоре: всё, что хору нужно кроме переписки */
const crew = [
  [regent.initial, regent.name, 'регент · ведёт спевки', 'regent'],
  [people.denis.initial, people.denis.name, 'бас · староста, автобус и документы'],
  [me.initial, me.name, 'альт · это вы'],
  [people.lena.initial, people.lena.name, 'сопрано · соло в «Вечернем звоне»'],
  [people.vera.initial, people.vera.name, 'альт · присылает партии'],
  [people.oleg.initial, people.oleg.name, 'бас · опоздает на 10 минут'],
];
export default (ui) => ui.screen({
  id: 'choirinfo', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.textButton({ label: 'Изменить', toast: 'Открыт режим правки' }) }),
    ui.scroll([
      `<div class="sp-head">${ui.avatar(choir.initial, { large: true })}<h1 class="ui-title">${choir.name}</h1><p class="ui-sub">${choir.days} · ${choir.dk}, ${choir.hall} · ${choir.people} голоса</p></div>`,
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'clock', title: `Спевка сегодня в ${today.time}`, sub: `${choir.hall} · баланс партий`, value: `${today.confirmed} из ${choir.people}`, go: 'balance' }),
        ui.cell({ icon: 'calendar-days', title: 'Расписание спевок', sub: 'Сводная в субботу в 12:00, концерт 24 октября', value: `${schedule.length} событий`, go: 'schedule' }),
        ui.cell({ icon: 'audio-lines', title: 'Разбор партии', sub: `Альт · ${drill.piece}, такты ${drill.spot.join('–')}`, go: 'drill' }),
        ui.cell({ icon: 'wifi', title: 'Wi‑Fi зала', sub: `${choir.dk}, ${choir.hall} · прислал Денис`, value: choir.ssid, go: 'wifi' }),
        ui.cell({ icon: 'clapperboard', title: 'Видео концерта', sub: `${video.title}, ${video.date} · ${video.clips} роликов`, go: 'video' }),
        ui.cell({ icon: 'lock', title: 'Документы для гастролей', sub: `Паспорта и договоры · ${tour.city}, ${tour.dates}`, value: `${tour.files} файлов`, ask: 'faceid|docs|choirinfo' }),
      ] }) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'navigation', title: 'Где автобус на гастролях', sub: `Точка сбора у ДК, 7 ноября в ${tour.meet}`, go: 'geo' }),
        ui.cell({ icon: 'link', title: 'Ссылка-приглашение', sub: choir.link, value: '3 вступили', go: 'invite' }),
      ] }) }),
      ui.section({ title: 'Участники', meta: String(choir.people), children: ui.list([
        ...crew.map(([ini, name, sub, go]) => ui.row({ lead: ui.avatar(ini), title: name, sub, ...(go ? { go } : {}) })),
        ui.row({ lead: ui.leadIcon('list-checks', { round: true, accent: true }), title: 'Баланс партий', sub: `Сопрано ${choir.voices.soprano} · альты ${choir.voices.alto} · тенора ${choir.voices.tenor} · басы ${choir.voices.bass}`, go: 'balance' }),
        ui.row({ lead: ui.leadIcon('user-plus', { round: true, accent: true }), title: 'Добавить участника', sub: 'Из контактов или по ссылке', go: 'contacts' }),
      ]) }),
    ]),
  ],
});
