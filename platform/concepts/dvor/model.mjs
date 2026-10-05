/**
 * Модель домена «Двора»: один дом, его жильцы, заявки, события и сроки.
 * «Сейчас» — суббота, 11 апреля, 9:41: субботник завтра, воду отключат
 * с 14-го, показания счётчиков — до 25-го.
 */
import { moment, dateLabel, daysBetween, plural } from '../../kernel/world.mjs';

export const now = moment('2026-04-11');

export const house = { address: 'Полевая, 12', buildings: 3, flats: 214 };

/* Фото нет: жильцы — инициалы и номер квартиры */
export const people = {
  me: { name: 'Анна Разумова', initial: 'АР', flat: 74, entrance: 3, about: 'это вы' },
  marina: { name: 'Марина Кольцова', initial: 'МК', flat: 48 },
  petr: { name: 'Пётр Ильин', initial: 'ПИ', flat: 66 },
  irina: { name: 'Ирина Тепляк', initial: 'ИТ', flat: 78 },
};

export const cleanup = { title: 'Субботник во дворе', iso: '2026-04-12', day: dateLabel('2026-04-12'), time: '11:00', where: 'второй подъезд' };
export const outage = { title: 'Горячей воды не будет', from: 14, to: 17, month: 'апреля', label: '14–17 апреля' };
export const meetingDay = { title: 'Собрание собственников', iso: '2026-04-18', time: '19:00', where: 'холл' };
export const meters = { deadline: '2026-04-25', deadlineLabel: dateLabel('2026-04-25'), left: plural(daysBetween(now.iso, '2026-04-25'), 'день', 'дня', 'дней') };

/* Своя лента квартиры: только то, что записала сама Анна, — живые, неровные состояния */
export const journal = {
  door: { title: 'Доводчик на второй двери', when: 'сегодня, 8:12', text: 'Сорвало, дверь бьёт по коляскам. В чате УК обещали мастера с 16:00', photos: 2, status: 'в работе' },
  water: { reading: '00417,83', prev: '00412,38', when: 'вчера, 21:05', delta: '+5,45 м³ за месяц' },
  voice: { title: 'Что сказать сантехнику', when: 'вчера, 21:40', dur: '0:24' },
  crack: { title: 'Трещина над ванной', when: '8 апреля', text: 'Сняла после соседей сверху. Гарантия застройщика до марта 2027', photos: 3 },
  outage: { title: 'Горячей воды не будет', when: 'из чата УК · 10 апреля' },
};

export const entities = [
  { name: 'Жилец', what: 'сосед по дому: имя, квартира и подъезд, без фото', states: ['приглашён', 'дом подтверждён'], screens: ['neighbors', 'profile', 'join', 'verify'] },
  { name: 'Запись', what: 'своя запись о квартире: заявка, показания, голосовая заметка, фото поломки', states: ['черновик', 'отправлена в чат УК', 'закрыта'], screens: ['home', 'post'] },
  { name: 'Заявка', what: 'проблема в доме: фото, голос, исполнитель', states: ['черновик', 'принята', 'в работе', 'закрыта'], screens: ['problem', 'events', 'shoot', 'chat'] },
  { name: 'Событие дома', what: 'субботник, собрание, отключение', states: ['скоро', 'сегодня', 'прошло'], screens: ['events', 'post', 'widget'] },
  { name: 'Показания', what: 'счётчики воды и электричества до срока', states: ['не переданы', 'переданы'], screens: ['meters', 'scan'] },
  { name: 'Диалог', what: 'переписка с соседом или чат подъезда', states: ['есть непрочитанные', 'прочитан'], screens: ['chats', 'chat', 'call'] },
  { name: 'Вызов домофона', what: 'звонок от калитки или двери подъезда', states: ['звонит', 'открыто', 'отклонён'], screens: ['intercom'] },
];
