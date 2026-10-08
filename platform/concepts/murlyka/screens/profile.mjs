import { THEME } from './_shared.mjs';
import { me, totals } from '../model.mjs';

/* Профиль: счётчики, откуда берутся записи, аккаунт */
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: [
    ui.nav({ title: 'Профиль' }),
    ui.scroll([
      `<div class="mr-me">${ui.avatar(me.initial, { large: true })}<h1 class="ui-title">${me.name}</h1><p class="ui-sub">${me.phone}</p></div>`,
      ui.stats([[totals.records, 'записей'], [totals.voices, 'голоса'], [`${totals.mins} мин`, 'всего']]),
      ui.group({ label: 'Записи', cells: [
        ui.cell({ icon: 'folder', title: 'Из «Файлов»', value: '4 записи' }),
        ui.cell({ icon: 'mic', title: 'Из «Диктофона»', value: '2 записи' }),
        ui.cell({ icon: 'database', title: 'Копия в iCloud', value: 'включена' }),
      ] }),
      ui.group({ cells: [ui.cell({ icon: 'circle-user', title: 'Аккаунт', label: 'Аккаунт', sub: 'номер, пароль, выход и удаление', go: 'account' })] }),
    ]),
  ],
});
