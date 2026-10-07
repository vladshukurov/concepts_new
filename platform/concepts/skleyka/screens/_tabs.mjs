/** Таб-бар «Встыка»: общий для трёх корней. Файл с «_» — не экран. */
export const TABS = [
  { id: 'projects', label: 'Главная', icon: 'house' },
  { id: 'archive', label: 'Фильмы', icon: 'film' },
  { id: 'settings', label: 'Профиль', icon: 'user' },
];

/* Свёрнутый плеер: фильм продолжает играть над таб-баром «Главной» и «Фильмов» */
export const MINI = '<div class="ui-mini"><button class="ui-mini-main" data-go="viewer" aria-label="Открыть плеер"><span class="ui-mini-face m3"></span><span class="ui-mini-text"><strong>Выходные у озера</strong><span>Ужин · 0:41 из 3:24</span></span></button><button class="ui-icon-btn" data-toast="Пауза на 0:41" aria-label="Пауза"><svg class="ui-fill-ico"><use href="#i-pause"/></svg></button><span class="ui-mini-bar"><i class="is-20"></i></span></div>';
