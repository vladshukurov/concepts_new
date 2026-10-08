/**
 * Модель «Вылазки»: свои влоги походов выходного дня. Каждый маршрут — серия,
 * каждая вылазка по нему — фильм с главами по точкам маршрута. «Сейчас» — суббота,
 * 10 октября, 12:40: компания идёт «Озеро и мостки», прошлой субботой прошли
 * «Карьер и сосны», следующая вылазка — 17 октября, выход в 8:00.
 */
import { moment, dayLabel, dateLabel, addDays, distance } from '../../kernel/world.mjs';

export const now = moment('2026-10-10', '12:40');
/* Погода на выходные — в шапке главной */
export const weather = { sat: 'Сб +12° · ясно', sun: 'Вс +9° · облачно' };

/* Фото людей нет: друзья — инициалы. Кадры — классы v1…v9 (кадрирование в styles.css) */
export const people = {
  me: { name: 'Дима Лосев', short: 'Дима', initial: 'ДЛ' },
  lena: { name: 'Лена Ветрова', short: 'Лена', initial: 'ЛВ' },
  kostya: { name: 'Костя Рябов', short: 'Костя', initial: 'КР' },
  sasha: { name: 'Саша Минина', short: 'Саша', initial: 'СМ' },
  artem: { name: 'Артём Ким', short: 'Артём', initial: 'АК' },
};

/**
 * Маршруты — серии. points — точки маршрута (км от старта), seg — доли отрезков
 * между точками для полоски под кадром (классы vy-g1…vy-g5).
 */
export const routes = {
  quarry: {
    id: 'route', title: 'Карьер и сосны', km: 14, art: 'v1', trips: 3, clips: 19,
    points: [['старт', 0, 'парковка у карьера'], ['родник', 4.8, 'в сосняке у тропы'], ['смотровая', 9.3, 'над карьером'], ['финиш', 14, 'станция Сосновка']],
    seg: [2, 3, 3],
  },
  lake: {
    id: 'hike', title: 'Озеро и мостки', km: 11, art: 'v8', trips: 2, clips: 9,
    points: [['старт', 0, 'станция Озерки'], ['мостки', 5.1, 'у лодочной'], ['мыс', 8.2, 'сосновый мыс'], ['финиш', 11, 'станция Озерки']],
    seg: [3, 2, 2],
  },
  pier: {
    id: 'pier', title: 'Северный мол', km: 8, art: 'v5', trips: 1, clips: 6,
    points: [['старт', 0, 'конечная автобуса'], ['маяк', 3.4, 'у волнореза'], ['мол', 5.6, 'конец мола'], ['финиш', 8, 'набережная']],
    seg: [3, 2, 2],
  },
  base: {
    id: 'nextwalk', title: 'Турбаза и бор', km: 12, art: 'v7', trips: 0, clips: 0,
    points: [['старт', 0, 'станция Бор'], ['турбаза', 4.2, 'чай на веранде'], ['бор', 8.5, 'сосновый бор'], ['финиш', 12, 'станция Бор']],
    seg: [2, 3, 2],
  },
};
for (const r of Object.values(routes)) {
  r.name = `${r.title} · ${distance(r.km * 1000)}`;
  r.labels = r.points.map(([p]) => p).join(' · ');
}

/* Прошлая суббота: «Карьер и сосны», 7 роликов склеены в фильм похода 12:40 */
export const lastTrip = { route: routes.quarry, iso: addDays(now.iso, -7), clips: 7, film: '12:40', with: ['ЛВ', 'КР', 'СМ'] };
lastTrip.day = dateLabel(lastTrip.iso);
lastTrip.title = `${routes.quarry.name} · ${lastTrip.day}`;
lastTrip.meta = `${lastTrip.clips} роликов · фильм ${lastTrip.film} · ${lastTrip.day}`;

/* Главы фильма — точки маршрута: [подпись, таймкод, доля шкалы] */
export const filmChapters = [['старт', '0:00', 2], ['родник', '2:50', 3], ['смотровая', '6:10', 3], ['финиш', '10:30', 2]];

/* Фильм похода и ролики с привалов прошлой субботы — у каждого свой плеер */
export const films = {
  film: { id: 'watch', title: 'Карьер и сосны · фильм похода', art: 'v1', dur: lastTrip.film, at: '3:24', point: 'родник', by: people.me, meta: `${lastTrip.clips} роликов · 4 автора · ${lastTrip.day}` },
  view: { id: 'watchview', title: 'Закат со смотровой над карьером', art: 'v4', dur: '1:12', at: '0:38', point: 'смотровая', by: people.lena, km: 9.3, meta: `смотровая · 9,3 км · ${lastTrip.day}` },
  spring: { id: 'watchspring', title: 'Родник во мху, вода ледяная', art: 'v2', dur: '0:48', at: '0:00', point: 'родник', by: people.kostya, km: 4.8, meta: `родник · 4,8 км · ${lastTrip.day}` },
  pines: { id: 'watchpines', title: 'Сосны над тропой, задрали головы', art: 'v3', dur: '0:35', at: '0:21', point: 'родник', by: people.sasha, km: 6.0, meta: `после родника · 6 км · ${lastTrip.day}` },
};
export const fMeta = (f) => `${f.by.short} · ${f.dur} · ${f.meta}`;

/* Ролик друга из «Фото»: Костя снимал своей камерой спуск к ручью */
export const friendClip = { art: 'v6', title: 'Ручей у спуска к карьеру', dur: '0:26', sub: `Из «Фото» · снял Костя · ${lastTrip.day}` };

/* Сегодня: «Озеро и мостки» идёт с 9:10, компания на мостках, 5,1 из 11 км */
export const hike = {
  route: routes.lake, start: '9:10', at: 'мостки', km: 5.1, next: 'мыс', toNext: distance(3100), with: ['ЛВ', 'АК', 'СМ'],
};
hike.line = `идём с ${hike.start} · ${distance(hike.km * 1000)} из ${distance(hike.route.km * 1000)}`;
hike.here = `Вы на мостках · ${distance(hike.km * 1000)} из ${distance(hike.route.km * 1000)}`;
export const hikeClips = [
  { title: 'Туман над озером на старте', art: 'v8', dur: '0:30', time: '9:20', point: 'старт', by: 'Артём' },
  { title: 'Ищем тропу в соснах у лодочной', art: 'v3', dur: '0:17', time: '11:05', point: 'по пути', by: 'Саша' },
];
/* Привал, снятый сейчас */
export const myHalt = { art: 'v9', dur: '0:14', title: 'Ветер на мостках, привал с чаем', time: now.time, point: 'мостки' };
myHalt.meta = `Снял Дима · мостки · 5,1 км · ${myHalt.dur} · только что`;

/* Следующая вылазка: суббота, 17 октября, выход в 8:00 */
export const nextWalk = {
  route: routes.base, iso: addDays(now.iso, 7), time: '8:00', meet: 'Станция Бор, первый вагон', going: ['ЛВ', 'КР', 'АК'], train: 'электричка 7:12 с Финляндского',
};
nextWalk.day = dayLabel(nextWalk.iso);
nextWalk.when = `${nextWalk.day}, выход ${nextWalk.time}`;

/* Давняя вылазка без фильма на телефоне */
export const oldTrip = { title: `${routes.pier.name} · ${dateLabel(addDays(now.iso, -20))}`, meta: '6 роликов · фильм 7:05 · у Артёма' };

/* Свой счёт за сезон */
export const season = { trips: 14, km: 163, clips: 52, routes: 4, filmed: 23 };
