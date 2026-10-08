import { THEME } from './_shared.mjs';
import { newSeries, seasons } from '../model.mjs';

/* Новая серия: название и сезон — серия сразу встаёт в сезон «Сейчас» */
const input = (value, label) => `<input class="vl-input" value="${value}" aria-label="${label}"/>`;
export default (ui) => ui.screen({
  id: 'newseries', theme: THEME,
  body: [
    ui.nav({ title: 'Новая серия', back: 'cancel' }),
    ui.scroll([
      ui.section({ children: ui.group({ className: 'vl-form', cells: [
        ui.cell({ title: input(newSeries.title, 'Название'), sub: 'Название' }),
        ui.cell({ title: input('Рыжик впервые видит пакет и решает, что это враг', 'Описание'), sub: 'Описание' }),
      ] }) }),
      ui.group({ label: 'Где', cells: [
        ui.cell({ icon: 'clapperboard', title: `Сезон «${newSeries.season.title}»`, sub: 'Сезон', menu: `Сейчас=Сезон «Сейчас»|Первый год=Сезон «Первый год»|Щенок=Сезон «Щенок»`, label: 'Выбрать сезон' }),
        ui.cell({ icon: 'users', title: 'Вся семья · 5 человек', sub: 'Кто видит', go: 'family' }),
      ] }),
      ui.actions(ui.button({ label: 'Создать серию', block: true, go: seasons.now.id, primary: true }), { className: 'vl-bottom' }),
    ]),
  ],
});
