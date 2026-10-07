import { THEME } from './_shared.mjs';
import { family, home, people, pickup } from '../model.mjs';

/* Запись голосового в чат семьи: идёт запись, волна, отмена */
const bars = [6, 10, 14, 9, 18, 22, 12, 8, 16, 20, 24, 14, 10, 6, 12, 18, 9, 5, 4, 4];
export default (ui) => ui.screen({
  id: 'record', theme: THEME,
  body: [
    ui.chatNav({ initial: family.initial, name: family.name, status: `${family.members} участников, ${family.online} в сети` }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ from: people.oksana.name, text: `Довела Милу, забирать в ${pickup.to}`, time: '15:34' }),
      `<p class="sv-sys">${people.danya.short} дома с ${home.danyaSince} · ${family.ssid}</p>`,
      ui.bubble({ from: people.danya.name, text: 'Я дома, суп поел', time: '15:42' }),
      ui.bubble({ from: people.timur.name, text: `Задержусь до ${home.timurBack}, ужинайте без меня`, time: '15:58' }),
    ])),
    `<div class="sv-rec" role="group" aria-label="Запись голосового"><span class="sv-rec-dot" aria-hidden="true"></span><strong class="sv-rec-time">0:07,4</strong><span class="sv-rec-wave" aria-hidden="true">${bars.map((h) => `<i class="h${h}"></i>`).join('')}</span><button class="sv-rec-cancel" data-back aria-label="Отменить запись">${ui.icon('chevron-left')}Отмена</button><button class="sv-rec-send" data-toast="Голосовое 0:07 отправлено|family" aria-label="Отправить голосовое">${ui.icon('send')}</button></div>`,
  ],
});
