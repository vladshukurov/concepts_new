import { THEME, file } from './_shared.mjs';
import { project, standup, people } from '../model.mjs';

/* Запись голосового в чат проекта: идёт запись, волна, отмена свайпом влево */
const bars = [6, 10, 14, 9, 18, 22, 12, 8, 16, 20, 24, 14, 10, 6, 12, 18, 9, 5, 4, 4];
export default (ui) => ui.screen({
  id: 'record', theme: THEME,
  body: [
    ui.chatNav({ initial: project.initial, name: project.name, status: `${project.people} участников, ${project.online} в сети`, open: { go: 'projectinfo' } }),
    `<button class="lt-pin" data-go="standup" aria-label="Летучка в ${standup.time}: повестка">${ui.icon('pin')}<span><strong>Летучка в ${standup.time} · ${standup.room}</strong><span>Пункт 1 — демо в четверг, говорит Ира</span></span>${ui.icon('chevron-right')}</button>`,
    ui.scroll(ui.chat([
      ui.bubble({ from: people.pasha.name, attach: file(ui, 'Гайд «Северная верфь» v3.pdf', '38 страниц · 24 МБ'), time: '18:12' }),
      `<p class="lt-sys">${standup.movedBy} перенёс летучку: ${standup.was} → ${standup.time}</p>`,
      ui.day('Сегодня'),
      ui.bubble({ from: people.artem.name, text: 'Клиент подтвердил демо на четверг, 15:00, у них на Чкаловском', time: '9:12' }),
      ui.bubble({ from: people.lera.name, attach: '<span class="lt-photo ph"></span>', text: 'Логотип v3 — гляньте до летучки', time: '9:58' }),
      ui.bubble({ out: true, text: 'Беру первым пунктом, покажу v3 и гайд', time: '10:01', read: true }),
    ])),
    `<div class="lt-rec" role="group" aria-label="Запись голосового"><span class="lt-rec-dot" aria-hidden="true"></span><strong class="lt-rec-time">0:07,4</strong><span class="lt-rec-wave" aria-hidden="true">${bars.map((h) => `<i class="h${h}"></i>`).join('')}</span><button class="lt-rec-cancel" data-back aria-label="Отменить запись">${ui.icon('chevron-left')}Отмена</button><button class="lt-rec-send" data-toast="Голосовое 0:07 отправлено|project" aria-label="Отправить голосовое">${ui.icon('send')}</button></div>`,
  ],
});
