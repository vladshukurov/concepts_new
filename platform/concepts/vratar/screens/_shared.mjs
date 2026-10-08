/** Общее для экранов «Вратаря». Файл с «_» — не экран, сборка его пропускает. */
import * as ui from '../../../kernel/components.mjs';
import { best } from '../model.mjs';

export const THEME = 'vk-dark';
export const TABS = [
  { id: 'home', label: 'Главная', icon: 'house' },
  { id: 'clips', label: 'Клипы', icon: 'square-play' },
  { id: 'create', label: 'Создать', icon: 'plus' },
  { id: 'matches', label: 'Матчи', icon: 'trophy' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];

/* Свёрнутый плеер: лучший момент недели досматривается над таб-баром */
export const MINI = ui.miniPlayer({
  face: best.art, title: best.title, sub: `${best.who.short} · 0:04 из ${best.dur}`,
  open: { go: 'watch' }, playAction: { label: 'Продолжить' }, progressClass: 'vr-p30',
});

/** Строка ленты идущего матча: кадр, минута, кто снял */
export const feedRow = (ui, m) => ui.row({ thumb: m.art, wide: true, duration: m.dur, title: m.title, sub: `${m.min}' · снял ${m.by}` });
