import { THEME } from './_shared.mjs';
import { draft } from '../model.mjs';

/* Новый выпуск: название, рубрика, ведущий; «Снять выпуск» — камера со звуком */
const input = (value, label) => `<input class="vf-input" value="${value}" aria-label="${label}"/>`;
export default (ui) => ui.screen({
  id: 'newissue', theme: THEME,
  body: [
    ui.nav({ title: 'Новый выпуск', back: 'cancel' }),
    ui.scroll([
      ui.section({ children: ui.group({ className: 'vf-form', cells: [
        ui.cell({ title: input(draft.title, 'Название'), sub: 'Название' }),
        ui.cell({ title: input('Миша спрашивает соседей, кто первый скатится', 'О чём выпуск'), sub: 'О чём выпуск' }),
      ] }) }),
      ui.group({ label: 'Выпуск', cells: [
        ui.cell({ icon: 'clapperboard', title: draft.rubric.title, sub: 'Рубрика', menu: 'Новости двора=Рубрика «Новости двора»|Погода от Сони=Рубрика «Погода от Сони»|Мусины новости=Рубрика «Мусины новости»', label: 'Выбрать рубрику' }),
        ui.cell({ icon: 'mic', title: draft.host.name, sub: 'Ведущий', menu: 'Миша=Ведёт Миша|Соня=Ведёт Соня', label: 'Выбрать ведущего' }),
      ] }),
      ui.actions(ui.button({ label: 'Снять выпуск', icon: 'video', block: true, ask: 'camera+mic|camera|newissue', primary: true }), { className: 'vf-bottom' }),
      ui.denied('camera,mic'),
    ]),
  ],
});
