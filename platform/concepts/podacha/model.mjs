/**
 * Модель домена «Подачи»: домашняя готовка, авторы и совместные ужины.
 * «Сейчас» — среда, 16 сентября, 19:16: ужин Амины идёт, открыт второй шаг.
 */
import { moment, range } from '../../kernel/world.mjs';

export const now = moment('2026-09-16', '19:16');

/* Фото блюд нет: авторы — инициалы */
export const people = {
  me: { name: 'Саша Левина', initial: 'СЛ', about: 'это вы · Алматы' },
  amina: { name: 'Амина Рахимова', first: 'Амина', initial: 'АР' },
  zhanna: { name: 'Жанна Ким', first: 'Жанна', initial: 'ЖК' },
  timur: { name: 'Тимур Садыков', first: 'Тимур', initial: 'ТС' },
};

export const cookalong = { title: 'Ужин из одной сковороды', start: '19:00', end: '19:45', hours: range('19:00', '19:45'), host: people.amina, cooks: 8, seats: 12, step: 2, steps: 6 };

export const entities = [
  { name: 'Автор', what: 'человек, который готовит и публикует; фото нет — инициалы', states: ['не подписаны', 'подписаны'], screens: ['profile', 'following', 'matches', 'discover'] },
  { name: 'Публикация', what: 'блюдо с текстом и карточкой рецепта', states: ['черновик', 'опубликована'], screens: ['feed', 'post', 'compose'] },
  { name: 'Рецепт', what: 'проверенный рецепт: ингредиенты, замены, шаги', states: ['сохранён', 'приготовлен', 'проверен'], screens: ['recipe', 'recipes'] },
  { name: 'Совместная готовка', what: 'ужин по шагам в общем темпе с ведущей', states: ['скоро', 'идёт', 'завершена'], screens: ['cookings', 'cookalong', 'steps', 'kitchen'] },
  { name: 'Шаг', what: 'этап готовки с таймером', states: ['впереди', 'сейчас', 'готов'], screens: ['steps', 'kitchen', 'audio'] },
  { name: 'Диалог', what: 'чат готовки или личная переписка с автором', states: ['есть непрочитанные', 'прочитан'], screens: ['chats', 'conversation', 'direct-zhanna', 'direct-timur', 'call'] },
];
