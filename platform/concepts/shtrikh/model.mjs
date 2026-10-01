/**
 * Модель домена «Штриха»: городские скетчеры, места, серии и пленэры.
 * «Сейчас» — пятница, 18 сентября, 18:24: Алина только что выложила липу
 * на Панфилова, завтра утром — пленэр на Зелёном базаре.
 */
import { moment, dateLabel, dayLabel } from '../../kernel/world.mjs';

export const now = moment('2026-09-18', '18:24');
export const city = { name: 'Алматы', authors: 32, places: 14 };

/* Рисунки — зарисовки кодом (sh-s1…s6): фасады, липа, навес базара, мост терренкура */
export const people = {
  me: { name: 'Анна Разумова', first: 'Анна', initial: 'АР', about: 'это вы · 36 работ' },
  alina: { name: 'Алина Рахимова', first: 'Алина', initial: 'АЛ', about: 'линер, акварель · 128 работ' },
  misha: { name: 'Миша Ким', first: 'Миша', initial: 'МК', about: 'быстрые наброски' },
  lera: { name: 'Лера Ян', first: 'Лера', initial: 'ЛЯ', about: 'акварель' },
  petr: { name: 'Пётр Ильин', first: 'Пётр', initial: 'ПИ', about: 'линер · в контактах «Петя»' },
  marina: { name: 'Марина Ли', first: 'Марина', initial: 'МЛ', about: 'ведёт пленэры' },
};

export const places = {
  panfilova: { name: 'Панфилова, 84', series: 'Один двор, четыре погоды', works: 27, authors: 14, art: 'sh-s1' },
  bazar: { name: 'Зелёный базар', works: 42, authors: 19, art: 'sh-s3' },
  terrenkur: { name: 'Терренкур', works: 18, authors: 11, art: 'sh-s4' },
};

export const pleinair = { title: 'Утро на Зелёном базаре', iso: '2026-09-19', day: dateLabel('2026-09-19'), date: dayLabel('2026-09-19'), start: '09:00', where: 'главный вход, у часов', people: 18, host: people.marina };
export const walk = { title: 'Линии старого города', iso: '2026-09-26', day: dateLabel('2026-09-26'), start: '16:30', where: 'сквер у театра', people: 24 };
export const exhibit = { title: 'Город в линиях', network: 'Shtrikh-Guest', until: '30 сентября' };

export const entities = [
  { name: 'Автор', what: 'скетчер с работами, сериями и подписчиками', states: ['не подписаны', 'подписаны'], screens: ['profile', 'authors', 'menu'] },
  { name: 'Работа', what: 'зарисовка с местом, материалами и голосовой заметкой', states: ['черновик', 'опубликована', 'в серии'], screens: ['home', 'post', 'compose', 'shoot', 'picker'] },
  { name: 'Место', what: 'точка города, которая связывает работы разных авторов', states: ['новое', 'с серией'], screens: ['places', 'series'] },
  { name: 'Серия', what: 'взгляды разных авторов на одно место', states: ['растёт', 'закрыта'], screens: ['series', 'home'] },
  { name: 'Пленэр', what: 'встреча рисовать вместе: место, время, участники', states: ['запись открыта', 'завтра', 'идёт', 'прошёл'], screens: ['events', 'chat', 'call'] },
  { name: 'Выставка', what: 'работы рядом на общем экране площадки', states: ['не подключены', 'на выставке'], screens: ['exhibit', 'scan'] },
  { name: 'Диалог', what: 'чат пленэра или личная переписка', states: ['есть непрочитанные', 'прочитан'], screens: ['chats', 'chat', 'direct', 'call'] },
];
