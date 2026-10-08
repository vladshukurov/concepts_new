import { THEME } from './_shared.mjs';
import { video } from '../model.mjs';

/* Видео концерта: ролики участников с разных рядов; собирается в одно видео ночью, пока телефон на зарядке */
const clips = [['0:42', 'ДО'], ['1:15', 'ЛК'], ['0:38', 'ВЛ'], ['2:04', 'ОС'], ['0:51', 'ТА'], ['1:27', 'АБ'], ['0:33', 'СК'], ['1:09', 'МГ'], ['0:46', 'ОП']];
export default (ui) => ui.screen({
  id: 'video', theme: THEME,
  body: [
    ui.nav({ title: 'Видео концерта', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с видео', menu: ['Скачать ролики=Скачивание 38 роликов началось', 'Выбрать'] }) }),
    ui.scroll([
      ui.section({ title: 'Концерты', children: [
        ui.list([
          ui.row({ lead: ui.leadIcon('film', { round: true, accent: true }), title: 'Летний концерт · готово', sub: `${video.past.dur} · ${video.past.clips} ролика · собрано 29 августа в 3:40`, end: { icon: 'play', toggle: 'play', label: 'Смотреть летний концерт' } }),
          ui.row({ lead: ui.leadIcon('film', { round: true }), title: `${video.title} · ролики приходят`, sub: `${video.clips} роликов от ${video.from} участников · до 23:00 ещё пришлют` }),
        ]),
        ui.actions([ui.button({ label: 'Собрать видео концерта ночью', icon: 'clapperboard', variant: 'secondary', block: true, activate: 'processing|video', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'processing', children: ui.list([
        ui.row({ lead: ui.leadIcon('moon', { round: true, accent: true }), title: 'Видео концерта — к утру', sub: `${video.clips} роликов сведутся по звуку ночью, когда телефон на зарядке и в Wi‑Fi` }),
      ]) }),
      ui.section({ title: `${video.title} · ${video.date}`, meta: `${video.clips} роликов`, children: `<div class="sp-grid">${clips.map(([dur, ini], i) => `<button class="sp-tile ph" data-toast="Ролик ${i + 1} · ${dur}" aria-label="Ролик ${i + 1}, ${dur}"><span class="sp-tile-who">${ini}</span><span class="sp-tile-dur">${dur}</span></button>`).join('')}</div>` }),
    ]),
  ],
});
