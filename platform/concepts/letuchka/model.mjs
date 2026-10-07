/**
 * Модель домена «В курсе»: студия на 18 человек, офис на Лиговском.
 * «Сейчас» — среда, 7 октября, 10:05: летучка в 10:30 (вчера вечером перенесена с 10:00),
 * в офисе 10 из 18, Ира Савельева — это вы, менеджер проектов, вторая неделя в студии.
 */
import { moment, dayLabel, dateLabel } from '../../kernel/world.mjs';

export const now = moment('2026-10-07', '10:05');

export const me = { name: 'Ира Савельева', initial: 'ИС', phone: '+7 900 123-45-67', nick: '@ira_sav', role: 'менеджер проектов' };

export const studio = {
  name: 'Полдень', full: 'студия «Полдень»', people: 18,
  office: 'Лиговский, 74', floor: '5 этаж, офис 512',
  guestSsid: 'Studio_Guest', officeSsid: 'Studio_Office', guestPass: 'polden-guest-26',
  link: 'vkurse.app/j/polden-sever', domain: 'vkurse.app',
};

/* Люди студии: фото нет — инициалы. Ира — это вы */
export const people = {
  pasha: { name: 'Паша Ильин', initial: 'ПИ', role: 'арт-директор' },
  vika: { name: 'Вика Громова', initial: 'ВГ', role: 'офис-менеджер' },
  artem: { name: 'Артём Шилов', initial: 'АШ', role: 'продюсер' },
  lera: { name: 'Лера Бойко', initial: 'ЛБ', role: 'дизайнер' },
  gosha: { name: 'Гоша Аверин', initial: 'ГА', role: 'разработчик' },
  katya: { name: 'Катя Мельникова', initial: 'КМ', role: 'моушн-дизайнер' },
  stas: { name: 'Стас Ерёмин', initial: 'СЕ', role: 'разработчик' },
  olya: { name: 'Оля Тихонова', initial: 'ОТ', role: 'копирайтер' },
  masha: { name: 'Маша Литвинова', initial: 'МЛ', role: 'дизайнер' },
  yura: { name: 'Юра Панов', initial: 'ЮП', role: 'директор' },
  dima: { name: 'Дима Корнеев', initial: 'ДК', role: 'дизайнер' },
  roma: { name: 'Рома Зуев', initial: 'РЗ', role: '3D' },
  kirill: { name: 'Кирилл Боровиков', initial: 'КБ', role: 'разработчик' },
  nastya: { name: 'Настя Крылова', initial: 'НК', role: 'иллюстратор' },
  zhenya: { name: 'Женя Сафронова', initial: 'ЖС', role: 'бухгалтер' },
  lyosha: { name: 'Лёша Дорофеев', initial: 'ЛД', role: 'дизайнер' },
  sonya: { name: 'Соня Назарова', initial: 'СН', role: 'стажёр' },
};

/* Кто сегодня в офисе: 10 до отметки Иры, по сети офиса или вручную. Последним пришёл Дима в 9:52 */
export const inOffice = [
  [people.vika, 'с 8:47 · Studio_Office'],
  [people.yura, 'с 9:02 · Studio_Office'],
  [people.pasha, 'с 9:05 · Studio_Office'],
  [people.olya, 'с 9:15 · отметилась сама'],
  [people.katya, 'с 9:20 · Studio_Office'],
  [people.gosha, 'с 9:30 · Studio_Office'],
  [people.masha, 'с 9:38 · Studio_Guest'],
  [people.lera, 'с 9:41 · Studio_Office'],
  [people.stas, 'с 9:44 · Studio_Office'],
  [people.dima, 'с 9:52 · Studio_Office'],
];
export const away = [
  [people.artem, 'у клиента на Петроградке до 13:00'],
  [people.roma, 'удалённо · на летучке по звонку'],
  [people.kirill, 'удалённо из Казани · до пятницы'],
  [people.zhenya, 'в офисе по вторникам и четвергам'],
  [people.sonya, 'учёба до 14:00'],
  [people.lyosha, 'болеет с понедельника'],
  [people.nastya, 'отпуск до 12 октября'],
];
export const office = { here: inOffice.length, total: studio.people, meIn: '9:52', synced: '9:52' };

