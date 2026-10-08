/**
 * Модель «Метронома»: дневник занятий на своём инструменте.
 * «Сейчас» — четверг, 8 октября, вечер: Аня только что позанималась «Испанским романсом»
 * на 96 ударах (две недели назад было 72) и записала занятие на «Диктофон».
 * Обложки — фото из atlas (cover-1 клавиши, cover-4 гитара); без обложки — значок.
 */
import { moment, dayLabel, dateLabel, addDays, plural } from '../../kernel/world.mjs';

export const now = moment('2026-10-08', '19:40');
export const me = { name: 'Аня Лебедева', short: 'Аня', initial: 'А', phone: '+7 900 123-45-67' };

/* Пьесы, которые разучиваешь: темп «было → сейчас → цель», число занятий */
export const pieces = {
  romance: { id: 'piece', title: 'Испанский романс', inst: 'гитара', art: 'mt-art mt-c4', from: 72, bpm: 96, goal: 112, count: 9, since: addDays(now.iso, -14) },
  elise: { id: 'elise', title: 'К Элизе', inst: 'фортепиано', art: 'mt-art mt-c1', from: 60, bpm: 84, goal: 120, count: 6, since: addDays(now.iso, -20) },
  green: { id: 'green', title: 'Greensleeves', inst: 'гитара', art: '', from: 80, bpm: 88, goal: 100, count: 3, since: addDays(now.iso, -9) },
  etude: { id: 'etude', title: 'Этюд Каркасси № 7', inst: 'гитара', art: '', from: 76, bpm: 120, goal: 120, count: 14, since: '2026-08-17', learned: true },
};
/* Пьеса, которую добавляют формой «Новая пьеса» */
export const sonata = { id: 'sonata', title: 'Лунная соната, 1 часть', inst: 'фортепиано', art: '', from: 44, bpm: 44, goal: 56, count: 0 };

/** «96 ударов», «72 удара» — темп словами */
export const beats = (n) => plural(n, 'удар', 'удара', 'ударов');
export const tempo = (p) => (p.learned ? `выучено · ${beats(p.bpm)}` : `${p.from} → ${beats(p.bpm)}`);
export const lessons = (n) => plural(n, 'занятие', 'занятия', 'занятий');
export const pieceSub = (p) => `${p.inst} · ${tempo(p)} · ${lessons(p.count)}`;

/* Занятия: запись из «Диктофона» или «Файлов», темп, сколько играла, заметка себе */
const R = pieces.romance;
export const sessions = {
  today: { id: 'today', piece: R, iso: now.iso, time: '19:05', bpm: 96, rec: 'Новая запись 47', source: 'Диктофон', dur: '3:12', mins: 25, note: 'Вторая часть без остановок. В 12-м такте смазываю баррэ — завтра отдельно, медленно' },
  yesterday: { id: 'yesterday', piece: R, iso: addDays(now.iso, -1), time: '20:10', bpm: 88, rec: 'Новая запись 46', source: 'Диктофон', dur: '3:30', mins: 30, note: 'Вторая часть по тактам, на переходе к мажору остановилась два раза' },
  eliseday: { id: 'eliseday', piece: pieces.elise, iso: addDays(now.iso, -2), time: '18:40', bpm: 84, rec: 'Элиза 84.m4a', source: 'Файлы', dur: '2:58', mins: 20, note: 'Середина левой рукой ещё спотыкается, правая ровно' },
  first: { id: 'first', piece: R, iso: R.since, time: '21:00', bpm: 72, rec: 'Новая запись 31', source: 'Диктофон', dur: '4:05', mins: 20, note: 'Первая запись: только первая часть и очень медленно' },
};
for (const s of Object.values(sessions)) {
  s.day = s.iso === now.iso ? 'Сегодня' : s.iso === addDays(now.iso, -1) ? 'Вчера' : dayLabel(s.iso);
  s.short = s.iso === now.iso ? 'сегодня' : s.iso === addDays(now.iso, -1) ? 'вчера' : dateLabel(s.iso);
  s.title = s.piece.title;
  s.screen = `${s.piece.title} · ${s.short}`;
  s.sub = `${beats(s.bpm)} · ${s.short}, ${s.time}`;
}
export const olderCount = 28;
export const totals = { sessions: 32, hours: 14, pieces: 4 };

/* Сейчас играет: сегодняшняя запись, остановились на 0:41 */
export const playing = { at: '0:41', left: '−2:31', pct: 21 };
/* Метроном занятия, звучит с погашенным экраном */
/* Темп «Испанского романса» по неделям: лучший темп недели, последняя — текущая */
export const weeks = [72, 76, 80, 80, 84, 88, 96];
export const metro = { bpm: 96, beat: '4/4', elapsed: '12:40', left: '−12:20', lock: '19:18' };
export const reminder = { time: '19:00', when: 'завтра в 19:00' };

/* Ноты: снятая камерой страница и табы из «Фото» */
export const notes = { shot: 'mt-art mt-n1', shotTitle: 'Ноты · страница 2', tabs: ['mt-art mt-n2', 'mt-art mt-n3'] };
