/**
 * Модель домена «Образов»: один момент, одни люди, одни данные на всех экранах.
 *
 * Экраны берут имена, время и состояния отсюда, доки — таблицу сущностей
 * (npm run docs). Статус-бар всегда 9:41 — конвенция iOS, поэтому «сейчас»
 * в продукте тоже утро: своп уже идёт, жакет ждёт проверки.
 */

export const now = { date: 'суббота, 24 мая', time: '9:41' };

/* Один кадр — один человек: фото назначены людям, а не экранам */
export const people = {
  lera: { name: 'Лера Савина', first: 'Лера', photo: 'lk-p1', about: 'ведущая свопа' },
  mark: { name: 'Марк Зотов', first: 'Марк', photo: 'lk-p2', about: 'Коломна' },
  marina: { name: 'Марина Орлова', first: 'Марина', photo: 'lk-p3', about: 'это вы' },
  yulia: { name: 'Юля Карпова', first: 'Юля', photo: 'lk-p4', about: 'Васильевский' },
};

export const swap = {
  title: 'Своп в Новой Голландии',
  place: 'Новая Голландия',
  where: 'Двор Бутылки, второй этаж',
  date: now.date,
  hours: '9:30–15:00',
  going: 18,
  checkedIn: 11,
  network: 'Novaya-Gollandia-Guest',
  networkUntil: 'до 21:00',
};

export const item = { title: 'Шерстяной жакет, 46', short: 'жакет', acceptBy: '10:00', host: people.lera };

export const episode = { title: 'Разобрать шкаф за один вечер', author: 'Аня Дёмина', issue: 12, at: '12:04', left: '−15:15' };

/** Сущности продукта: что это, как меняется и где видно. Источник таблицы в 02-architecture.md. */
export const entities = [
  { name: 'Автор', what: 'человек с профилем — тип пользователя в продукте один', states: ['не подписаны', 'подписаны'], screens: ['profile', 'post', 'nearby', 'mates'] },
  { name: 'Образ', what: 'публикация: фото и отмеченные вещи', states: ['черновик', 'опубликован'], screens: ['home', 'post', 'create', 'profile'] },
  { name: 'Клип', what: 'видео-примерка с субтитрами', states: ['черновик', 'с субтитрами', 'опубликован'], screens: ['clip', 'subtitles'] },
  { name: 'Своп', what: 'встреча обмена: место, часы, участники, сеть площадки', states: ['скоро', 'идёт', 'завершён'], screens: ['swap', 'checkin', 'netqr', 'nearby'] },
  { name: 'Вещь на свопе', what: 'то, что человек приносит; ведущая проверяет её до приёма', states: ['заявлена', 'на проверке', 'принята', 'отклонена'], screens: ['swap', 'chat', 'call'] },
  { name: 'Диалог', what: 'переписка с автором или чат свопа', states: ['есть непрочитанные', 'прочитан'], screens: ['chats', 'chat', 'call'] },
  { name: 'Разбор', what: 'аудиовыпуск о гардеробе', states: ['не начат', 'на паузе', 'дослушан'], screens: ['talk', 'background'] },
];
