import { THEME } from './_shared.mjs';
import { project } from '../model.mjs';

/* Выбор вложения, как в мессенджерах: недавние кадры, камера первой плиткой, внизу — файл, геопозиция, контакт */
const recent = [
  [1, true, ''], [2, true, ''], [3, false, '0:14'], [4, false, ''], [5, false, ''],
  [6, false, ''], [7, false, '0:41'], [8, false, ''], [9, false, ''], [10, false, ''], [11, false, ''],
];
export default (ui) => ui.screen({
  id: 'attach', theme: THEME,
  body: [
    ui.nav({ title: 'Недавние', back: 'close', trailing: ui.textButton({ label: 'Отправить 2', strong: true, toast: `2 кадра отправлены в «${project.name}»|project` }) }),
    ui.scroll([
      ui.section({ className: 'lt-attach-sec', children: `<div class="lt-grid is-attach"><button class="lt-cam-tile" data-ask="camera|camera|attach" aria-label="Камера">${ui.icon('camera')}<span>Камера</span></button>${recent.map(([i, picked, dur]) => `<button class="lt-tile ph${picked ? ' is-picked' : ''}" data-toast="${picked ? `Кадр ${i} убран из выбора` : `Кадр ${i} выбран`}" aria-label="Кадр ${i}${dur ? `, видео ${dur}` : ''}">${dur ? `<span class="lt-tile-dur">${dur}</span>` : ''}${picked ? `<span class="lt-tick">${ui.icon('check')}</span>` : ''}</button>`).join('')}</div>` }),
      ui.denied('camera'),
      ui.denied('location'),
      ui.section({ title: 'Сегодня', meta: '12 кадров', children: ui.list([
        ui.row({ lead: ui.leadIcon('images', { round: true, accent: true }), title: 'Снимки доски с летучки', sub: 'Вчера в 10:48, 5 кадров маркером', toast: 'Выбраны 5 кадров доски' }),
      ]) }),
    ]),
    `<nav class="lt-attach-bar" aria-label="Тип вложения">${[
      ['images', 'Галерея', ' class="is-on" data-toast="Галерея уже открыта"'],
      ['file-text', 'Файл', ' data-go="share"'],
      ['map-pin', 'Геопозиция', ' data-ask="location|geo|attach"'],
      ['user', 'Контакт', ' data-toast="Откроются контакты для отправки"'],
    ].map(([ic, label, a]) => `<button${a} aria-label="${label}">${ui.icon(ic)}<span>${label}</span></button>`).join('')}</nav>`,
  ],
});
