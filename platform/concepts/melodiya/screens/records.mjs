import { THEME, TABS, MINI, ico } from './_shared.mjs';
import { tones, song, records } from '../model.mjs';

/* Записи-источники из «Диктофона» и «Файлов»: из сегодняшней ещё не сделана мелодия */
const rec = (ui, t) => ui.row({ lead: ico(t.source === 'Файлы' ? 'folder' : 'mic'), title: t.rec, sub: `${t.when} · ${t.total} · мелодия «${t.title}»`, end: ui.play({ size: 's', label: `Слушать: ${t.rec}` }) });
export default (ui) => ui.screen({
  id: 'records', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Записи', ui.iconButton({ icon: 'plus', label: 'Новая мелодия', go: 'newtone' })),
    ui.chips([{ label: 'Все', on: true, filter: 'all' }, { label: '«Диктофон»', filter: 'memos' }, { label: '«Файлы»', filter: 'files' }]),
    ui.section({ title: 'Ещё не мелодия', tags: ['memos'], children: ui.list([
      ui.row({ lead: ico('mic', true), title: song.rec, sub: `${song.when}, 20:52 · ${song.total} · ${song.note}`, end: { value: 'вырезать' }, go: 'newtone', label: `Новая мелодия · ${song.rec}` }),
    ]) }),
    ui.section({ title: 'Из «Диктофона»', meta: `${records.recorder} записи`, tags: ['memos'], children: ui.list([
      rec(ui, tones.laugh), rec(ui, tones.podyom), rec(ui, tones.kettle), rec(ui, tones.rain),
    ]) }),
    ui.section({ title: 'Из «Файлов»', meta: `${records.files} файла`, tags: ['files'], children: [ui.list([rec(ui, tones.repet)]), ui.foot('ещё 3 файла без мелодий · 41 МБ')] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'records', mini: MINI }),
});
