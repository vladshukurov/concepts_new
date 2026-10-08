/**
 * Модель «Мурлыки»: колыбельные и сказки своим голосом для своего ребёнка.
 * «Сейчас» — четверг, 8 октября, вечер. Соне три года. Мама, папа и бабушка Нина
 * записывают колыбельные в «Диктофоне» и присылают файлы; на сегодня собран
 * «Вечер» из трёх колыбельных на 14 минут, таймер сна — 20 минут.
 * Обложки — кадры атласа assets/media/session-covers-atlas.png; без обложки — значок.
 */
import { moment, plural } from '../../kernel/world.mjs';

export const now = moment('2026-10-08', '20:45');
export const me = { name: 'Катя Морозова', short: 'Катя', initial: 'К', phone: '+7 900 123-45-67' };
export const child = 'Соня';

/* Голоса семьи: кто записывает. Без фото — инициалы */
export const voices = {
  mama: { id: 'mama', title: 'Мама', name: 'Катя', initial: 'К', who: 'мама', verb: 'записала' },
  papa: { id: 'papa', title: 'Папа', name: 'Илья', initial: 'И', who: 'папа', verb: 'записал' },
  nina: { id: 'nina', title: 'Бабушка Нина', name: 'Нина Петровна', initial: 'Н', who: 'бабушка Нина', verb: 'прислала' },
};

/* Записи: колыбельная или сказка, чей голос, длина, откуда файл, обложка */
export const recs = {
  spyat: { id: 'spyat', title: 'Спят усталые игрушки', kind: 'lullaby', voice: voices.nina, dur: '4:40', min: 4.67, art: 'mr-art mr-c2', file: 'Игрушки_Нина.m4a', source: 'Файлы', when: '2 октября', evening: true },
  medved: { id: 'medved', title: 'Колыбельная медведицы', kind: 'lullaby', voice: voices.mama, dur: '5:10', min: 5.17, art: 'mr-art mr-c5', file: 'Новая запись 52', source: 'Диктофон', when: 'вчера', evening: true },
  kotya: { id: 'kotya', title: 'Котя-коток', kind: 'lullaby', voice: voices.papa, dur: '4:10', min: 4.17, art: '', shot: 'mr-art mr-c4', file: 'Котя папа.m4a', source: 'Файлы', when: '5 октября', evening: true },
  kolobok: { id: 'kolobok', title: 'Колобок', kind: 'tale', voice: voices.papa, dur: '6:20', art: 'mr-art mr-c6', file: 'Колобок.m4a', source: 'Файлы', when: '28 сентября' },
  bayu: { id: 'bayu', title: 'Баю-баюшки-баю', kind: 'lullaby', voice: voices.nina, dur: '3:05', art: 'mr-art mr-c1', file: 'Баюшки.m4a', source: 'Файлы', when: '20 сентября' },
  ezhik: { id: 'ezhik', title: 'Сказка про ёжика', kind: 'tale', voice: voices.mama, dur: '7:45', art: '', file: 'Новая запись 48', source: 'Диктофон', when: '24 сентября' },
};
/* Запись, которую добавляют формой «Новая колыбельная»: файл от бабушки, обложка из «Фото» */
export const snow = { id: 'snow', title: 'Сказка про снеговика', kind: 'tale', voice: voices.nina, dur: '5:30', art: '', picked: 'mr-art mr-c3', file: 'Снеговик_Нина.m4a', source: 'Файлы', when: 'сегодня' };

export const kindLabel = (r) => (r.kind === 'tale' ? 'сказка' : 'колыбельная');
export const recSub = (r) => `${r.voice.who} · ${kindLabel(r)}`;
export const byVoice = (v) => Object.values(recs).filter((r) => r.voice === v);
export const records = (n) => plural(n, 'запись', 'записи', 'записей');
export const lullabies = (n) => plural(n, 'колыбельная', 'колыбельные', 'колыбельных');

/* «Вечер» на сегодня: три колыбельные · 14 минут */
export const evening = { list: [recs.spyat, recs.medved, recs.kotya], mins: 14, title: 'Вечер · на сон' };
evening.sub = `${lullabies(evening.list.length)} · ${evening.mins} минут`;

/* Таймер сна: 10 / 20 / 30 минут, «Слушать» нажали в 20:45, звук тихо затухает */
export const timer = {
  on: 20,
  options: [
    { min: 10, until: '20:55', where: 'на второй колыбельной' },
    { min: 20, until: '21:05', where: 'вечер по кругу, всё тише' },
    { min: 30, until: '21:15', where: 'вечер по кругу, всё тише' },
  ],
};

/* Сейчас играет: первая колыбельная вечера */
export const playing = { rec: recs.spyat, at: '1:12', left: '−3:28', pct: 26 };
/* Экран погас: через 8 минут играет вторая, до тишины 12 минут */
export const lock = { rec: recs.medved, time: '20:53', at: '3:20', left: '−1:50', status: 'Засыпаем · ещё 12 минут' };
export const reminder = { time: '20:30' };
export const totals = { records: 6, voices: 3, mins: 31 };
/* Неделя 5–11 октября: сколько минут звучал вечер до тишины; сегодня таймер на 20 минут уже идёт */
export const week = [['пн', 20], ['вт', 30], ['ср', 10], ['чт', 20], ['пт', null], ['сб', null], ['вс', null]];
/* Любимая недели: чаще всего первой в «Вечере» */
export const favourite = { rec: recs.spyat, times: 4 };
export const storage = { recorder: 2, files: 4, size: '212 МБ' };
