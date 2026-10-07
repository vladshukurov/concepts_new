import { THEME, file } from './_shared.mjs';
import { project, standup, people } from '../model.mjs';

/* Чат проекта: закреп летучки с пунктом проекта, макеты, файлы и голосовые команды */
export default (ui) => ui.screen({
  id: 'project', theme: THEME,
  body: [
    ui.chatNav({ initial: project.initial, name: project.name, status: `${project.people} участников, ${project.online} в сети`, open: { go: 'projectinfo' } }),
    `<button class="lt-pin" data-go="office" aria-label="Летучка">${ui.icon('pin')}<span><strong>Летучка в ${standup.time} · ${standup.room}</strong><span>апдейты до ${standup.time} · Лера: нет доступа к макетам</span></span>${ui.icon('chevron-right')}</button>`,
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ from: people.pasha.name, attach: file(ui, 'Гайд «Северная верфь» v3.pdf', '38 страниц · 24 МБ', 'files'), time: '18:12' }),
      `<p class="lt-sys">${standup.movedBy} перенёс летучку: ${standup.was} → ${standup.time}</p>`,
      ui.day('Сегодня'),
      ui.bubble({ from: people.artem.name, text: 'Клиент подтвердил демо на четверг, 15:00, у них на Чкаловском', time: '9:12' }),
      ui.voice({ from: people.pasha.name, dur: '0:52', time: '9:40' }),
      ui.bubble({ from: people.lera.name, attach: '<span class="lt-photo ph"></span>', text: 'Логотип v3 — гляньте до летучки', time: '9:58' }),
      ui.bubble({ out: true, text: 'Написала в летучку: прогон демо в 12:00. Артём, Лере нужен доступ к макетам', time: '10:01', read: true }),
      `<div class="lt-shared perm-hidden" data-show-granted="shareext">${ui.bubble({ out: true, attach: file(ui, 'Бриф_подписанный.pdf', 'из Файлов · 2 страницы · 1,2 МБ'), text: 'Подписанный бриф, для демо', time: '10:05', read: true })}</div>`,
    ])),
    ui.denied('photos'),
    ui.denied('mic'),
    ui.composer({ attach: { label: 'Вложение', ask: 'photos|attach|project' }, mic: { ask: 'mic|record|project', label: 'Записать голосовое' } }),
  ],
});
