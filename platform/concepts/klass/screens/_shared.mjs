/** Общее для экранов «Соток». Файл с «_» — не экран. */
export const THEME = 'ok-light';
export const TABS = [
  { id: 'feed', label: 'Лента', icon: 'house' },
  { id: 'discussions', label: 'Обсуждения', icon: 'message-circle' },
  { id: 'album', label: 'Альбом', icon: 'images' },
  { id: 'records', label: 'Записи', icon: 'audio-lines' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
/** Сосед: инициалы вместо фото, участок в подписи. */
export const who = (ui, initial, name, sub, action = {}) => ui.row({ lead: ui.avatar(initial), title: name, sub, ...action });
