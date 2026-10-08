/** Шапка страницы сезона как канала: обложка, Рыжик, сезон, семья. Файл с «_» — не экран. */
import { dog, people } from '../model.mjs';

export const seasonHead = (ui, s, line) => [
  `<div class="vl-banner ${s.art}"></div>`,
  ui.section({ children: [
    `<div class="vl-channel">${ui.avatar(dog.initial, { large: true })}<span class="ui-row-text"><strong>Сезон «${s.title}»</strong><span>${line}</span></span></div>`,
    ui.usersStack({ faces: [people.mama.initial, people.papa.initial, people.tema.initial], text: 'Мама, папа, Тёма и бабушка смотрят', go: 'family' }),
  ] }),
];
