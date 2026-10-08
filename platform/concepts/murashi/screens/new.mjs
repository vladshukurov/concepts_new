import { THEME } from './_shared.mjs';
import { kino } from '../model.mjs';

/* Новый звук: запись из «Диктофона» или «Файлов», название, где записано, фото места того же дня */
const input = (value, label) => `<input class="ms-input" value="${value}" aria-label="${label}"/>`;
export default (ui) => ui.screen({
  id: 'new', theme: THEME,
  body: [
    ui.nav({ title: 'Новый звук', back: 'cancel' }),
    ui.scroll([
      ui.segments([{ label: 'Из «Диктофона»', on: true, filter: 'memos' }, { label: 'Из «Файлов»', filter: 'files' }]),
      ui.section({ title: 'Запись', children: ui.list([
        ui.row({ lead: ui.leadIcon('mic'), title: kino.file, sub: `${kino.date}, ${kino.time} · ${kino.dur}`, end: { icon: 'check', linkColor: true }, now: true, tags: ['memos'] }),
        ui.row({ lead: ui.leadIcon('mic'), title: 'Новая запись 50', sub: '24 августа, 07:05 · 2:12', tags: ['memos'] }),
        ui.row({ lead: ui.leadIcon('folder'), title: 'Электричка_Икша.m4a', sub: '30 августа · 5:48', tags: ['files'], className: 'is-filtered-out' }),
      ]) }),
      ui.group({ label: 'Название', cells: [ui.cell({ title: input(kino.title, 'Название') })] }),
      ui.group({ label: 'Где записано', cells: [ui.cell({ icon: 'map-pin', title: input(kino.where, 'Где записано') })] }),
      ui.group({ label: 'Фото места', cells: [
        ui.cell({ icon: 'images', title: 'Фото того же дня', label: 'Фото того же дня', sub: `${kino.date} в «Фото»`, ask: 'photos|pick|new' }),
      ] }),
      ui.section({ shownAfter: 'photos', children: ui.list([ui.row({ lead: `<span class="ui-thumb ${kino.picked}"></span>`, title: 'Фото места выбрано', sub: `снимок ${kino.date}, 21:20` })]) }),
      ui.denied('photos'),
      ui.group({ cells: [ui.cell({ icon: 'layers', title: 'В коллекцию «Лето 2026»', toggle: true })] }),
      ui.actions(ui.button({ label: 'Сохранить', block: true, go: 'kino', primary: true })),
    ]),
  ],
});
