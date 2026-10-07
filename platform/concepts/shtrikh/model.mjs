/**
 * Модель домена «Вглядись»: свой скетчбук, свои места и серии, встречи рисовать вместе.
 * «Сейчас» — пятница, 18 сентября, 18:24: Алина только что выложила липу
 * на Панфилова, завтра утром — встреча на Зелёном базаре.
 */
import { moment, dateLabel, dayLabel } from '../../kernel/world.mjs';

export const now = moment('2026-09-18', '18:24');
export const city = { name: 'Алматы', authors: 32, places: 14 };

/* Рисунков кодом нет: кадр зарисовки — плейсхолдер .ph, люди — инициалы */
export const people = {
  me: { name: 'Анна Разумова', first: 'Анна', initial: 'АР', about: 'это вы' },
  alina: { name: 'Алина Рахимова', first: 'Алина', initial: 'АЛ', about: 'линер, акварель · ходит на встречи' },
  misha: { name: 'Миша Ким', first: 'Миша', initial: 'МК', about: 'быстрые наброски' },
  lera: { name: 'Лера Ян', first: 'Лера', initial: 'ЛЯ', about: 'акварель' },
  petr: { name: 'Пётр Ильин', first: 'Пётр', initial: 'ПИ', about: 'линер · рисовали двор в июле' },
  marina: { name: 'Марина Ли', first: 'Марина', initial: 'МЛ', about: 'ведёт встречи' },
};

export const places = {
  panfilova: { name: 'Панфилова, 84', series: 'Один двор, четыре погоды', works: 9, last: 'сегодня' },
  bazar: { name: 'Зелёный базар', works: 14, last: 'вчера' },
  terrenkur: { name: 'Терренкур', works: 5, last: '2 сентября' },
};

export const pleinair = { title: 'Утро на Зелёном базаре', iso: '2026-09-19', day: dateLabel('2026-09-19'), date: dayLabel('2026-09-19'), start: '09:00', where: 'главный вход, у часов', people: 18, host: people.marina };
export const walk = { title: 'Линии старого города', iso: '2026-09-26', day: dateLabel('2026-09-26'), start: '16:30', where: 'сквер у театра', people: 24 };
export const exhibit = { title: 'Город в линиях', network: 'Lines-Guest', until: '30 сентября' };

/* Свой скетчбук Анны: только то, что она нарисовала и записала сама — неровные, живые состояния */
export const own = {
  today: { title: 'Липа на Панфилова', when: 'сегодня, 18:10', text: 'Поймала тень до того, как включили фонари. Ствол слишком тёмный — в следующий раз оставить бумагу', tools: ['Линер 0.3', 'Бумага 160 г', '20 минут'] },
  apples: { title: 'Прилавок с яблоками', when: 'вчера, 09:40', text: 'Пять минут, пока продавец не заметил', tools: ['Карандаш', '5 минут'] },
  voice: { title: 'Что слышно на базаре', when: 'вчера, 09:52', dur: '0:41' },
  series: { done: 3, of: 4, next: 'зима — ждёт снега' },
  stats: { sketches: 36, series: 7, meets: 12 },
};

export const entities = [
  { name: 'Знакомый', what: 'с кем рисуют вместе на встречах; фото нет — инициалы', states: ['знакомы', 'на встрече'], screens: ['profile', 'authors'] },
  { name: 'Зарисовка', what: 'своя зарисовка с местом, материалами и голосовой заметкой', states: ['черновик', 'в скетчбуке', 'в серии'], screens: ['home', 'post', 'compose', 'shoot', 'picker'] },
  { name: 'Место', what: 'своя точка города, где рисую не первый раз', states: ['новое', 'с серией'], screens: ['places', 'series'] },
  { name: 'Серия', what: 'свои зарисовки одного места в разную погоду', states: ['растёт', 'закрыта'], screens: ['series', 'home'] },
  { name: 'Встреча', what: 'встреча рисовать вместе: место, время, участники', states: ['запись открыта', 'завтра', 'идёт', 'прошёл'], screens: ['events', 'chat', 'call'] },
  { name: 'Выставка', what: 'свои работы на общем экране площадки выставки', states: ['не подключены', 'на выставке'], screens: ['exhibit', 'scan'] },
  { name: 'Диалог', what: 'чат встречи или личная переписка', states: ['есть непрочитанные', 'прочитан'], screens: ['chats', 'chat', 'direct', 'call'] },
];
