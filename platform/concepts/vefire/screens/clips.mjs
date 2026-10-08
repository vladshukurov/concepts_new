import { THEME, TABS } from './_shared.mjs';
import { clip } from '../model.mjs';

/* Клипы — неудачные дубли выпусков, один на экран */
export default (ui) => ui.screen({
  id: 'clips', theme: THEME, className: 'ui-clips',
  body: ui.clip({
    art: clip.art, top: 'Клипы', sub: `Неудачные дубли · ${clip.n} из ${clip.of}`,
    author: { initials: clip.by.initial, name: 'Папа' },
    title: clip.title, meta: `дубль с кухни · ${clip.dur}`, text: 'Снимал Миша, ведущий не выдержал',
    rail: [
      { icon: 'heart', label: 'Мило', count: '7', toggle: 'on' },
      { icon: 'sparkles', label: 'Смешно', count: '12', toggle: 'on' },
      { icon: 'tv', label: 'Выпуск недели', count: 'Выпуск', go: 'weekly' },
      { icon: 'share', label: 'Поделиться', menu: 'Скопировать ссылку=Ссылка скопирована|Отправить бабушке=Клип отправлен бабушке' },
    ],
    pct: 45,
  }),
  tabs: ui.tabBar({ items: TABS, active: 'clips' }),
});
