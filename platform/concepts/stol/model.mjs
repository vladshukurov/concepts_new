/**
 * Модель домена «Стола»: настольные игры, живые столы и партии.
 * «Сейчас» — среда, 16 сентября, 12:20: Маша заняла последнее место
 * за «Лесными союзами» на вечер, в субботу — «Маршруты Севера».
 */
import { moment, dateLabel, dayLabel } from '../../kernel/world.mjs';

export const now = moment('2026-09-16', '12:20');

/* Фото нет: игроки — инициалы */
export const people = {
  me: { name: 'Саша Руденко', first: 'Саша', initial: 'СР', about: 'это вы · объясняю правила' },
  masha: { name: 'Маша Орлова', first: 'Маша', initial: 'МО', about: 'собирает столы в «Полке»' },
  ilya: { name: 'Илья Левин', first: 'Илья', initial: 'ИЛ', about: 'объясняет правила' },
  zhenya: { name: 'Женя Ким', first: 'Женя', initial: 'ЖК', about: 'играет дома' },
};

export const club = { name: 'клуб «Полка»', address: 'Абая, 44', network: 'Polka Guest' };

export const tonight = { game: 'Лесные союзы', start: '19:30', day: dateLabel('2026-09-16'), where: club.name, minutes: 75, pace: 'спокойный темп', seats: 4, taken: 4, host: people.masha };
export const saturday = { game: 'Маршруты Севера', start: '16:30', iso: '2026-09-19', date: dayLabel('2026-09-19'), where: 'кафе «Клетка»', seats: 5, taken: 3 };
export const score = { round: 4, players: [['Маша', 71, 'ход завершён'], ['Илья', 64, 'ходит'], ['Саша', 58, 'ждёт']] };

export const entities = [
  { name: 'Игрок', what: 'человек с коллекцией, темпом и сыгранными партиями', states: ['не подписаны', 'подписаны'], screens: ['profile', 'feed'] },
  { name: 'Стол', what: 'конкретная партия: игра, время, место, свободные места', states: ['набор', 'собран', 'идёт', 'сыгран'], screens: ['tables', 'table', 'feed'] },
  { name: 'Игра', what: 'коробка в коллекции: игроки, длительность, кто знает правила', states: ['хочу сыграть', 'в коллекции', 'сыграна'], screens: ['games', 'audio'] },
  { name: 'Партия', what: 'счёт по раундам и итог', states: ['идёт', 'завершена'], screens: ['score', 'cast'] },
  { name: 'Публикация', what: 'запись о столе или итоге партии', states: ['черновик', 'опубликована'], screens: ['feed', 'post', 'compose'] },
  { name: 'Диалог', what: 'чат стола или личная переписка', states: ['есть непрочитанные', 'прочитан'], screens: ['chats', 'chat', 'direct', 'call'] },
];
