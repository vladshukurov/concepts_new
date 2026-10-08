/** Шапка страницы рубрики: обложка и ведущий. Файл с «_» — не экран. */
import { people } from '../model.mjs';

export const rubricHead = (ui, r, line) => [
  `<div class="vf-banner ${r.art}"><span>${r.title}</span></div>`,
  ui.section({ children: [
    `<div class="vf-host">${ui.avatar(r.host.initial, { large: true })}<span class="ui-row-text"><strong>Ведёт ${r.host.short}</strong><span>${line}</span></span></div>`,
    ui.usersStack({ faces: [people.me.initial, people.papa.initial, people.nina.initial], text: 'Мама, папа и бабушка смотрят', go: 'family' }),
  ] }),
];
