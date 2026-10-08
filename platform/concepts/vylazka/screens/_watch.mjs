/** Плеер «Вылазки»: кадр 4:3, под ним главы по точкам маршрута с подписями. Файл с «_» — не экран. */
import { THEME } from './_shared.mjs';
import { films, fMeta, filmChapters, lastTrip } from '../model.mjs';

/* Подписанные главы под плеером: старт · родник · смотровая · финиш, текущая подсвечена */
const chapterStrip = (now) => {
  const i = filmChapters.findIndex(([p]) => p === now);
  return `<div class="vy-chapters" aria-label="Главы по точкам маршрута">${filmChapters.map(([p, t, w], k) =>
    `<span class="vy-g${w}${k < i ? ' is-done' : ''}${k === i ? ' is-now' : ''}">${p}<small>${t}</small></span>`).join('')}</div>`;
};

export const watchScreen = (ui, key, { pip = false, fill = 'vy-p20', save = false } = {}) => {
  const f = films[key];
  const i = filmChapters.findIndex(([p]) => p === f.point);
  const isFilm = key === 'film';
  const others = Object.entries(films).filter(([k]) => k !== key && k !== 'film');
  return ui.screen({
    id: f.id, theme: THEME, className: 'vy-wrap',
    body: ui.scroll([
      ui.player({
        art: f.art, at: f.at, total: f.dur, fillClass: fill, playing: true, className: 'is-root vy-player',
        chapters: isFilm ? filmChapters.map(([label, , w], k) => ({ label, w, state: k < i ? 'done' : k === i ? 'now' : undefined })) : [],
        chapter: isFilm ? `Глава «${f.point}»` : `Привал · ${f.point}`,
        collapse: { go: 'home', label: 'Свернуть в окошко' },
        settings: pip ? { menu: 'Качество · 1080p=Качество 1080p|Скорость · 1,5×=Скорость 1,5×|Звук при погашенном экране>lock', label: 'Настройки просмотра' } : undefined,
        pip: pip ? { activate: 'audio|background' } : undefined,
        fullscreen: { toast: 'Во весь экран — поверните телефон' },
      }),
      ui.section({ children: [
        chapterStrip(f.point),
        `<h1 class="ui-title vy-watch-title">${f.title}</h1>`,
        ui.foot(isFilm ? `Склеил ${f.by.short} · ${f.meta}` : `Снял${f.by.short === 'Лена' || f.by.short === 'Саша' ? 'а' : ''} ${f.by.short} · ${f.meta}`, 'vy-watch-meta'),
      ] }),
      save ? ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('download', { round: true, accent: true }), title: 'Сохранить фильм похода в «Фото»', sub: `${f.dur} одним роликом · главы по точкам`, ask: 'photosadd|watch|watch' }),
        ui.row({ shownAfter: 'photosadd', lead: ui.leadIcon('images', { round: true, accent: true }), title: `Фильм похода · ${f.dur} в «Фото»`, sub: 'Альбом «Вылазка» · 1080p · 236 МБ' }),
      ]) }) : '',
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('footprints', { round: true, accent: true }), title: lastTrip.title, sub: lastTrip.meta, go: 'trip' }),
      ]) }),
      ui.section({ title: isFilm ? 'Ролики фильма' : 'Ещё с этой вылазки', children: ui.list(others.map(([, o]) =>
        ui.row({ thumb: o.art, wide: true, duration: o.dur, title: o.title, sub: fMeta(o), go: o.id }))) }),
    ]),
  });
};
