/**
 * Модель «Виляй»: семейный канал пса Рыжика. Снимают Катя и вся семья, смотрят вечером на ТВ.
 * «Сейчас» — четверг, 8 октября, 20:14: семья собирается у телевизора.
 * Сезоны Рыжика — щенок, первый год, сейчас; серии вроде «Рыжик против пылесоса» идут через сезоны.
 */
import { moment, dayLabel, dateLabel, addDays, plural } from '../../kernel/world.mjs';

export const now = moment('2026-10-08', '20:14');
export const dog = { name: 'Рыжик', initial: 'Р', age: '1 год и 7 месяцев', breed: 'ретривер' };
export const channel = { name: 'Рыжик', title: 'Канал Рыжика', family: 'Семья Соколовых' };

/* Люди — инициалы. Кадры — классы d1…d7 (кадрирование в styles.css) */
export const people = {
  me: { name: 'Катя Соколова', short: 'Катя', initial: 'КС', role: 'снимает чаще всех', f: true },
  mama: { name: 'Ольга Соколова', short: 'мама', initial: 'ОС', role: 'мама', f: true },
  papa: { name: 'Сергей Соколов', short: 'папа', initial: 'СС', role: 'папа' },
  tema: { name: 'Тёма Соколов', short: 'Тёма', initial: 'ТС', role: 'брат' },
  galya: { name: 'Галина Петровна', short: 'бабушка', initial: 'ГП', role: 'бабушка, смотрит с дачи', f: true },
};

/* Сезоны — плейлисты-сериалы по возрасту Рыжика */
export const seasons = {
  puppy: { id: 'puppy', title: 'Щенок', range: 'март — май 2025', clips: 34, total: '41:20', art: 'd3', tag: 'puppy' },
  first: { id: 'firstyear', title: 'Первый год', range: 'июнь 2025 — май 2026', clips: 58, total: '1:12:05', art: 'd6', tag: 'first' },
  now: { id: 'now', title: 'Сейчас', range: 'с июня 2026', clips: 21, total: '24:40', art: 'd1', tag: 'now' },
};
export const nClips = (n) => plural(n, 'ролик', 'ролика', 'роликов');
export const sMeta = (s) => `${nClips(s.clips)} · ${s.range}`;

/* Реакции семьи: кто и сколько раз смеялся */
const R = (laugh, heart, paw, who) => ({ laugh, heart, paw, who });

/* Ролики, у каждого — свой плеер */
export const clips = {
  robot: {
    id: 'watch', season: seasons.now, series: 'Рыжик против пылесоса · серия 4', title: 'Рыжик против робота-пылесоса',
    art: 'd2', dur: '1:12', by: people.me, iso: '2026-09-27', place: 'Дома, гостиная',
    react: R(8, 3, 2, 'Мама 😂×5 · папа ❤️ · Тёма 😂×2'),
  },
  snow: {
    id: 'watchsnow', season: seasons.first, first: true, title: 'Рыжик впервые видит снег',
    art: 'd7', dur: '0:48', by: people.papa, iso: '2025-11-14', place: 'Двор у дома',
    react: R(11, 6, 1, 'Бабушка ❤️×3 · мама 😂×4 · Тёма 😂×3'),
  },
  puddle: {
    id: 'watchpuddle', season: seasons.puppy, first: true, title: 'Первая лужа: Рыжик пробует лапой',
    art: 'd5', dur: '0:31', by: people.mama, iso: '2025-04-19', place: 'Парк Дружбы',
    react: R(6, 4, 0, 'Папа 😂×3 · бабушка ❤️×2'),
  },
  dacha: {
    id: 'watchdacha', season: seasons.now, title: 'Рыжик и Уголёк делят палку на даче',
    art: 'd4', dur: '2:05', by: people.tema, iso: '2026-08-16', place: 'Дача в Озерках',
    react: R(5, 2, 3, 'Тёма 😂×2 · папа 😂×2 · бабушка ❤️'),
  },
};
for (const c of Object.values(clips)) c.day = dateLabel(c.iso);
export const cMeta = (c) => `снял${c.by.f ? 'а' : ''} ${c.by.short} · ${c.dur} · ${c.day}`;
export const reactLine = (c) => `😂 ${c.react.laugh} · ❤️ ${c.react.heart}${c.react.paw ? ` · 🥰 ${c.react.paw}` : ''}`;
export const best = clips.robot;

/* Сериал через сезоны: «Рыжик против пылесоса», 4 серии */
export const series = {
  title: 'Рыжик против пылесоса',
  count: 4,
  total: '4:36',
  art: 'd2',
  eps: [
    { n: 1, title: 'Первая встреча', season: seasons.puppy, dur: '0:52', art: 'd5' },
    { n: 2, title: 'Засада под диваном', season: seasons.first, dur: '1:20', art: 'd6' },
    { n: 3, title: 'Пылесос заперт в шкафу', season: seasons.first, dur: '1:12', art: 'd1' },
    { n: 4, title: 'Робот-пылесос', season: seasons.now, dur: clips.robot.dur, art: clips.robot.art, go: clips.robot.id },
  ],
};
/* Новая серия, которую заводят формой */
export const newSeries = { title: 'Рыжик против пакета', season: seasons.now };

/* Клипы: вертикальные короткие ролики */
export const clip = { art: 'd1', title: 'Рыжик несёт палку через весь парк', dur: '0:19', by: people.papa, n: 3, of: 12 };

/* Ролик, который сейчас снимет Катя */
export const shot = { art: 'd6', dur: '0:24', title: 'Рыжик и пакет из магазина', meta: 'Сняла Катя · 0:24 · только что', place: 'Парк Дружбы, у пруда', placeSub: '300 м от дома · место вечерней прогулки' };

/* Старые видео щенка из «Фото» */
export const oldPuppy = { art: 'd3', title: 'Рыжик-щенок знакомится с Бусей', dur: '0:27', sub: 'Из «Фото» · снимал папа · 2 апреля 2025' };

/* «Год назад сегодня» и следующее воспоминание */
export const yearAgo = { iso: addDays(now.iso, -365), art: 'd8', title: 'Рыжик впервые прыгает в листья', dur: '0:36', by: people.mama };
yearAgo.day = dateLabel(yearAgo.iso);
export const snowDay = { iso: '2026-11-14', time: '19:00' };
snowDay.day = dayLabel(snowDay.iso);
snowDay.short = dateLabel(snowDay.iso);

/* Телевизор в гостиной */
export const tv = { name: 'Телевизор в гостиной', model: 'Samsung · 55 дюймов' };
