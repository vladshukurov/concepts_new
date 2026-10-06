import { THEME } from './_shared.mjs';
import { own } from '../model.mjs';

/* Своя партия целиком: итог, кадр поля и что запомнить к следующему разу */
export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Партия', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с партией', menu: ['Изменить', 'Отправить Илье>direct', 'Удалить'] }) }),
    ui.scroll([
      ui.entry({ icon: 'trophy', title: `${own.last.game} · ${own.last.points} очка`, meta: `${own.last.when} · ${own.last.minutes} минут`, text: own.last.note, photos: 1 }),
      ui.section({ title: 'Итог', meta: '4 игрока', children: ui.list(own.last.result.map(([n, p], i) => ui.row({ lead: ui.leadIcon('', { text: String(i + 1) }), title: n === 'Саша' ? 'Саша · вы' : n, sub: `${p} очков` }))) }),
      ui.section({ title: 'Запомнить', children: ui.list([
        ui.row({ lead: ui.leadIcon('pin'), title: 'Длинный маршрут — с 3-го раунда', sub: 'Илья начал его раньше и выиграл' }),
        ui.row({ lead: ui.leadIcon('clock'), title: 'Объяснение заняло 12 минут', sub: 'Двое играли впервые' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Позвать на реванш', icon: 'message-circle', block: true, go: 'chat', primary: true })]) }),
    ]),
  ],
});
