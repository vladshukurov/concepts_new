import { THEME, TABS } from './_shared.mjs';
import { clip, dog } from '../model.mjs';

/* Клипы — короткие вертикальные ролики Рыжика, один на экран, как в ВК Клипах */
const cap = (s) => s[0].toUpperCase() + s.slice(1);

export default (ui) => ui.screen({
  id: 'clips', theme: THEME, className: 'ui-clips',
  body: ui.clip({
    art: clip.art, top: 'Клипы', sub: `Сезон «Сейчас» · клип ${clip.n} из ${clip.of}`,
    author: { initials: clip.by.initial, name: cap(clip.by.short) },
    title: clip.title, meta: `вечерняя прогулка · ${clip.dur}`, text: `${dog.name}, ${dog.age}`,
    rail: [
      { icon: 'heart', label: 'Мило', count: '6', toggle: 'on' },
      { icon: 'sparkles', label: 'Смешно', count: '4', toggle: 'on' },
      { icon: 'clapperboard', label: 'Сезон «Сейчас»', count: 'Сезон', go: 'now' },
      { icon: 'share', label: 'Поделиться', menu: 'Скопировать ссылку=Ссылка скопирована|Отправить семье=Клип отправлен семье' },
    ],
    pct: 45,
  }),
  tabs: ui.tabBar({ items: TABS, active: 'clips' }),
});
