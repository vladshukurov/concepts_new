import { THEME } from './_shared.mjs';
import { standup, office, now } from '../model.mjs';

/* Летучка: время и переговорка, повестка, напоминание и запись вчерашней — для тех, кого не было */
const y = standup.yesterday;
export default (ui) => ui.screen({
  id: 'standup', theme: THEME,
  body: [
    ui.nav({ title: 'Летучка', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с летучкой', menu: ['Переговорки>rooms', 'Ссылка на летучку=Ссылка на летучку скопирована'] }) }),
    ui.scroll([
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: standup.time }), title: `Сегодня, ${standup.room} переговорка`, sub: `перенесена с ${standup.was} · ${standup.movedBy}, вчера в ${standup.movedAt}` }),
        ui.reminder({ title: 'Напомнить за 10 минут до летучки', titleGranted: `Напомним в ${standup.remind}, за 10 минут до летучки`, sub: `${now.date} · с повесткой в уведомлении`, here: 'standup' }),
      ]) }),
      ui.section({ title: 'Повестка', meta: `${standup.agenda.length} пунктов · ${standup.length}`, children: ui.list(standup.agenda.map(([title, sub, go], i) => ui.row({
        lead: ui.leadIcon('', { text: String(i + 1) }), title, sub, ...(go ? { go } : {}),
      }))) }),
      ui.section({ title: 'Кто будет', meta: `${office.here + 1} в офисе`, children: ui.usersStack({ faces: ['ПИ', 'ВГ', 'ГА'], text: 'Паша, Вика, Гоша и ещё 8 в Большой, Рома по звонку' }) }),
      ui.section({ title: 'Вчерашняя летучка', meta: y.label, children: ui.list([
        ui.row({ lead: ui.leadIcon('film', { round: true, accent: true }), title: `Запись летучки ${y.dur} готова`, sub: `сжата ночью: ${y.raw} → ${y.packed} · не были ${y.missed} из 18`, end: { icon: 'play', toast: `Запись летучки ${y.dur}`, label: 'Смотреть запись летучки' } }),
        ui.row({ lead: ui.leadIcon('headphones', { round: true, accent: true }), title: 'Слушать подряд в дороге', sub: `запись ${y.dur} и 3 голосовых по «Северной верфи» · 24 мин`, activate: 'audio|lockscreen' }),
        ui.row({ lead: ui.leadIcon('list-checks', { round: true }), title: 'Итоги: 6 задач', sub: `были ${y.was} · Паша разослал в 11:02` }),
      ]) }),
    ]),
  ],
});
