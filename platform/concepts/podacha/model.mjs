/**
 * Модель домена «Вкусно»: свой дневник готовки, свои рецепты и ужины вместе по звонку.
 * «Сейчас» — среда, 16 сентября, 19:16: ужин Амины идёт, открыт второй шаг.
 */
import { moment, range } from '../../kernel/world.mjs';

export const now = moment('2026-09-16', '19:16');

/* Фото людей нет: знакомые — инициалы */
export const people = {
  me: { name: 'Саша Левина', initial: 'СЛ', about: 'это вы · Алматы' },
  amina: { name: 'Амина Рахимова', first: 'Амина', initial: 'АР' },
  zhanna: { name: 'Жанна Ким', first: 'Жанна', initial: 'ЖК' },
  timur: { name: 'Тимур Садыков', first: 'Тимур', initial: 'ТС' },
};

export const cookalong = { title: 'Ужин из одной сковороды', start: '19:00', end: '19:45', hours: range('19:00', '19:45'), host: people.amina, cooks: 8, step: 2, steps: 6 };

/* Текущий шаг ужина — один на все экраны: кухня, чат, виджет, звук */
export const step = { n: 2, label: '02', title: 'Обжарьте лук до прозрачности', short: 'обжарить лук', timer: '05:42', fire: 'средний огонь' };

/* Свой дневник Саши: только то, что она приготовила и записала сама — неровные, живые состояния */
export const own = {
  dish: { title: 'Грушевый пирог', when: 'вчера, 18:40', text: 'Сахара вдвое меньше, мука цельнозерновая — всё равно мягкий. В следующий раз груш больше', photos: 2, times: 6 },
  voice: { title: 'Что поменять в соусе', when: 'сегодня, 13:05', dur: '0:31' },
  list: { title: 'Покупки к пятнице', items: ['Фарш говяжий 700 г', 'Сметана · 2 банки', 'Лавровый лист'], left: 3, done: 2 },
  recipe: { title: 'Хачапури на сковороде', when: 'позавчера', change: 'вторая замена: сулугуни → адыгейский' },
  saved: { dishes: 42, recipes: 27, together: 9 },
};

export const entities = [
  { name: 'Человек', what: 'знакомый, с кем готовят вместе; фото нет — инициалы', states: ['знакомы', 'готовим вместе'], screens: ['profile', 'following', 'matches', 'discover'] },
  { name: 'Запись', what: 'своё блюдо, заметка или список покупок', states: ['черновик', 'в дневнике'], screens: ['feed', 'post', 'compose'] },
  { name: 'Рецепт', what: 'проверенный рецепт: ингредиенты, замены, шаги', states: ['сохранён', 'приготовлен', 'проверен'], screens: ['recipe', 'recipes'] },
  { name: 'Совместная готовка', what: 'ужин по шагам в общем темпе с ведущей', states: ['скоро', 'идёт', 'завершена'], screens: ['cookings', 'cookalong', 'steps', 'kitchen'] },
  { name: 'Шаг', what: 'этап готовки с таймером', states: ['впереди', 'сейчас', 'готов'], screens: ['steps', 'kitchen', 'audio'] },
  { name: 'Диалог', what: 'чат готовки или личная переписка', states: ['есть непрочитанные', 'прочитан'], screens: ['chats', 'conversation', 'direct-zhanna', 'direct-timur', 'call'] },
];
