/** Общее для экранов «Контура». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'feed', label: 'Лента', icon: 'house' },
  { id: 'walks', label: 'Прогулки', icon: 'route' },
  { id: 'lab', label: 'Лаборатория', icon: 'flask-conical' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
/** Контакт-лист: 36 кадров, отмеченные — рамкой. */
export const sheet = (count = 36, picked = []) =>
  `<div class="kt-sheet-wrap"><div class="kt-sheet">${Array.from({ length: count }, (_, i) => `<i data-n="${i + 1}"${picked.includes(i + 1) ? ' class="is-pick"' : ''}></i>`).join('')}</div></div>`;
export const kit = (...items) => `<div class="kt-kit">${items.map((t) => `<span>${t}</span>`).join('')}</div>`;
export const chain = (steps) => `<div class="kt-chain">${steps.map(([t, s, state]) => `<div class="kt-step${state ? ` is-${state}` : ''}"><b>${t}</b><span>${s}</span></div>`).join('')}</div>`;
