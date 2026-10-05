import { THEME } from './_shared.mjs';

/* Выбор вложения, как в мессенджерах: недавние кадры, камера первой плиткой, внизу — файл, геопозиция, контакт */
const recent = [
  [1, true, ''], [2, true, '0:14'], [3, false, ''], [4, false, ''], [5, false, '0:41'],
  [6, false, ''], [7, false, ''], [8, false, ''], [9, false, '1:02'], [10, false, ''], [11, false, ''],
];
export default (ui) => ui.screen({
  id: 'attach', theme: THEME,
  body: [
    ui.nav({ title: 'Недавние', back: 'close', trailing: ui.textButton({ label: 'Отправить 2', strong: true, toast: '2 файла отправлены в «Казань · осень»|trip' }) }),
    ui.scroll([
      ui.section({ className: 'sb-attach-sec', children: `<div class="sb-grid is-attach"><button class="sb-cam-tile" data-ask="camera|camera|attach" aria-label="Камера">${ui.icon('camera')}<span>Камера</span></button>${recent.map(([i, picked, dur]) => `<button class="sb-tile ph${picked ? ' is-picked' : ''}" data-toast="${picked ? `Кадр ${i} убран из выбора` : `Кадр ${i} выбран`}" aria-label="Кадр ${i}${dur ? `, видео ${dur}` : ''}">${dur ? `<span class="sb-tile-dur">${dur}</span>` : ''}${picked ? `<span class="sb-tick">${ui.icon('check')}</span>` : ''}</button>`).join('')}</div>` }),
      ui.denied('camera'),
      ui.denied('location'),
      ui.section({ title: 'Сегодня в Казани', meta: '46 кадров', children: ui.list([
        ui.row({ lead: ui.leadIcon('images', { round: true, accent: true }), title: 'Все кадры за сегодня', sub: 'С 8:40, отель и Баумана', toast: 'Выбраны 46 кадров' }),
      ]) }),
    ]),
    `<nav class="sb-attach-bar" aria-label="Тип вложения">${[
      ['images', 'Галерея', ' class="is-on" data-toast="Галерея уже открыта"'],
      ['file-text', 'Файл', ' data-toast="Откроются Файлы"'],
      ['map-pin', 'Геопозиция', ' data-ask="location|geo|attach"'],
      ['user', 'Контакт', ' data-toast="Откроются контакты для отправки"'],
    ].map(([ic, label, a]) => `<button${a} aria-label="${label}">${ui.icon(ic)}<span>${label}</span></button>`).join('')}</nav>`,
  ],
});