/* Летучка: каждый день в 10:30, сегодня перенесена с 10:00 */
export const standup = {
  time: '10:30', was: '10:00', in: 25, room: 'Большая', movedBy: 'Паша', movedAt: '19:40', length: '15 минут', remind: '10:20',
  agenda: [
    ['Северная верфь: демо в четверг', 'Ира · 4 мин · логотип v3 и гайд', 'project'],
    ['«Тёплый дом»: запуск в пятницу', 'Гоша · 4 мин · осталось 3 бага'],
    ['Новый иллюстратор в проекте', 'Паша · 2 мин · Тёма Ершов, с завтра'],
    ['Отпуска в ноябре', 'Вика · 3 мин · таблица в «Гостях дня»'],
    ['Разное', 'кто успеет · 2 мин'],
  ],
  /* Вчерашняя летучка: запись сжата ночью для тех, кого не было */
  yesterday: { iso: '2026-10-06', label: dayLabel('2026-10-06'), dur: '18 мин', raw: '1,6 ГБ', packed: '212 МБ', missed: 4, was: 14 },
};

/* Переговорки на сегодня: 6 броней в двух комнатах */
export const rooms = {
  synced: '08:30',
  big: { name: 'Большая', seats: 10, items: [
    ['10:30', 'Летучка', 'Паша · 15 минут · 11 в офисе, Рома по звонку'],
    ['12:00', 'Созвон с «Северной верфью»', 'Ира · до 13:00 · экран и камера'],
    ['15:00', 'Ревью сайта «Тёплый дом»', 'Гоша · до 16:30'],
  ] },
  small: { name: 'Малая', seats: 4, items: [
    ['11:00', 'Собеседование, стажёр в дизайн', 'Вика · до 11:45 · гость Полина'],
    ['14:00', 'Озвучка ролика', 'Катя · до 15:00 · не шуметь'],
    ['16:00', 'Знакомство с Тёмой', 'Паша и Ира · до 16:30 · гость'],
  ] },
  mine: 3,
};

/* Гости дня в офисе */
export const guests = [
  ['11:00', 'Полина Широкова', 'собеседование · Малая · встречает Вика'],
  ['16:00', 'Тёма Ершов', 'иллюстратор в «Северную верфь» · встречают Паша и Ира'],
];

/* Проект: чат, файлы и договоры */
export const project = {
  name: 'Северная верфь', initial: 'СВ', full: 'ребрендинг «Северной верфи»',
  people: 7, online: 4, files: 46, offline: '07:10', offlineSize: '312 МБ',
};

/* Демо клиенту из переписки с Пашей: одна запись в Календарь */
export const demo = { label: 'в четверг в 15:00', iso: '2026-10-08', date: dateLabel('2026-10-08'), time: '15:00', where: 'у клиента, Чкаловский, 15' };

export const ad = { title: 'Бизнес-ланч на Лиговском', text: 'суп и горячее за 390 ₽, 12:00–16:00, 200 м от офиса' };

export const entities = [
  { name: 'Чат', what: 'личный или групповой: проект, гости дня, вся студия', states: ['непрочитан', 'прочитан'], screens: ['chats', 'project', 'chat', 'pasha', 'guests', 'saved'] },
  { name: 'Летучка', what: 'ежедневная встреча студии: время, переговорка, повестка и запись', states: ['назначена', 'перенесена', 'прошла, запись готова'], screens: ['office', 'standup'] },
  { name: 'Отметка в офисе', what: 'кто сегодня в офисе и с какого времени', states: ['в офисе', 'удалённо', 'у клиента'], screens: ['office'] },
  { name: 'Бронь переговорки', what: 'комната, время и кто занял', states: ['свободна', 'занята', 'идёт'], screens: ['rooms'] },
  { name: 'Звонок', what: 'аудио- и видеозвонок через системный экран звонка', states: ['идёт', 'пропущен', 'завершён'], screens: ['calls', 'call'] },
];
