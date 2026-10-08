import { THEME } from './_shared.mjs';
import { house, people, mine, meters } from '../model.mjs';

/* Свой профиль Анны: квартира, свои записи и заявки, апрель, вход в настройки */
const me = people.me;
export default (ui) => ui.screen({
  id: 'me', theme: THEME,
  body: [
    ui.nav({ title: 'Профиль', trailing: ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' }) }),
    ui.scroll([
      `<div class="dv-person">${ui.avatar(me.initial, { large: true })}<h1 class="ui-title">${me.name}</h1><p class="ui-sub">${house.address}, кв. ${me.flat} · ${me.entrance} подъезд · дом подтверждён</p></div>`,
      ui.section({ children: [
        ui.stats([[mine.entries, 'записей'], [mine.photos, 'снимка в хронике'], [mine.requests, 'заявки за год']]),
        ui.actions([ui.button({ label: 'Изменить', icon: 'pen-line', variant: 'secondary', go: 'account' }), ui.button({ label: 'Новая заявка', icon: 'plus', go: 'problem' })], { row: true, className: 'dv-gap' }),
      ] }),
      ui.section({ title: 'В апреле', meta: `показания через ${meters.left}`, children: ui.list(mine.month.map((m) => ui.row({ lead: ui.leadIcon(m.icon, { round: true }), title: m.title, sub: m.sub }))) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'gauge', title: 'Счётчики', value: `до ${meters.deadlineLabel}`, go: 'meters' }),
        ui.cell({ icon: 'images', title: 'Хроника', value: String(mine.photos), go: 'chronicle' }),
        ui.cell({ icon: 'key', title: 'Пароли дома', value: '2', go: 'passwords' }),
      ] }) }),
    ]),
  ],
});
