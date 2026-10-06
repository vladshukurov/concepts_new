import { THEME } from './_shared.mjs';
import { trip, meet, people } from '../model.mjs';

/* Перекличка к сбору: кто на месте и как это видно — сеть отеля, геопозиция, отметка вручную */
const here = [
  [people.lena, 'в отеле · Kama_Guest · 9:02', 'hotel'],
  [people.igor, 'в отеле · Kama_Guest · 9:05', 'hotel'],
  [people.rustam, 'ждёт у входа · геопозиция, 30 м · 9:31', 'street'],
  [people.oleg, 'в отеле · Kama_Guest · 9:12', 'hotel'],
  [people.ildar, 'в отеле · Kama_Guest · 9:14', 'hotel'],
  [people.kostya, 'отметился сам · 9:20', 'street'],
  [people.vera, 'в отеле · Kama_Guest · 9:26', 'hotel'],
  [people.timur, 'в отеле · Kama_Guest · 9:27', 'hotel'],
  [people.yulia, 'у входа · геопозиция, 12 м · 9:33', 'street'],
  [people.sergey, 'в отеле · Kama_Guest · 9:35', 'hotel'],
  [people.alina, 'в отеле · Kama_Guest · 9:38', 'hotel'],
];
export default (ui) => ui.screen({
  id: 'rollcall', theme: THEME,
  body: [
    ui.nav({ title: 'Перекличка', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с перекличкой', menu: ['Начать заново', 'Отметить всех вручную', 'Закрыть перекличку'] }) }),
    ui.scroll([
      ui.section({ children: [
        `<div class="sb-roll"><strong>${meet.here} из ${trip.people}</strong><span>на месте к сбору в ${meet.time} · ${meet.place}</span><div class="sb-roll-bar" aria-hidden="true">${Array.from({ length: trip.people }, (_, i) => `<i${i < meet.here ? ' class="is-on"' : ''}></i>`).join('')}</div></div>`,
        ui.actions([ui.button({ label: 'Я в отеле', icon: 'wifi', block: true, activate: 'wifiinfo|rollcall', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'wifiinfo', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: 'Ника Рябова · на месте', sub: `в отеле · ${trip.ssid} · 9:41` }),
      ]) }),
      ui.section({ title: 'Ещё нет', meta: '5', children: [
        ui.list([
          ui.row({ lead: ui.avatar(people.marat.initial), title: people.marat.name, sub: '1,2 км · пишет «буду к 10:10»', go: 'chat' }),
          ui.row({ lead: ui.avatar(people.anya.initial), title: people.anya.name, sub: 'в отеле · «спускаюсь, 3 минуты» · 9:39', go: 'trip' }),
          ui.row({ lead: ui.avatar(people.denis.initial), title: people.denis.name, sub: 'в пути · 400 м, у Лядского сада', go: 'trip' }),
          ui.row({ lead: ui.avatar(people.sveta.initial), title: people.sveta.name, sub: 'не в сети с 7:58 · номер 406', go: 'trip' }),
          ui.row({ lead: ui.avatar('НР'), title: 'Ника Рябова', sub: 'вы · ещё не отметились' }),
        ]),
        ui.actions([ui.button({ label: 'Напомнить четверым', icon: 'bell', variant: 'secondary', block: true, toast: 'Напоминание о сборе ушло четверым' })]),
      ] }),
      ui.section({ title: 'На месте', meta: String(meet.here), children: ui.list(here.map(([p, sub]) => ui.row({ lead: ui.avatar(p.initial), title: p.name, sub }))) }),
    ]),
  ],
});
