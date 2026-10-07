import { THEME } from './_shared.mjs';
import { family, video } from '../model.mjs';

/* Альбом семьи: фото и видео всех; видео недели собирается ночью, пока телефон на зарядке */
const tile = (i, kind, dur) => `<button class="sv-tile ph" data-tags="${kind}" data-toast="${kind === 'video' ? `Видео ${dur}` : `Снимок ${i}`}" aria-label="${kind === 'video' ? `Видео ${dur}` : `Снимок ${i}`}">${dur ? `<span class="sv-tile-dur">${dur}</span>` : ''}</button>`;
const week = [[1, 'photo'], [2, 'video', '0:21'], [3, 'photo'], [4, 'photo'], [5, 'photo'], [6, 'video', '0:09'], [7, 'photo'], [8, 'photo'], [9, 'photo']];
const last = [[10, 'photo'], [11, 'photo'], [12, 'video', '0:34'], [13, 'photo'], [14, 'photo'], [15, 'photo']];
export default (ui) => ui.screen({
  id: 'album', theme: THEME,
  body: [
    ui.nav({ title: 'Альбом семьи', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с альбомом', menu: ['Добавить из «Фото»>share', `Скачать всё=Скачивание ${family.photos} фото началось`] }) }),
    ui.scroll([
      ui.section({ children: ui.segments([
        { label: 'Все', on: true, filter: 'all' },
        { label: 'Фото', filter: 'photo' },
        { label: 'Видео', filter: 'video' },
      ]) }),
      ui.section({ title: 'Видео недели', children: [
        ui.list([
          ui.row({ lead: ui.leadIcon('film', { round: true, accent: true }), title: 'Прошлая неделя · готово', sub: `${video.last.dur} · ${video.last.frames} кадров · собрано в ${video.last.at}`, end: { icon: 'play', toast: `Видео недели ${video.last.dur}`, label: 'Смотреть видео прошлой недели' } }),
          ui.row({ lead: ui.leadIcon('images', { round: true, accent: true }), title: 'Альбом «Гариповы» в «Фото»', sub: 'Фото недели сохранены в альбом ночью' }),
          ui.row({ lead: ui.leadIcon('film', { round: true }), title: 'Эта неделя · ещё снимаем', sub: `${video.week.frames} кадров и ${video.week.clips} видео · до воскресенья` }),
        ]),
        ui.actions([ui.button({ label: 'Собрать видео недели ночью', icon: 'clapperboard', variant: 'secondary', block: true, activate: 'processing|album', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'processing', children: ui.list([
        ui.row({ lead: ui.leadIcon('moon', { round: true, accent: true }), title: 'Видео недели — к утру', sub: 'Соберётся ночью, когда телефон на зарядке и в Wi‑Fi' }),
      ]) }),
      ui.section({ title: 'Эта неделя', meta: `${video.week.frames + video.week.clips} файлов`, children: `<div class="sv-grid">${week.map(([i, k, d]) => tile(i, k, d)).join('')}</div>` }),
      ui.section({ title: 'Прошлая неделя', meta: '96 файлов', children: `<div class="sv-grid">${last.map(([i, k, d]) => tile(i, k, d)).join('')}</div>` }),
    ]),
  ],
});
