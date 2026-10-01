/**
 * Модель домена «Узла»: клуб ремонта, мастерские, проекты по этапам и смены.
 * «Сейчас» — четверг, 10 сентября, 19:48: в «Реверсе» идёт вечерняя смена,
 * у лампы Л‑74 остался последний этап — абажур.
 */
import { moment, dateLabel, addDays, weekdayShort } from '../../kernel/world.mjs';

export const now = moment('2026-09-10', '19:48');

/* Фото нет: участники — инициалы, вещи — значки */
export const people = {
  me: { name: 'Алексей Нуров', first: 'Алексей', initial: 'АН', about: 'это вы · свет, дерево, диагностика' },
  irina: { name: 'Ирина Бек', first: 'Ирина', initial: 'ИБ', about: 'ведёт лампу Л‑74' },
  anton: { name: 'Антон Ким', first: 'Антон', initial: 'АК', about: 'Электродвор · пайка' },
  marina: { name: 'Марина Лосева', first: 'Марина', initial: 'МЛ', about: 'Реверс · 3 общих проекта' },
  pavel: { name: 'Павел Орлов', first: 'Павел', initial: 'ПО', about: 'дежурный «Реверса»' },
};

export const workshops = {
  revers: { name: 'Реверс', what: 'свет, дерево, малая техника', address: '13-я линия В.О., 70', places: 6, until: '22:00', network: 'REVERS-GUEST', distance: '1,2 км' },
  electro: { name: 'Электродвор', what: 'пайка и диагностика', address: 'Чкаловский проспект', places: 4, distance: '2,8 км' },
};

export const lamp = { id: 'Л‑74', title: 'Лампа Л‑74', what: 'торшер 1970-х', stage: 4, stages: 5, next: 'Абажур Ø 240 мм', due: 'пятница', owner: people.irina, days: 12 };
export const shift = { title: 'Свет и мелкая техника', start: '18:30', end: '21:00', free: 4, seats: 12, workshop: 'Реверс', elapsed: '01:18' };
export const saturday = { title: 'Диагностика и пайка', iso: '2026-09-12', day: dateLabel('2026-09-12'), start: '12:00', end: '16:00', free: 3, workshop: 'Электродвор' };

/* Полоса дней в «Сменах»: пять дней от сегодня, день недели из календаря */
export const days = Array.from({ length: 5 }, (_, i) => { const iso = addDays(now.iso, i); return { iso, wd: weekdayShort(iso), d: Number(iso.slice(8)) }; });

export const entities = [
  { name: 'Участник', what: 'человек клуба: навыки, мастерская, публичные этапы', states: ['не подписаны', 'подписаны'], screens: ['profile', 'contacts', 'feed'] },
  { name: 'Проект', what: 'вещь в ремонте с этапами, ответственным и сроком', states: ['диагностика', 'в работе', 'нужна смена', 'готово'], screens: ['projects', 'project', 'widget'] },
  { name: 'Этап', what: 'шаг ремонта с фото, результатом и следующим шагом', states: ['черновик', 'опубликован'], screens: ['update', 'camera', 'photos', 'feed'] },
  { name: 'Задача', what: 'следующий этап с чек-листом, заметкой осмотра и передачей', states: ['назначена', 'в работе', 'передана', 'готова'], screens: ['task', 'note', 'handoff', 'assignment'] },
  { name: 'Мастерская', what: 'физическое место с рабочими местами и гостевой сетью', states: ['закрыта', 'открыта', 'вы на месте'], screens: ['workshops', 'workshop', 'nearby', 'verify', 'guestwifi'] },
  { name: 'Смена', what: 'вечер в мастерской: роли, вещи, ход работы', states: ['запись открыта', 'идёт', 'прошла'], screens: ['shifts', 'shift', 'shiftlive', 'schedule'] },
  { name: 'Диалог', what: 'чат смены или личная переписка', states: ['есть непрочитанные', 'прочитан'], screens: ['chats', 'chat', 'call'] },
];
