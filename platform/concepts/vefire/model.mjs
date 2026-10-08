/**
 * Модель «В эфире»: домашнее шоу семьи Орловых. Соня (8) и Миша (11) снимают выпуски и рубрики,
 * семья смотрит и ставит реакции, а в пятницу в 19:00 выпуск недели идёт на телевизоре в гостиной.
 * «Сейчас» — четверг, 8 октября, 20:14: выпуск №14 собран, премьера завтра.
 */
import { moment, dayLabel, dateLabel, plural } from '../../kernel/world.mjs';

export const now = moment('2026-10-08', '20:14');
export const show = { name: 'В эфире', title: 'Вечерние новости Орловых', family: 'Семья Орловых' };

/* Люди — инициалы. Кадры — классы f-* (кадрирование в styles.css) */
export const people = {
  me: { name: 'Аня Орлова', short: 'мама', initial: 'АО', role: 'продюсер выпусков', f: true },
  papa: { name: 'Дима Орлов', short: 'папа', initial: 'ДО', role: 'папа, оператор по выходным' },
  sonya: { name: 'Соня Орлова', short: 'Соня', initial: 'СО', role: 'ведущая, 8 лет', f: true },
  misha: { name: 'Миша Орлов', short: 'Миша', initial: 'МО', role: 'корреспондент, 11 лет' },
  nina: { name: 'Нина Васильевна', short: 'бабушка', initial: 'НВ', role: 'бабушка, смотрит из Твери', f: true },
};
export const nIssues = (n) => plural(n, 'выпуск', 'выпуска', 'выпусков');

/* Рубрики — у каждой свой ведущий */
export const rubrics = {
  weather: { id: 'weather', title: 'Погода от Сони', host: people.sonya, issues: 23, art: 'f-eve', tag: 'weather', since: 'с марта' },
  yard: { id: 'yard', title: 'Новости двора', host: people.misha, issues: 17, art: 'f-yard', tag: 'yard', since: 'с апреля' },
  cat: { id: 'cat', title: 'Мусины новости', host: people.sonya, issues: 11, art: 'f-cat', tag: 'cat', since: 'с мая' },
};
export const rMeta = (r) => `ведёт ${r.host.short} · ${nIssues(r.issues)} ${r.since}`;

const R = (laugh, heart, clap, who) => ({ laugh, heart, clap, who });

/* Выпуски рубрик: у каждого свой плеер, главы — части выпуска */
export const issues = {
  weather: {
    id: 'watchweather', rubric: rubrics.weather, title: 'Погода на пятницу: берите зонт', art: 'f-rain', dur: '1:10',
    by: people.sonya, iso: '2026-10-07', place: 'Дома, у окна на кухне',
    chapters: [['Сегодня', 3], ['Завтра', 3], ['Пятница', 4]], now: 1,
    react: R(6, 9, 4, 'Бабушка ❤️×4 · папа 👏×2 · Миша 😂×3'),
  },
  yard: {
    id: 'watchyard', rubric: rubrics.yard, title: 'В третьем подъезде новый пёс', art: 'f-dogs', dur: '1:30',
    by: people.misha, iso: '2026-10-06', place: 'Двор на Садовой, 12',
    chapters: [['Кто переехал', 3], ['Интервью с хозяйкой', 4], ['Как зовут пса', 2]], now: 1,
    react: R(5, 7, 6, 'Мама 👏×3 · бабушка ❤️×3 · Соня 😂×2'),
  },
  cat: {
    id: 'watchcat', rubric: rubrics.cat, title: 'Муся заняла новый подоконник', art: 'f-cat', dur: '0:50',
    by: people.sonya, iso: '2026-10-05', place: 'Дома, детская',
    chapters: [['Где спала раньше', 3], ['Новое место', 4], ['Мнение Миши', 2]], now: 2,
    react: R(9, 5, 1, 'Папа 😂×4 · мама 😂×3 · бабушка ❤️×2'),
  },
  fog: {
    id: 'watchfog', rubric: rubrics.weather, title: 'Утром туман: в школу с фонариком', art: 'f-fog', dur: '0:58',
    by: people.sonya, iso: '2026-09-30', place: 'Балкон, восьмой этаж',
    chapters: [['Туман', 4], ['Сколько видно', 3], ['Совет дня', 2]], now: 0,
    react: R(3, 6, 2, 'Бабушка ❤️×3 · мама 👏×2'),
  },
};
for (const i of Object.values(issues)) i.day = dateLabel(i.iso);
export const iMeta = (i) => `${i.rubric.title} · ${i.by.short} · ${i.day}`;
export const reactLine = (i) => `😂 ${i.react.laugh} · ❤️ ${i.react.heart} · 👏 ${i.react.clap}`;

/* Выпуск недели — рубрики как главы, премьера в пятницу на ТВ */
export const fri = { iso: '2026-10-09', time: '19:00' };
fri.day = dayLabel(fri.iso);
fri.short = dateLabel(fri.iso);
export const weekly = {
  id: 'watch', n: 14, title: 'Выпуск №14: бабушке 70!', art: 'f-cake', dur: '4:50',
  hosts: 'Соня и Миша', lead: 'Главная новость: бабушке 70',
  chapters: [
    { title: 'Главная новость: бабушке 70', at: '0:00', dur: '1:20', w: 3, art: 'f-cake', go: 'watch' },
    { title: issues.weather.title, at: '1:20', dur: issues.weather.dur, w: 2, art: issues.weather.art, go: issues.weather.id, rubric: rubrics.weather },
    { title: issues.yard.title, at: '2:30', dur: issues.yard.dur, w: 3, art: issues.yard.art, go: issues.yard.id, rubric: rubrics.yard },
    { title: issues.cat.title, at: '4:00', dur: issues.cat.dur, w: 2, art: issues.cat.art, go: issues.cat.id, rubric: rubrics.cat },
  ],
};

/* Клипы — неудачные дубли */
export const clip = { art: 'f-pizza', title: 'Папа съел пиццу прямо в эфире', dur: '0:14', by: people.papa, n: 3, of: 9 };

/* Новый выпуск: форма и только что снятый репортаж */
export const draft = { title: 'Во дворе поставили новую горку', rubric: rubrics.yard, host: people.misha };
export const shot = {
  art: 'f-yard', dur: '0:42', title: draft.title, meta: 'Новости двора · Миша · только что',
  place: 'Двор на Садовой, 12', placeSub: 'у детской площадки · 40 м от подъезда',
};

/* Старое видео Муси из «Фото» */
export const oldCat = { art: 'f-cat2', title: 'Муся-котёнок охотится на штору', dur: '0:23', sub: 'Из «Фото» · снимала мама · март 2024' };

/* Телевизор в гостиной */
export const tv = { name: 'Телевизор в зале', model: 'Samsung · 55 дюймов' };
