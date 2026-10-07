/**
 * Модель «Вызова»: видеоквесты по городу с друзьями.
 * «Сейчас» — среда, 7 октября, 16:40. Квест Лены «Старый город» идёт:
 * ваша команда «Сова» на точке 4 из 9. В субботу стартует ваш квест «Набережная».
 * В прошлую субботу прошли ваши «Сокольники» — итог, счёт и фильм квеста.
 */
import { moment, dayLabel, dateLabel, addDays, distance } from '../../kernel/world.mjs';

export const now = moment('2026-10-07', '16:40');

/* Фото нет: игроки — инициалы */
export const people = {
  me: { name: 'Саша Котова', short: 'Саша', initial: 'СК' },
  lena: { name: 'Лена Орлова', short: 'Лена', initial: 'ЛО' },
  dima: { name: 'Дима Чернов', short: 'Дима', initial: 'ДЧ' },
  olya: { name: 'Оля Миронова', short: 'Оля', initial: 'ОМ' },
  gosha: { name: 'Гоша Ким', short: 'Гоша', initial: 'ГК' },
  nastya: { name: 'Настя Белова', short: 'Настя', initial: 'НБ' },
  ilya: { name: 'Илья Ветров', short: 'Илья', initial: 'ИВ' },
};

export const teams = {
  owl: { name: 'Сова', initial: 'С', members: 'Саша, Дима, Оля' },
  hedgehog: { name: 'Ёж', initial: 'Ё', members: 'Гоша, Настя, Илья' },
};

/* «Старый город» — идёт сейчас, организатор Лена */
export const oldTown = {
  title: 'Старый город',
  quote: '«Старый город»',
  by: people.lena,
  teamsCount: 2,
  pointsCount: 9,
  start: '14:00',
  finale: 'сегодня в 20:00 у Лены',
  points: [
    { n: 1, task: 'Пройдите по Покровке 20 шагов задом наперёд', place: 'Покровка, 1', done: true },
    { n: 2, task: 'Повторите позу памятника', place: 'Чистые пруды', done: true },
    { n: 3, task: 'Спойте припев у фонтана', place: 'Хохловская площадь', done: true },
    { n: 4, task: 'Найдите дверь с номером 1907 и снимите стук', place: 'Хохловский переулок, 7', now: true },
    { n: 5, task: 'Изобразите трамвай, который опаздывает', place: 'Чистопрудный бульвар, 12' },
  ],
  hiddenLeft: 4,
  score: { owl: 3, hedgehog: 4 },
  clips: 7,
};
oldTown.meta = `${oldTown.teamsCount} команды · ${oldTown.pointsCount} точек`;
export const current = oldTown.points[3];
export const next = oldTown.points[4];
export const toNext = { dist: distance(350), walk: '5 мин пешком' };
export const hereLine = `Вы на точке ${current.n}`;

/* Ролики квестов: мета под кадром — «команда/игрок · квест · точка · длительность · когда» */
export const videos = {
  fountain: { id: 'watch', who: people.dima, team: teams.owl, title: 'Спели припев у фонтана', quest: oldTown.title, point: 3, dur: '0:21', when: 'сегодня' },
  door: { id: 'watchdoor', who: people.gosha, team: teams.hedgehog, title: 'Стук в дверь 1907', quest: oldTown.title, point: 4, dur: '0:14', when: 'сегодня' },
  boat: { id: 'watchboat', who: people.nastya, team: teams.hedgehog, title: 'Лодка без вёсел', quest: 'Сокольники', point: 6, dur: '0:33', when: dateLabel('2026-10-03') },
  statue: { id: 'clips', who: people.olya, team: teams.owl, title: 'Поза памятника', quest: oldTown.title, point: 2, dur: '0:09', when: 'сегодня' },
};
export const vMeta = (v) => `${v.who.short} · ${v.team.name} · точка ${v.point} · ${v.dur} · ${v.when}`;
export const vQuest = (v) => `Квест «${v.quest}» · точка ${v.point} · ${v.dur} · ${v.when}`;

/* Свой ролик, снятый на точке 4, и ролик из «Фото» */
export const myShot = { dur: '0:12', sub: `Саша · Сова · точка 4 · 0:12 · только что` };
export const fromPhotos = { dur: '0:18', sub: 'Из «Фото» · снято сегодня в 16:31' };

/* «Сокольники» — прошли в прошлую субботу, организатор — вы */
export const sokolniki = {
  title: 'Сокольники',
  iso: '2026-10-03',
  points: 8,
  score: { owl: 34, hedgehog: 29 },
  film: '3:48',
  clips: 16,
  tv: 'Гостиная',
};
sokolniki.day = dateLabel(sokolniki.iso);
sokolniki.finalTitle = 'Итог «Сокольников»';
sokolniki.meta = `2 команды · ${sokolniki.points} точек · ${sokolniki.day}`;

/* «Набережная» — ваш квест, старт в субботу в 12:00 */
export const embankment = {
  title: 'Набережная',
  iso: addDays(now.iso, 3),
  time: '12:00',
  start: 'Крымская набережная, 10',
  points: [
    { n: 1, task: 'Пройдите по мосту в ногу всей командой', place: 'Крымский мост' },
    { n: 2, task: 'Снимите, как вы кормите голубей без хлеба', place: 'Музеон' },
    { n: 3, task: 'Станцуйте вальс у фонтанов', place: 'Парк Горького' },
  ],
  pointsCount: 7,
};
embankment.day = dayLabel(embankment.iso);
embankment.meta = `2 команды · ${embankment.pointsCount} точек`;
embankment.when = `суббота, ${embankment.time}`;

/* Новая точка, поставленная «здесь» */
export const newPoint = { place: 'Крымская набережная, 10', task: 'Повторите позу скульптуры у входа' };

export const stats = { quests: 3, clips: 11, best: 1 };
