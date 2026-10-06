/** Общее для экранов «Сбора». Файл с «_» — не экран, сборка его пропускает. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'chats', label: 'Чаты', icon: 'message-circle' },
  { id: 'trips', label: 'Поездки', icon: 'route' },
  { id: 'calls', label: 'Звонки', icon: 'phone' },
  { id: 'settings', label: 'Настройки', icon: 'settings' },
];

/* Кружок — видеосообщение: кадр в круге и длительность. Кадр — суть сообщения, поэтому .ph */
export const circle = (dur, label) => `<button class="sb-circle ph" data-toast="Кружок ${dur}" aria-label="${label}"><span class="sb-circle-dur">${dur}</span></button>`;

/* Карта, нарисованная кодом: улицы, Казанка и точки людей. Данные, а не картинка */
export const map = ({ points = [], className = '' } = {}) => `<div class="sb-map ${className}" aria-hidden="true"><i class="sb-river"></i><i class="sb-street s1"></i><i class="sb-street s2"></i><i class="sb-street s3"></i><i class="sb-street s4"></i><i class="sb-block b1"></i><i class="sb-block b2"></i><i class="sb-block b3"></i>${points.map(([cls, text = '']) => `<span class="sb-pt ${cls}">${text}</span>`).join('')}</div>`;
