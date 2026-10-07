import { THEME } from './_shared.mjs';
import { regent } from '../model.mjs';

/* Запись своей партии в чат альтов: идёт запись, волна, отмена — назад */
const bars = [6, 10, 14, 9, 18, 22, 12, 8, 16, 20, 24, 14, 10, 6, 12, 18, 9, 5, 4, 4];
export default (ui) => ui.screen({
  id: 'record', theme: THEME,
  body: [
    ui.chatNav({ initial: 'АП', name: 'Альты · партии', status: 'идёт запись партии' }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.voice({ from: regent.name, dur: '3:40', time: '7:02' }),
      ui.bubble({ from: regent.name, text: '«Ой, то не вечер», альты. Порядок в программе новый, он теперь шестой', time: '7:03' }),
      ui.bubble({ from: regent.name, text: 'Выздоравливайте. Альты, распеваемся в 18:50', time: '18:44' }),
      '<p class="sp-sys">Запись партии · «Ой, то не вечер», альт</p>',
    ])),
    `<div class="sp-rec" role="group" aria-label="Запись партии"><span class="sp-rec-dot" aria-hidden="true"></span><strong class="sp-rec-time">0:47,2</strong><span class="sp-rec-wave" aria-hidden="true">${bars.map((h) => `<i class="h${h}"></i>`).join('')}</span><button class="sp-rec-cancel" data-back aria-label="Отменить запись">${ui.icon('chevron-left')}Отмена</button><button class="sp-rec-send" data-toast="Партия 0:47 отправлена альтам|altos" aria-label="Отправить запись">${ui.icon('send')}</button></div>`,
  ],
});
