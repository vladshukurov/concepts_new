import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'album', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Альбом'),
    ui.section({ children: [
      `<div class="kl-event"><small>Дачный сезон · с апреля</small><strong>312 снимков и 9 видео</strong><span>Праздник урожая, ярмарка, поездки и обычные дни в доме правления</span></div>`,
      ui.actions([ui.button({ label: 'Смотреть на телевизоре', icon: 'cast', block: true, primary: true, go: 'tv' })]),
    ] }),
    ui.section({ title: 'Папки', meta: '9', children: ui.list([
      ui.row({ thumb: 'ph', title: 'Праздник урожая, общий кадр', sub: '41 снимок · снимала Анна Викторовна', go: 'tv' }),
      ui.row({ thumb: 'ph', title: 'Хор на сцене', sub: 'Видео 6:14 · звук глухой, снимали с задних рядов', go: 'tv' }),
      ui.row({ thumb: 'ph', title: 'Ярмарка во дворе', sub: '88 снимков · выкладывали пятеро соседей', end: { value: 'сентябрь' }, go: 'tv' }),
      ui.row({ thumb: 'ph', title: 'Садовая ярмарка', sub: '27 снимков · половина смазана', end: { value: 'май' }, go: 'tv' }),
    ]) }),
    ui.section({ title: 'Без сети', meta: '2 папки', children: ui.list([
      ui.row({ lead: `<span class="ui-thumb ph"></span>`, title: 'Скачано на телефон', sub: 'Праздник урожая и субботник · 512 МБ', end: { value: 'Освободить', toast: 'Освобождено 512 МБ', label: 'Освободить 512 МБ' } }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'album' }),
});
