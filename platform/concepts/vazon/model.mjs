/**
 * Модель домена «Вазона»: свой дневник комнатных растений — рост по месяцам, полив,
 * подкормка, пересадки, голосовые заметки и переписка с подругой-цветоводом.
 * «Сейчас» — четверг, 8 октября, 9:41: сегодня полить три растения.
 */
import { moment, dayLabel, dateLabel, addDays, rub } from '../../kernel/world.mjs';

export const now = moment('2026-10-08');
const sat = addDays(now.iso, 2);
export const saturday = { iso: sat, label: dayLabel(sat), short: dateLabel(sat) };

/* Фото людей нет: знакомые — инициалы */
export const people = {
  me: { name: 'Катя Морозова', initial: 'КМ', about: 'это вы · Казань' },
  ira: { name: 'Ира Белова', first: 'Ира', initial: 'ИБ' },
  mama: { name: 'Мама', first: 'Мама', initial: 'М' },
  olya: { name: 'Оля Сафина', first: 'Оля', initial: 'ОС' },
};

/* Свои растения. water — когда полить, every — как часто. Одни и те же цифры на всех экранах */
export const plants = {
  monstera: { id: 'plant-monstera', name: 'Монстера', nick: 'Моня', room: 'балкон, у окна', age: '3 года', every: 'раз в 7 дней', water: 'сегодня', last: '1 октября', leaves: 8, icon: 'trees' },
  calathea: { id: 'plant-calathea', name: 'Калатея', nick: 'полосатая', room: 'спальня, подоконник', age: '1 год', every: 'раз в 5 дней', water: 'сегодня', last: '3 октября', icon: 'trees' },
  peperomia: { id: 'plant-peperomia', name: 'Пеперомия', nick: 'круглолистная', room: 'кухня, подоконник', age: '2 года', every: 'раз в 6 дней', water: 'сегодня', last: '2 октября', icon: 'trees' },
  ficus: { id: 'plant-ficus', name: 'Фикус Бенджамина', nick: 'от бабушки', room: 'спальня, у балкона', age: '6 лет', every: 'по субботам', water: `в субботу, ${saturday.short}`, last: '3 октября', icon: 'trees' },
  chlorophytum: { id: 'plant-chlorophytum', name: 'Хлорофитум', nick: 'с детками', room: 'кухня, подоконник', age: '4 года', every: 'раз в 4 дня', water: 'завтра', last: '5 октября', icon: 'trees' },
  sansevieria: { id: 'plant-sansevieria', name: 'Сансевиерия', nick: 'щучий хвост', room: 'балкон, на полу', age: '5 лет', every: 'раз в 3 недели', water: '20 октября', last: '29 сентября', icon: 'trees' },
};
/* Подоконники: где стоят растения, какой там свет и что на неделе — чт 8 → ср 14 октября.
   w — полить, f — подкормить, s — пропустить (грунт ещё влажный), '' — ничего */
export const week = ['чт', 'пт', 'сб', 'вс', 'пн', 'вт', 'ср'];
export const sills = [
  { id: 'kitchen', name: 'Кухня · восток', light: 'Утреннее солнце до 11:00', plants: ['peperomia', 'chlorophytum'], days: ['w', 'w', '', 's', '', 'w', 'w'] },
  { id: 'bed', name: 'Спальня · север', light: 'Ровный рассеянный свет, батарея под окном', plants: ['calathea', 'ficus'], days: ['w', '', 'w', '', 'f', 'w', ''] },
  { id: 'balcony', name: 'Балкон · юг', light: 'Солнце с полудня, утеплённый, +16°', plants: ['monstera', 'sansevieria'], days: ['w', '', '', 's', '', '', ''] },
];
export const plantCount = Object.keys(plants).length;
export const today = [plants.monstera, plants.calathea, plants.peperomia];

/* Свой дневник Кати — только то, что она сняла и записала сама */
export const own = {
  entries: 48,
  given: 3,
  newLeaf: { title: 'Монстера · новый лист', when: '4 октября', text: 'Восьмой лист раскрылся за неделю — первый с прорезями. Повернула горшок другим боком к окну', photos: 2 },
  peperVoice: { title: 'Пеперомия · новые побеги', when: '6 октября', dur: '0:12' },
  feed: { title: 'Подкормка фикуса', when: '3 октября', text: 'Жидкое удобрение, половина дозы — дальше до весны без подкормок' },
  yellow: { title: 'Листья желтеют по краям', dur: '0:18' },
  /* Последние семь дней в профиле: сколько полито — по датам last у растений; сегодня — три на очереди */
  days: [['пт', 2, 1], ['сб', 3, 2], ['вс', 4, 0], ['пн', 5, 1], ['вт', 6, 0], ['ср', 7, 0], ['чт', 8, 3, 'today']],
  month: { watered: 5, photos: 6 },
};

/* Пересадка хлорофитума: горшок больше, детки отсажены, одну Ира заберёт в обмен на хойю */
export const repot = { title: 'Пересадка хлорофитума', when: '5 октября', pot: '16 см', soil: 'грунт для декоративно-лиственных · 5 л', shop: 'Земля и горшки', site: 'zemlya-gorshki.ru', price: rub(390) };

/* Обмен с Ирой: детка хлорофитума ↔ черенок хойи, в субботу */
export const swap = { give: 'детку хлорофитума', get: 'черенок хойи', when: `в субботу, ${saturday.short}`, reply: 'Договорились! Заберу детку в субботу и привезу хойю' };

/* Реклама в дневнике — то, на что живёт бесплатный дневник. Подбор по интересам — только после ATT */
export const ad = { title: 'Удобрения «Зелёный дом»', text: 'для комнатных растений · от 290 ₽', near: 'для монстеры и фикуса' };

export const entities = [
  { name: 'Растение', what: 'своё комнатное растение: где стоит, как поливать, рост по месяцам', states: ['полить сегодня', 'полито', 'пересажено'], screens: ['plants', 'plant-monstera', 'plant-calathea', 'plant-ficus', 'plantnew'] },
  { name: 'Запись', what: 'снимок, голосовая заметка, полив, подкормка или пересадка', states: ['черновик', 'в дневнике'], screens: ['feed', 'compose', 'camera', 'voice'] },
  { name: 'Полив', what: 'список растений на сегодня с отметками на месте', states: ['полить', 'полито'], screens: ['water', 'widget'] },
  { name: 'Пересадка', what: 'горшок, грунт и детки после пересадки', states: ['запланирована', 'сделана'], screens: ['repot', 'fill'] },
  { name: 'Диалог', what: 'переписка с подругой-цветоводом, мамой и знакомыми', states: ['есть непрочитанные', 'прочитан'], screens: ['chats', 'direct-ira', 'direct-mama', 'direct-olya', 'lockscreen'] },
];
