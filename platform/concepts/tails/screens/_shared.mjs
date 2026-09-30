/** Общее для экранов «Хвостов». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'home', label: 'Главная', icon: 'house' },
  { id: 'nearby', label: 'Рядом', icon: 'map-pin' },
  { id: 'create', label: 'Создать', icon: 'plus' },
  { id: 'vaccine', label: 'Здоровье', icon: 'stethoscope' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
/* Фото питомцев: Трюфель — ретривер, Мята — кошка, щенки Локи, Барни — лабрадор владельца */
export const PET = { truffle: 'tl-p1', mint: 'tl-p2', loki: 'tl-p3', barni: 'tl-p4' };
export const faces = (...list) => `<span class="tl-faces">${list.map((p) => `<i class="${p}"></i>`).join('')}</span>`;
