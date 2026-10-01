/**
 * Модель домена «Соток»: товарищество, соседи, поездка и собрания.
 * «Сейчас» — четверг, 9:41: утреннее собрание правления идёт с 9:00,
 * поездка на ярмарку — в субботу.
 */
import { moment, dayLabel, dateLabel } from '../../kernel/world.mjs';

export const now = moment('2026-09-10');

export const snt = { name: 'СНТ «Берёзка»', plots: 28, inApp: 24 };

/* Фото нет: соседи — инициалы и номер участка */
export const people = {
  me: { name: 'Ольга Захарова', initial: 'ОЗ', plot: 12, about: 'это вы' },
  chair: { name: 'Анна Викторовна', initial: 'АВ', about: 'председатель' },
  elena: { name: 'Елена Соколова', initial: 'ЕС', plot: 24 },
  ilya: { name: 'Илья Макаров', initial: 'ИМ', plot: 18 },
  natalya: { name: 'Наталья Чернова', initial: 'НЧ', plot: 31 },
  marina: { name: 'Марина Петрова', initial: 'МП', plot: 7 },
};

export const trip = { title: 'Поездка на садовую ярмарку', iso: '2026-09-12', date: dayLabel('2026-09-12'), short: dateLabel('2026-09-12'), departure: '09:30', from: 'главного въезда', signed: 18, seats: 28 };

export const meeting = { title: 'Правление, северная дорога', start: '9:00', item: 'пункт 2 из 5', topic: 'Смета на шлагбаум', listeners: 38, elapsed: '41:06' };

export const lastMeeting = { title: 'Собрание 4 сентября', length: '48:20', stoppedAt: '21:30' };

export const entities = [
  { name: 'Сосед', what: 'участник товарищества: имя и номер участка, без фото', states: ['приглашён', 'в приложении'], screens: ['classroom', 'parents', 'match', 'profile'] },
  { name: 'Публикация', what: 'запись в ленте товарищества', states: ['черновик', 'опубликована'], screens: ['feed', 'post', 'compose'] },
  { name: 'Обсуждение', what: 'переписка соседей вокруг события или вопроса', states: ['открыто', 'есть новые ответы', 'закрыто'], screens: ['discussions', 'thread'] },
  { name: 'Поездка', what: 'общий выезд: дата, место сбора, места в автобусе', states: ['запись открыта', 'мест нет', 'в пути', 'состоялась'], screens: ['event', 'route', 'feed'] },
  { name: 'Собрание', what: 'собрание правления с повесткой', states: ['запланировано', 'идёт', 'в записи'], screens: ['records', 'live'] },
  { name: 'Запись', what: 'аудио собрания с метками пунктов', states: ['не скачана', 'скачана', 'дослушана'], screens: ['records', 'player', 'background'] },
  { name: 'Альбом', what: 'снимки событий товарищества', states: ['общая папка', 'разобран по событиям'], screens: ['album', 'picker', 'tv', 'cast'] },
];
