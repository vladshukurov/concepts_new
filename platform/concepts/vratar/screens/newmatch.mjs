import { THEME } from './_shared.mjs';
import { nextMatch } from '../model.mjs';

/* Новый матч: соперник, когда и где — матч создаётся сразу */
const input = (value, label) => `<input class="vr-input" value="${value}" aria-label="${label}"/>`;
export default (ui) => ui.screen({
  id: 'newmatch', theme: THEME,
  body: [
    ui.nav({ title: 'Новый матч', back: 'cancel' }),
    ui.scroll([
      ui.section({ children: ui.group({ className: 'vr-form', cells: [
        ui.cell({ title: input(nextMatch.rival, 'Соперник'), sub: 'Соперник' }),
        ui.cell({ icon: 'calendar', title: nextMatch.when, sub: 'Когда', toast: `Выбрано: ${nextMatch.when}` }),
        ui.cell({ title: input(nextMatch.field, 'Поле'), sub: 'Поле' }),
      ] }) }),
      ui.group({ label: 'Формат', cells: [
        ui.cell({ icon: 'timer', title: '2 тайма по 35 минут', sub: 'Длительность', toast: 'Выбрано: 2 тайма по 35 минут' }),
        ui.cell({ icon: 'users', title: 'Состав · 6 из 9', sub: 'Кто придёт', go: 'squad' }),
      ] }),
      ui.actions(ui.button({ label: 'Создать матч', block: true, go: 'nextmatch', primary: true }), { className: 'vr-bottom' }),
    ]),
  ],
});
