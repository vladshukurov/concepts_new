/** Общее для экранов «В унисон». Файл с «_» — не экран, сборка его пропускает. */
import { balance } from '../model.mjs';

export const THEME = 'vk-light';
export const TABS = [
  { id: 'contacts', label: 'Контакты', icon: 'circle-user' },
  { id: 'calls', label: 'Звонки', icon: 'phone' },
  { id: 'chats', label: 'Чаты', icon: 'message-circle' },
  { id: 'repertoire', label: 'Репертуар', icon: 'audio-lines' },
  { id: 'settings', label: 'Настройки', icon: 'settings' },
];

/* Число, которое зависит от своего ответа: при «Иду» — a, при «Не смогу» — b (переключатель .sp-rsvp на этом же экране) */
export const ifGo = (a, b) => `<span class="sp-if-go">${a}</span><span class="sp-if-no">${b}</span>`;

/* Баланс партий: четыре строки «партия · N из M» и клетки по числу голосов. Клетка Оли у альтов гаснет при «Не смогу» */
export const balanceBars = ({ live = false } = {}) => `<div class="sp-bal">${balance.map((v) => {
  const n = live && v.id === 'alto' ? ifGo(v.yes, v.yes - 1) : v.yes;
  const cells = Array.from({ length: v.of }, (_, i) => `<i class="${i < v.yes ? (live && v.id === 'alto' && i === v.yes - 1 ? 'is-on is-me' : 'is-on') : ''}"></i>`).join('');
  return `<div class="sp-bal-row${v.weak ? ' is-weak' : ''}"><span class="sp-bal-name">${v.label}${v.weak ? '<b>мало</b>' : ''}</span><span class="sp-bal-n">${n} из ${v.of}</span><span class="sp-bal-cells" aria-hidden="true">${cells}</span></div>`;
}).join('')}</div>`;

/* Карта, нарисованная кодом: улицы, река и точки людей у ДК. Данные, а не картинка */
export const map = ({ points = [], className = '' } = {}) => `<div class="sp-map ${className}" aria-hidden="true"><i class="sp-river"></i><i class="sp-street s1"></i><i class="sp-street s2"></i><i class="sp-street s3"></i><i class="sp-street s4"></i><i class="sp-block b1"></i><i class="sp-block b2"></i><i class="sp-block b3"></i>${points.map(([cls, text = '']) => `<span class="sp-pt ${cls}">${text}</span>`).join('')}</div>`;
