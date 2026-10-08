import { THEME } from './_shared.mjs';
import { sonata, notes } from '../model.mjs';

/* Новая пьеса: название, инструмент, темп сейчас и цель, ноты из «Фото» */
const input = (value, label, mode = 'text') => `<input class="mt-input" value="${value}" aria-label="${label}" inputmode="${mode}"/>`;
export default (ui) => ui.screen({
  id: 'newpiece', theme: THEME,
  body: [
    ui.nav({ title: 'Новая пьеса', back: 'cancel' }),
    ui.scroll([
      ui.group({ label: 'Пьеса', cells: [ui.cell({ title: input(sonata.title, 'Название пьесы'), sub: 'Название' })] }),
      ui.segments([{ label: 'Гитара', filter: 'guitar' }, { label: 'Фортепиано', on: true, filter: 'piano' }, { label: 'Другое', filter: 'other' }]),
      ui.group({ label: 'Темп, ударов в минуту', cells: [
        ui.cell({ title: input(sonata.from, 'Темп сейчас', 'numeric'), sub: 'Получается сейчас' }),
        ui.cell({ title: input(sonata.goal, 'Цель', 'numeric'), sub: 'Цель' }),
      ] }),
      ui.group({ label: 'Ноты', cells: [
        ui.cell({ icon: 'images', title: 'Ноты и табы из «Фото»', label: 'Ноты и табы из «Фото»', sub: 'снимки страниц и скриншоты табов', ask: 'photos|photopick|newpiece' }),
      ] }),
      ui.denied('photos'),
      ui.section({ shownAfter: 'photos', children: [
        `<div class="mt-notes is-pad">${notes.tabs.map((a) => `<span class="${a}"></span>`).join('')}</div>`,
        ui.foot('2 снимка из «Фото» · встанут в раздел «Ноты»'),
      ] }),
      ui.actions(ui.button({ label: 'Добавить пьесу', block: true, go: 'sonata', primary: true })),
    ]),
  ],
});
