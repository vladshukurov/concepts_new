import { THEME } from './_shared.mjs';
import { regent, drill } from '../model.mjs';

/* Запись своей партии из разбора: такты 17–24 под запись регента, отправка — в чат альтов, отмена — назад в разбор */
const [a, b] = drill.spot;
const bars = [6, 10, 14, 9, 18, 22, 12, 8, 16, 20, 24, 14, 10, 6, 12, 18, 9, 5, 4, 4];
export default (ui) => ui.screen({
  id: 'record', theme: THEME,
  body: [
    ui.chatNav({ initial: 'АП', name: 'Альты · партии', status: 'идёт запись партии' }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ from: regent.name, text: `Альты, в «${drill.piece}» отметила такты ${a}–${b} — тут сбиваемся. Пройдите кусок дома`, time: '7:05' }),
      ui.bubble({ from: regent.name, text: 'Выздоравливайте. Альты, распеваемся в 19:15', time: '18:44' }),
      `<p class="sp-sys">Запись партии · «${drill.piece}», такты ${a}–${b} под запись Ирины</p>`,
    ])),
    `<div class="sp-rec" role="group" aria-label="Запись партии"><span class="sp-rec-dot" aria-hidden="true"></span><strong class="sp-rec-time">0:31,4</strong><span class="sp-rec-wave" aria-hidden="true">${bars.map((h) => `<i class="h${h}"></i>`).join('')}</span><button class="sp-rec-cancel" data-back aria-label="Отменить запись">${ui.icon('chevron-left')}Отмена</button><button class="sp-rec-send" data-go="altos" aria-label="Отправить запись в чат альтов">${ui.icon('send')}</button></div>`,
  ],
});
