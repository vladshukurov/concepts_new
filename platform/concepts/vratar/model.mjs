/**
 * Модель «Вратаря»: любительская команда «ФК Пятница», воскресные матчи и моменты,
 * снятые игроками со скамейки. «Сейчас» — воскресенье, 11 октября, 11:41: идёт матч
 * с «Северным». Прошлое воскресенье — победа над «Лесным» 4:3, следующий матч — 18 октября.
 */
import { moment, dayLabel, dateLabel, addDays, distance } from '../../kernel/world.mjs';

export const now = moment('2026-10-11', '11:41');
export const team = { name: 'ФК Пятница', initial: 'ФП', season: 'Сезон осень 2026' };

/* Фото людей нет: игроки — инициалы. Кадры моментов — классы f1…f6 (кадрирование в styles.css) */
export const people = {
  me: { name: 'Миша Котов', short: 'Миша', initial: 'МК', role: 'полузащитник' },
  gosha: { name: 'Гоша Пак', short: 'Гоша', initial: 'ГП', role: 'вратарь' },
  dima: { name: 'Дима Ершов', short: 'Дима', initial: 'ДЕ', role: 'нападающий' },
  ilya: { name: 'Илья Санин', short: 'Илья', initial: 'ИС', role: 'нападающий' },
  seva: { name: 'Сева Орлов', short: 'Сева', initial: 'СО', role: 'защитник' },
  kostya: { name: 'Костя Белов', short: 'Костя', initial: 'КБ', role: 'защитник' },
  timur: { name: 'Тимур Ахметов', short: 'Тимур', initial: 'ТА', role: 'полузащитник' },
  artem: { name: 'Артём Лаптев', short: 'Артём', initial: 'АЛ', role: 'защитник' },
};

/* Прошлое воскресенье: «ФК Пятница» 4:3 «Лесной», 9 моментов на 2:47 */
export const lastMatch = {
  rival: 'Лесной',
  score: '4:3',
  iso: addDays(now.iso, -7),
  field: 'Поле у школы № 57',
  moments: 9,
  total: '2:47',
  art: 'f1',
};
lastMatch.day = dateLabel(lastMatch.iso);
lastMatch.title = `${team.name} · ${lastMatch.score}`;
lastMatch.line = `${team.name} · ${lastMatch.score} · ${lastMatch.moments} моментов`;
lastMatch.meta = `${lastMatch.rival} · ${lastMatch.moments} моментов · ${lastMatch.day}`;

/* Моменты прошлого матча, у каждого — свой плеер */
export const moments = {
  save: { id: 'watch', kind: 'save', who: people.gosha, by: people.seva, title: 'Сейв Гоши в падении на 87-й', art: 'f3', min: 87, dur: '0:14', votes: 6 },
  free: { id: 'watchgoal', kind: 'goal', who: people.dima, by: people.me, title: 'Гол Димы со штрафного в девятку', art: 'f2', min: 12, dur: '0:21', votes: 4 },
  mine: { id: 'watchmine', kind: 'goal', who: people.me, by: people.artem, title: 'Гол пяткой после углового', art: 'f6', min: 34, dur: '0:11', votes: 2 },
  win: { id: 'watchwin', kind: 'goal', who: people.ilya, by: people.me, title: 'Победный гол Ильи на 81-й', art: 'f4', min: 81, dur: '0:18', votes: 3 },
};
export const mMeta = (m, when = lastMatch.day) => `${m.who.short} · ${m.min}' · ${m.dur} · ${when}`;
export const best = moments.save;

/* Ролик товарища из «Фото»: Сева снял второй гол на свой телефон */
export const friendClip = { art: 'f5', title: 'Гол Кости головой', dur: '0:12', sub: 'Из «Фото» · снял Сева · 4 октября' };

/* Сегодня: матч с «Северным» идёт, 41-я минута */
export const liveMatch = {
  rival: 'Северный',
  rivalWith: 'Северным',
  score: '2:1',
  minute: 41,
  kickoff: '11:00',
  field: lastMatch.field,
  art: 'f2',
  filming: ['СО', 'ТА'],
};
liveMatch.title = `${team.name} — ${liveMatch.rival}`;
liveMatch.line = `${liveMatch.score} · идёт ${liveMatch.minute}-я минута`;
export const liveMoments = [
  { who: people.dima, title: 'Гол Димы с передачи Ильи', art: 'f4', dur: '0:16', min: 8, by: 'Сева' },
  { who: people.gosha, title: 'Сейв Гоши один на один', art: 'f3', dur: '0:10', min: 23, by: 'Тимур' },
  { who: null, title: 'Пропустили после углового', art: 'f5', dur: '0:12', min: 30, by: 'Сева' },
  { who: people.ilya, title: 'Гол Ильи в дальний угол', art: 'f1', dur: '0:15', min: 37, by: 'Тимур' },
];
/* Момент, который снимают сейчас */
export const myMoment = { art: 'f6', dur: '0:12', title: 'Удар Тимура в перекладину', meta: `Снял Миша · ${liveMatch.minute}' · 0:12 · только что` };

/* Следующий матч: воскресенье, 18 октября, 11:00, поле во дворе */
export const nextMatch = {
  rival: 'Динамо Двор',
  iso: addDays(now.iso, 7),
  time: '11:00',
  field: 'Поле во дворе на Озёрной, 12',
  walk: `18 мин пешком · ${distance(1400)}`,
  going: ['ГП', 'ДЕ', 'ИС'],
  art: 'f5',
};
nextMatch.day = dayLabel(nextMatch.iso);
nextMatch.when = `${nextMatch.day}, ${nextMatch.time}`;
nextMatch.title = `${team.name} — ${nextMatch.rival}`;

/* Давний матч без моментов на телефоне */
export const oldMatch = { title: `${team.name} · 1:2`, meta: `Спутник · 6 моментов · ${dateLabel(addDays(now.iso, -14))}` };

/* Сезон: лучшее одним роликом */
export const season = { matches: 6, moments: 41, best: 12, total: '3:58', goals: 2, filmed: 7 };
