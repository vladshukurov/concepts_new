/**
 * Модель «Мелодии»: свои рингтоны и мелодии будильника из своих записей.
 * «Сейчас» — четверг, 8 октября, вечер. Оля вырезала 20 секунд смеха Сони на звонок мамы,
 * будит её голос Тёмы «Мама, подъём!», на сообщениях — свист чайника.
 * Обложек у мелодий нет — значки и инициалы; фото только у карточек контактов.
 */
import { moment, dateLabel } from '../../kernel/world.mjs';

export const now = moment('2026-10-08', '21:10');
export const me = { name: 'Ольга Белова', short: 'Оля', initial: 'О' };

/* Мелодии: запись-источник, фрагмент «от — до», затухание. pick — куда назначена */
export const tones = {
  laugh: { id: 'laugh', title: 'Смех Сони', icon: 'sparkles', rec: 'Новая запись 48', source: 'Диктофон', recDate: '2026-10-02', total: '0:48', from: '0:12', to: '0:32', len: 20, fade: true, note: 'Соня хохочет на качелях' },
  podyom: { id: 'podyom', title: 'Мама, подъём!', icon: 'sunrise', rec: 'Новая запись 39', source: 'Диктофон', recDate: '2026-09-21', total: '0:31', from: '0:03', to: '0:19', len: 16, fade: false, note: 'голос Тёмы, со второго дубля' },
  repet: { id: 'repet', title: 'Репетиция · припев', icon: 'music', rec: 'Репетиция 6 октября.m4a', source: 'Файлы', recDate: '2026-10-06', total: '14:22', from: '3:41', to: '4:01', len: 20, fade: true, note: 'группа «Вторник», второй прогон' },
  kettle: { id: 'kettle', title: 'Свист чайника', icon: 'coffee', rec: 'Новая запись 31', source: 'Диктофон', recDate: '2026-09-12', total: '0:26', from: '0:08', to: '0:12', len: 4, fade: false, note: 'дачный чайник со свистком' },
  rain: { id: 'rain', title: 'Дождь на даче', icon: 'cloud-rain', rec: 'Новая запись 27', source: 'Диктофон', recDate: '2026-08-30', total: '2:05', from: '0:40', to: '1:10', len: 30, fade: true, note: 'по крыше веранды' },
};
export const ORDER = ['laugh', 'podyom', 'repet', 'kettle', 'rain'];
/* Мелодия, которую создают формой «Новая мелодия» из сегодняшней записи */
export const song = { id: 'song', title: 'Сонина песенка', icon: 'music', rec: 'Новая запись 52', source: 'Диктофон', recDate: '2026-10-08', total: '0:41', from: '0:05', to: '0:25', len: 20, fade: true, note: 'Соня поёт про осень' };

for (const t of [...Object.values(tones), song]) {
  t.when = t.recDate === now.iso ? 'сегодня' : dateLabel(t.recDate);
  t.sub = `${t.len} с · ${t.note}`;
}

/* Что стоит сейчас: звонок, будильник, сообщения */
export const picks = { call: 'repet', alarm: 'podyom', msg: 'kettle' };
export const KINDS = [
  { id: 'call', label: 'Звонок', title: 'Звонок по умолчанию' },
  { id: 'alarm', label: 'Будильник', title: 'Будильник · 7:00 по будням' },
  { id: 'msg', label: 'Сообщения', title: 'Сообщения' },
];

/* Контакты: своя мелодия на звонок, фото только у карточки контакта */
export const contacts = {
  mama: { id: 'mama', who: 'мама', name: 'Мама', initial: 'М', tone: 'laugh', phone: '+7 916 204-11-58', since: '3 октября' },
  andrey: { id: 'andrey', who: 'Андрей', name: 'Андрей', initial: 'А', tone: 'rain', phone: '+7 903 771-40-02', since: '29 августа', photo: 'md-ph md-andrey', ask: 'camera' },
  lyosha: { id: 'lyosha', who: 'Лёша', name: 'Лёша · группа', initial: 'Л', tone: 'repet', phone: '+7 926 318-90-47', since: '6 октября', photo: 'md-ph md-lyosha' },
  katya: { id: 'katya', who: 'Катя', name: 'Катя', initial: 'К', tone: null, phone: '+7 985 602-33-19', photo: 'md-ph md-katya', ask: 'photos' },
  babushka: { id: 'babushka', who: 'бабушка', name: 'Бабушка', initial: 'Б', tone: null, phone: '+7 4852 33-17-90', birthday: '14 октября' },
};
export const CONTACT_ORDER = ['mama', 'andrey', 'lyosha', 'katya', 'babushka'];

/* Будильник: голос Тёмы по будням, звучит с погашенным экраном */
export const alarm = { time: '7:00', days: 'будни', tone: 'podyom', snooze: '9 мин', lockDate: 'Пятница, 9 октября', at: '0:04', left: '−0:12' };
/* Сейчас играет в мини-плеере: смех Сони, 0:07 из 20 секунд фрагмента */
export const playing = { tone: 'laugh', at: '0:19', left: '−0:13', pct: 35 };
/* Напоминание к дню рождения бабушки */
export const reminder = { day: '13 октября', time: '19:00' };
/* Записи-источники: «Диктофон» и «Файлы» */
export const records = { recorder: 31, files: 4, size: '86 МБ' };
