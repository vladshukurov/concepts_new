/** Общее для экранов «В курсе». Файл с «_» — не экран, сборка его пропускает. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'contacts', label: 'Контакты', icon: 'circle-user' },
  { id: 'calls', label: 'Звонки', icon: 'phone' },
  { id: 'chats', label: 'Чаты', icon: 'message-circle' },
  { id: 'office', label: 'Летучка', icon: 'list-checks' },
  { id: 'settings', label: 'Настройки', icon: 'settings' },
];

/* Карта, нарисованная кодом: улицы, Карповка и точки людей. Данные, а не картинка */
export const map = ({ points = [], className = '' } = {}) => `<div class="lt-map ${className}" aria-hidden="true"><i class="lt-river"></i><i class="lt-street s1"></i><i class="lt-street s2"></i><i class="lt-street s3"></i><i class="lt-street s4"></i><i class="lt-block b1"></i><i class="lt-block b2"></i><i class="lt-block b3"></i>${points.map(([cls, text = '']) => `<span class="lt-pt ${cls}">${text}</span>`).join('')}</div>`;

/* Файл в пузыре: значок, имя и размер */
export const file = (ui, title, sub, go) => {
  const inner = `<span class="lt-file-ico">${ui.icon('file-text')}</span><span><strong>${title}</strong><span>${sub}</span></span>`;
  return go ? `<button class="lt-file" data-go="${go}" aria-label="${title}">${inner}</button>` : `<span class="lt-file">${inner}</span>`;
};
