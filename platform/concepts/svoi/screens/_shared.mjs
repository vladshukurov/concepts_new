/** Общее для экранов «Все дома». Файл с «_» — не экран, сборка его пропускает. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'contacts', label: 'Контакты', icon: 'circle-user' },
  { id: 'calls', label: 'Звонки', icon: 'phone' },
  { id: 'chats', label: 'Чаты', icon: 'message-circle' },
  { id: 'home', label: 'Дом', icon: 'house' },
  { id: 'settings', label: 'Настройки', icon: 'settings' },
];

/* Карта, нарисованная кодом: улицы, река и точки. Данные, а не картинка */
export const map = ({ points = [], className = '' } = {}) => `<div class="sv-map ${className}" aria-hidden="true"><i class="sv-river"></i><i class="sv-street s1"></i><i class="sv-street s2"></i><i class="sv-street s3"></i><i class="sv-street s4"></i><i class="sv-block b1"></i><i class="sv-block b2"></i><i class="sv-block b3"></i>${points.map(([cls, text = '']) => `<span class="sv-pt ${cls}">${text}</span>`).join('')}</div>`;

/* Карточка домашней сети: в пузыре чата и на экране сети */
export const netCard = (ui, { ssid, sub, go }) => `<${go ? 'button' : 'span'} class="sv-net"${go ? ` data-go="${go}"` : ''}><span class="sv-net-ico">${ui.icon('wifi')}</span><span><strong>${ssid}</strong><span>${sub}</span></span></${go ? 'button' : 'span'}>`;
