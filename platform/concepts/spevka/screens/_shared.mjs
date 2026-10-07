/** Общее для экранов «В унисон». Файл с «_» — не экран, сборка его пропускает. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'contacts', label: 'Контакты', icon: 'circle-user' },
  { id: 'calls', label: 'Звонки', icon: 'phone' },
  { id: 'chats', label: 'Чаты', icon: 'message-circle' },
  { id: 'repertoire', label: 'Репертуар', icon: 'audio-lines' },
  { id: 'settings', label: 'Настройки', icon: 'settings' },
];

/* Шкала «кто пришёл»: 32 клетки, пришедшие закрашены; клетка Оли загорается после отметки по сети зала */
export const roll = (came, total, cls = 'sp-roll-bar') => `<span class="${cls}" aria-hidden="true">${Array.from({ length: total }, (_, i) => (i < came ? '<i class="is-on"></i>' : i === came ? '<i><b class="perm-hidden" data-show-granted="wifiinfo"></b></i>' : '<i></i>')).join('')}</span>`;

/* Счётчик пришедших: до отметки 23, после — 24 */
export const came = (a, b) => `<span data-hide-granted="wifiinfo">${a}</span><span class="perm-hidden" data-show-granted="wifiinfo">${b}</span>`;

/* Карта, нарисованная кодом: улицы, река и точки людей у ДК. Данные, а не картинка */
export const map = ({ points = [], className = '' } = {}) => `<div class="sp-map ${className}" aria-hidden="true"><i class="sp-river"></i><i class="sp-street s1"></i><i class="sp-street s2"></i><i class="sp-street s3"></i><i class="sp-street s4"></i><i class="sp-block b1"></i><i class="sp-block b2"></i><i class="sp-block b3"></i>${points.map(([cls, text = '']) => `<span class="sp-pt ${cls}">${text}</span>`).join('')}</div>`;
