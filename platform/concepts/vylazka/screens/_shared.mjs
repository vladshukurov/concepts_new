/** Общее для экранов «Вылазки». Файл с «_» — не экран, сборка его пропускает. */
import * as ui from '../../../kernel/components.mjs';
import { films } from '../model.mjs';

export const THEME = 'vk-dark';
export const TABS = [
  { id: 'home', label: 'Главная', icon: 'house' },
  { id: 'clips', label: 'Клипы', icon: 'square-play' },
  { id: 'create', label: 'Создать', icon: 'plus' },
  { id: 'routes', label: 'Маршруты', icon: 'route' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];

/* Свёрнутый плеер: фильм прошлой вылазки досматривается окошком над таб-баром */
export const MINI = ui.videoMini({ art: films.film.art, title: films.film.title, open: { go: 'watch' }, pct: 27 });

/**
 * Полоска маршрута: точка — привал, отрезок — по длине. done — сколько точек пройдено
 * (отрезки до них подсвечены); you — после какой точки стоит отметка «вы здесь».
 */
export const strip = (route, { done = 0, you, className = '' } = {}) => {
  const parts = [];
  route.points.forEach((_, i) => {
    const last = i === route.points.length - 1;
    parts.push(`<i class="${[last && 'is-end', i < done && 'is-done'].filter(Boolean).join(' ')}"></i>`);
    if (you === i) parts.push(`<span class="vy-you perm-hidden" data-show-granted="location">${ui.icon('navigation')}</span>`);
    if (!last) parts.push(`<b class="vy-g${route.seg[i]}${i + 1 < done ? ' is-done' : ''}"></b>`);
  });
  return `<span class="vy-strip ${className}">${parts.join('')}</span>`;
};

/** Карточка маршрута-серии: кадр, полоска точек-привалов, название и счёт вылазок */
export const routeCard = (route, { sub, badge, live = false, done = 0, go }) =>
  `<button class="vy-rcard"${ui.act({ go, label: route.name })}><span class="vy-rcard-art ${route.art}">${live ? '<span class="vy-rcard-live">в пути</span>' : ''}${badge ? ui.duration(badge) : ''}</span>${strip(route, { done })}<strong>${route.name}</strong><span>${sub}</span></button>`;

/** Строка ролика с привала сегодняшнего похода: кадр, точка, кто снял */
export const haltRow = (h) => ui.row({ thumb: h.art, wide: true, duration: h.dur, title: h.title, sub: `${h.time} · ${h.point} · снял ${h.by}` });
