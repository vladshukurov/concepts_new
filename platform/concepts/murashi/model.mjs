/**
 * Модель «Мурашей»: свой звуковой дневник мест. «Сейчас» — четверг, 8 октября, 23:40.
 * Аня записывает «Диктофоном» живые звуки — дождь на даче, прибой, метро, саксофон
 * на Арбате — и слушает их как музыку; перед сном включает свой дождь с таймером.
 * Фото мест — кадры assets/media (атлас 3×2 и три снимка); без фото — значок.
 */
import { moment, plural } from '../../kernel/world.mjs';

export const now = moment('2026-10-08', '23:40');
export const me = { name: 'Аня Соколова', short: 'Аня', initial: 'А' };

/* Места, где записаны звуки. Дача — единственное место с несколькими записями */
export const places = {
  dacha: { id: 'dacha', title: 'Дача в Малаховке', where: 'СНТ «Берёзка», Раменский район', short: 'Малаховка', art: 'ms-art ms-c2' },
};

/* Звуки: место, когда, длина, фото места (art) или значок, откуда файл, коллекции */
export const sounds = {
  dozhd: { id: 'dozhd', title: 'Дождь на даче', place: places.dacha, where: 'Малаховка, веранда', date: '14 июля', time: '23:10', dur: '24:12', sec: 1452, art: 'ms-art ms-c2', file: 'Новая запись 38', source: 'Диктофон', icon: 'cloud-rain', liked: true },
  veter: { id: 'veter', title: 'Ветер в шторах', place: places.dacha, where: 'Малаховка, мансарда', date: '15 июля', time: '06:40', dur: '5:02', sec: 302, art: 'ms-art ms-c4', file: 'Новая запись 39', source: 'Диктофон', icon: 'cloud-sun' },
  les: { id: 'les', title: 'Лес под Звенигородом', where: 'Звенигород, Сторожевская тропа', date: '21 июня', time: '15:20', dur: '11:37', sec: 697, art: 'ms-art ms-c5', file: 'Новая запись 31', source: 'Диктофон', icon: 'trees' },
  priboy: { id: 'priboy', title: 'Прибой на молу', where: 'Кронштадт, северный мол', date: '3 августа', time: '11:46', dur: '7:54', sec: 474, art: 'ms-sea', file: 'Мол_Кронштадт.m4a', source: 'Файлы', icon: 'droplets', liked: true },
  groza: { id: 'groza', title: 'Гроза над заливом', where: 'Зеленогорск, пляж у пансионата', date: '9 августа', time: '02:14', dur: '8:05', sec: 485, art: 'ms-art ms-c1', file: 'Новая запись 47', source: 'Диктофон', icon: 'zap' },
  okno: { id: 'okno', title: 'Дождь в окно', where: 'Москва, Сокол, 9 этаж', date: '2 октября', time: '19:30', dur: '12:48', sec: 768, art: 'ms-art ms-c3', file: 'Новая запись 58', source: 'Диктофон', icon: 'cloud-rain' },
  arbat: { id: 'arbat', title: 'Саксофон на Арбате', where: 'Москва, Старый Арбат, у театра', date: '6 сентября', time: '18:20', dur: '6:18', sec: 378, art: '', file: 'Новая запись 52', source: 'Диктофон', icon: 'music' },
  metro: { id: 'metro', title: 'Метро в час пик', where: '«Курская», кольцевая', date: '17 сентября', time: '08:52', dur: '3:41', sec: 221, art: '', file: 'Новая запись 55', source: 'Диктофон', icon: 'route' },
  pekarnya: { id: 'pekarnya', title: 'Утро в пекарне', where: 'Москва, Покровка, 17', date: 'сегодня', time: '07:52', dur: '4:26', sec: 266, art: '', shot: 'ms-bakery', file: 'Новая запись 61', source: 'Диктофон', icon: 'coffee' },
};
/* Звук, который добавляют формой «Новый звук»: запись из «Диктофона», фото того же дня из «Фото» */
export const kino = { id: 'kino', title: 'Кино во дворе', where: 'Петербург, двор на Литейном', date: '22 августа', time: '21:15', dur: '9:27', sec: 567, art: '', picked: 'ms-cinema', file: 'Новая запись 49', source: 'Диктофон', icon: 'film' };

const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
export const mins = (list) => Math.round(list.reduce((n, x) => n + x.sec, 0) / 60);
export const soundsN = (n) => plural(n, 'звук', 'звука', 'звуков');
export const when = (x) => `${x.date}, ${x.time}`;
export const soundSub = (x) => `${x.where.split(',')[0]} · ${x.date}`;
export const fromPlace = (p) => Object.values(sounds).filter((x) => x.place === p);

/* Коллекции: свои подборки. «Зима 2026» — список того, что хочется записать */
export const collections = {
  leto: { id: 'leto', title: 'Лето 2026', list: [sounds.dozhd, sounds.veter, sounds.les, sounds.priboy, sounds.groza] },
  goroda: { id: 'goroda', title: 'Города', list: [sounds.pekarnya, sounds.okno, sounds.metro, sounds.arbat] },
  son: { id: 'son', title: 'Засыпать', list: [sounds.dozhd, sounds.okno, sounds.groza] },
};
Object.values(collections).forEach((c) => { c.sub = `${soundsN(c.list.length)} · ${mins(c.list)} мин`; c.art = c.list.find((x) => x.art).art; });
collections.son.art = sounds.groza.art;
export const zima = {
  id: 'zima', title: 'Зима 2026',
  todo: [
    { title: 'Первый снег во дворе', sub: 'ночью, пока никто не прошёл' },
    { title: 'Скрип снега под ногами', sub: 'Сокол, парк у Песчаных' },
    { title: 'Каток на Патриарших', sub: 'музыка и лёд' },
    { title: 'Печка на даче', sub: 'Малаховка, на Новый год' },
  ],
  remind: { date: '1 ноября', time: '09:00' },
};
export const inColls = (x) => Object.values(collections).filter((c) => c.list.includes(x)).map((c) => `«${c.title}»`).join(', ');

/* Сейчас играет: свой дождь, таймер сна 30 минут нажали в 23:40 */
export const timer = { min: 30, until: '00:10', options: ['15 мин', '30 мин', '45 мин', 'До конца записи'] };
export const playing = { sound: sounds.dozhd, at: '6:06', left: `−${mmss(1452 - 366)}`, pct: 25 };
/* Экран погас в 23:52: дождь играет дальше, до тишины 18 минут */
export const lock = { sound: sounds.dozhd, time: '23:52', at: '18:06', left: `−${mmss(1452 - 1086)}`, status: 'Дождь на даче · ещё 18 мин' };

const all = mins(Object.values(sounds));
export const totals = { sounds: Object.keys(sounds).length, places: 8, hours: `${all} мин` };
export const storage = { recorder: 8, files: 1, size: '486 МБ' };
/* Сколько минут слушала перед сном за неделю 5–11 октября */
export const week = [['пн', 30], ['вт', 45], ['ср', 15], ['чт', 30], ['пт', null], ['сб', null], ['вс', null]];
