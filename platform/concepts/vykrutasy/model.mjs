/**
 * Модель «Выкрутасов»: компания друзей, вечера игры у телевизора, раунды и ответы.
 * «Сейчас» — суббота, 10 октября, вечер у Саши только создан. Вчера играли у Лены,
 * в следующую пятницу Лена зовёт снова.
 */
import { moment, dayLabel, dateLabel, addDays, distance } from '../../kernel/world.mjs';

export const now = moment('2026-10-10', '19:40');

/* Фото нет: игроки — инициалы */
export const people = {
  me: { name: 'Саша Котова', short: 'Саша', initial: 'СК', about: 'это вы' },
  lena: { name: 'Лена Орлова', short: 'Лена', initial: 'ЛО' },
  dima: { name: 'Дима Чернов', short: 'Дима', initial: 'ДЧ' },
  olya: { name: 'Оля Миронова', short: 'Оля', initial: 'ОМ' },
  gosha: { name: 'Гоша Ким', short: 'Гоша', initial: 'ГК' },
  nastya: { name: 'Настя Белова', short: 'Настя', initial: 'НБ' },
  ilya: { name: 'Илья Ветров', short: 'Илья', initial: 'ИВ' },
};

/* Задания: небольшой набор игры и свои, придуманные ведущим */
export const tasks = {
  desk: 'Изобрази соседа по парте за 10 секунд',
  prom: 'Покажи, как ты танцевал на выпускном',
  monday: 'Утро понедельника без слов',
  cat: 'Изобрази кота, который увидел огурец',
  call: 'Позвони маме, когда разбил её вазу',
  queue: 'Покажи очередь в поликлинику одним лицом',
  fishing: 'Изобрази Гошу на рыбалке',
  lift: 'Как Дима ждёт лифт на девятом этаже',
};
export const gameSet = ['desk', 'prom', 'monday', 'cat', 'call', 'queue'];
export const ownSet = ['fishing', 'lift'];

/* Сегодняшний вечер: ведущий — вы, комната — гостиная */
export const tonight = {
  title: 'Вечер у Саши',
  day: dayLabel(now.iso),
  time: '20:00',
  tv: 'Гостиная',
  tvModel: 'Samsung · 55 дюймов',
  players: [people.me, people.olya, people.gosha, people.nastya, people.ilya],
  rounds: ['desk', 'prom', 'call', 'fishing', 'queue'],
};
export const roomLine = `${tonight.tv} · ${tonight.players.length} игроков в комнате`;

/* Ответ, который снимают в первом раунде */
export const myAnswer = { dur: '0:09', meta: 'Саша · раунд 1 · 0:09 · только что' };
export const roundAnswers = [
  { who: people.olya, dur: '0:08', sub: 'Оля · раунд 1 · 0:08 · 2 мин назад' },
  { who: people.gosha, dur: '0:10', sub: 'Гоша · раунд 1 · 0:10 · минуту назад' },
  { who: people.nastya, dur: '0:07', sub: 'Настя · раунд 1 · 0:07 · только что' },
];
export const galleryAnswer = { title: 'Выпускной 2014', dur: '0:18', sub: 'Из «Фото» · снято 21 июня 2014' };

/* Вчерашний вечер у Лены: 6 игроков, 14 ответов, 4 хайлайта на 1:24 */
export const lenaEvening = {
  title: 'Вечер у Лены',
  iso: addDays(now.iso, -1),
  players: 6,
  answers: 14,
  rounds: [
    { n: 1, task: 'monday', answers: 5 },
    { n: 2, task: 'prom', answers: 4 },
    { n: 3, task: 'cat', answers: 5 },
  ],
};
lenaEvening.day = dayLabel(lenaEvening.iso);
lenaEvening.meta = `${lenaEvening.players} игроков · ${lenaEvening.answers} ответов`;

export const highlights = {
  cat: { id: 'watch', who: people.lena, title: 'Кот увидел огурец', round: 3, dur: '0:12', votes: 5 },
  prom: { id: 'watchdance', who: people.dima, title: 'Выпускной 2009: танец со шваброй', round: 2, dur: '0:42', votes: 4 },
  monday: { id: 'clips', who: people.olya, title: 'Утро понедельника без слов', round: 1, dur: '0:09', votes: 3 },
  mine: { id: 'watchmine', who: people.me, title: 'Утро понедельника: будильник', round: 1, dur: '0:21', votes: 3 },
};
export const hlMeta = (h, when = 'вчера') => `${h.who.short} · раунд ${h.round} · ${h.dur} · ${when}`;
export const highlightsTotal = '1:24';

/* Вечер у Димы — давний, без хайлайтов на телефоне */
export const dimaEvening = { title: 'Вечер у Димы', day: dateLabel('2026-09-19'), meta: '4 игрока · 11 ответов' };

/* Приглашение: Лена зовёт в следующую пятницу */
export const invite = {
  title: 'Игра у Лены',
  iso: addDays(now.iso, 6),
  time: '20:00',
  address: 'Тихая улица, 8, кв. 14',
  walk: `12 мин пешком · ${distance(950)}`,
  going: ['ЛО', 'ДЧ', 'ОМ'],
};
invite.day = dayLabel(invite.iso);
invite.when = `${invite.day}, ${invite.time}`;

export const stats = { evenings: 3, answers: 9, inHighlights: 1 };
