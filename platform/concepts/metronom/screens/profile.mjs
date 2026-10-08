import { THEME } from './_shared.mjs';
import { me, totals } from '../model.mjs';

/* Профиль: счётчики занятий, откуда берутся записи, аккаунт */
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: [
    ui.nav({ title: 'Профиль' }),
    ui.scroll([
      `<div class="mt-me">${ui.avatar(me.initial, { large: true })}<h1 class="ui-title">${me.name}</h1><p class="ui-sub">${me.phone}</p></div>`,
      ui.stats([[totals.sessions, 'занятия'], [totals.hours, 'часов'], [totals.pieces, 'пьесы']]),
      ui.group({ label: 'Записи занятий', cells: [
        ui.cell({ icon: 'mic', title: '«Диктофон»', value: '24 записи' }),
        ui.cell({ icon: 'folder', title: '«Файлы»', value: '8 записей' }),
        ui.cell({ icon: 'database', title: 'Копия в iCloud', value: 'включена' }),
      ] }),
      ui.group({ cells: [ui.cell({ icon: 'circle-user', title: 'Аккаунт', label: 'Аккаунт', sub: 'номер, пароль, выход и удаление', go: 'account' })] }),
    ]),
  ],
});
