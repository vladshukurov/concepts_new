/**
 * Модель домена «Рядом»: беговой клуб, его люди, тренировки и маршруты.
 * «Сейчас» — суббота, 12 сентября, 7:20: через десять минут субботний
 * лонгран от Central Club, Илья раскладывает конусы, Даша идёт от метро.
 */
import { moment, dateLabel, dayLabel, range } from '../../kernel/world.mjs';

export const now = moment('2026-09-12', '7:20');

export const club = { name: 'Central Club', city: 'Алматы', members: 47 };

/* Фото нет: участники — инициалы */
export const people = {
  me: { name: 'Влад Крылов', first: 'Влад', initial: 'ВК', about: 'это вы · с 2022 года' },
  ilya: { name: 'Илья Морозов', first: 'Илья', initial: 'ИМ', about: 'тренер, ведёт лонгран' },
  alina: { name: 'Алина Ветрова', first: 'Алина', initial: 'АВ', about: 'утренняя группа' },
  dasha: { name: 'Даша Орлова', first: 'Даша', initial: 'ДО', about: 'утренняя группа' },
  roman: { name: 'Роман Ли', first: 'Роман', initial: 'РЛ', about: 'снимает видео техники' },
  lera: { name: 'Лера Юдина', first: 'Лера', initial: 'ЛЮ', about: 'Медеу' },
};

export const longrun = {
  title: 'Субботний лонгран', iso: '2026-09-12', day: dateLabel('2026-09-12'), date: dayLabel('2026-09-12'),
  start: '07:30', from: `${club.name}, главный вход`, route: 'Набережная', km: '8,2', pace: '6:00–6:20',
  confirmed: 9, spots: 14, host: people.ilya,
};
export const recovery = { title: 'Восстановительная группа', start: '07:40', km: '5', pace: '6:35–6:50', from: 'набережная' };
export const technique = { title: 'Техника бега на Медеу', iso: '2026-09-15', day: dateLabel('2026-09-15'), start: '18:30', host: people.dasha, left: 3 };

export const route = { name: 'Набережная', km: '8,2', climb: '46 м', done: '2,4', left: '5,8', hint: { at: '5,2 км', len: '0:18' }, size: '18 МБ' };

export const entities = [
  { name: 'Участник', what: 'член клуба: имя, группа, тренировки; фото нет — инициалы', states: ['не в приложении', 'знакомый', 'подписан'], screens: ['friends', 'match', 'profile', 'invite'] },
  { name: 'Публикация', what: 'запись о тренировке: текст, километры, темп, место', states: ['черновик', 'опубликована'], screens: ['feed', 'post', 'compose'] },
  { name: 'Тренировка', what: 'сбор клуба: время, точка старта, темп, места', states: ['запись открыта', 'сегодня', 'идёт', 'прошла'], screens: ['events', 'meetup', 'route'] },
  { name: 'Маршрут', what: 'проверенная дорожка с отрезками и голосовыми подсказками тренера', states: ['не скачан', 'скачан', 'на пробежке'], screens: ['music', 'player', 'background'] },
  { name: 'Видео техники', what: 'ролик тренировки для разбора на большом экране', states: ['загружено', 'разбирается', 'разобрано'], screens: ['videos', 'tv', 'cast'] },
  { name: 'Диалог', what: 'чат тренировки или личная переписка', states: ['есть непрочитанные', 'прочитан'], screens: ['chats', 'chat', 'call'] },
];
