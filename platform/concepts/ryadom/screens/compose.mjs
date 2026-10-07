import { THEME } from './_shared.mjs';
import { own } from '../model.mjs';

/* Новая запись в свой дневник: вчерашняя пробежка, кадр техники, голосовая заметка */
const done = (ui, title, sub, key, a = {}) => ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title, sub, shownAfter: key, ...a });
export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Новая запись', back: 'cancel', trailing: ui.textButton({ label: 'Сохранить', strong: true, toast: 'Запись в дневнике|feed', primary: true }) }),
    ui.scroll([
      ui.section({ children: `<p class="ry-text">${own.run.short} вчера, 6,4 км: со 2-го км держал 6:10, на объезде моста подсел до 6:44. Пить на 3-м км, а не на 5-м</p>` }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять технику', sub: 'Фото или видео со звуком', ask: 'camera|shoot|compose' }),
        ui.cell({ icon: 'image', title: 'Из медиатеки', sub: `Кадры с этой пробежки · ${own.run.span}`, ask: 'photos|picker|compose' }),
        ui.cell({ icon: 'mic', title: 'Надиктовать заметку', sub: 'Как прошло, пока помнишь', ask: 'mic|compose|compose' }),
        ui.cell({ icon: 'map-pin', title: 'Точка старта', sub: 'Где начинал', go: 'place' }),
        ui.cell({ icon: 'route', title: 'Маршрут', value: own.run.short }),
      ] }) }),
      ui.denied('camera'),
      ui.denied('photos'),
      ui.denied('mic'),
      ui.section({ title: 'В записи', children: ui.list([
        ui.row({ lead: ui.leadIcon('route', { accent: true }), title: 'Схема пробежки', sub: `6,4 км · ${own.run.time} · темп ${own.run.pace}` }),
        ui.row({ thumb: 'ph', duration: '0:38', title: 'Постановка стопы на дорожке', sub: 'Видео · только что', shownAfter: 'camera' }),
        ui.row({ thumb: 'ph', title: '2 кадра с пробежки', sub: 'Вчера, 21:12 и 21:37', shownAfter: 'photos' }),
        done(ui, 'Голосовая заметка · 0:19', 'Прослушать перед сохранением', 'mic', { toast: 'Воспроизведение 0:19' }),
      ]) }),
      ui.section({ title: 'Самочувствие', children: ui.list([
        ui.row({ lead: ui.leadIcon('gauge'), title: 'Тяжесть 6 из 10', sub: 'Тяжелее прошлой субботы — ветер с реки' }),
        ui.row({ lead: ui.leadIcon('footprints'), title: 'Колено', sub: 'Не ныло, на спуске чуть тянуло' }),
      ]) }),
    ]),
  ],
});
