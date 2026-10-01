/**
 * Примеры для сторибука ядра (npm run storybook → dist/storybook.html).
 * Один пример — один типичный вызов компонента с правдоподобными данными.
 * Новый компонент в components.mjs без примера здесь — сторибук это покажет.
 */
export const groups = [
  { title: 'Шапки', items: [
    { name: 'top', note: 'Корень вкладки: бренд или профиль слева, иконки справа', render: (ui) => ui.top(ui.wordmark({ name: 'Образы', glyph: 'shirt' }), [ui.iconButton({ icon: 'search', label: 'Поиск' }), ui.iconButton({ icon: 'plus', label: 'Новая публикация' })]) },
    { name: 'largeTitle', note: 'Корень вкладки с заголовком 24/30', render: (ui) => ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'square-pen', label: 'Новое сообщение' })) },
    { name: 'nav', note: 'Вложенный экран: назад · заголовок · действие', render: (ui) => ui.nav({ title: 'Публикация', trailing: ui.iconButton({ icon: 'share', label: 'Поделиться' }) }) },
    { name: 'me', note: 'Профиль в шапке', render: (ui) => ui.top(ui.me({ name: 'Марина', initial: 'М' })) },
  ] },
  { title: 'Кнопки', items: [
    { name: 'button', note: 'primary · secondary · tertiary; l 44 и m 36', render: (ui) => ui.actions([ui.button({ label: 'Ждать результат', block: true }), ui.button({ label: 'Показать ведущей', icon: 'message-circle', variant: 'secondary', block: true }), ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true })]) },
    { name: 'actions row', note: 'Две кнопки в ряд', render: (ui) => ui.actions([ui.button({ label: 'Редактировать', variant: 'secondary' }), ui.button({ label: 'Поделиться', variant: 'secondary' })], { row: true }) },
    { name: 'iconButton · textButton · play', note: 'Иконка 24 в зоне 44; текстовая кнопка шапки; play трёх размеров', render: (ui) => `<div class="sb-row">${ui.iconButton({ icon: 'heart', label: 'Нравится' })}${ui.iconButton({ icon: 'plus', look: 'fill', label: 'Добавить' })}${ui.textButton({ label: 'Готово', strong: true })}${ui.play({ size: 's', label: 'Играть' })}${ui.play({ label: 'Играть' })}${ui.squareButton({ icon: 'download', label: 'Скачать' })}</div>` },
  ] },
  { title: 'Списки и секции', items: [
    { name: 'section · list · row', note: 'Строка 64: значок, обложка или аватар · две строки · хвост', render: (ui) => ui.section({ title: 'На месте', more: { label: 'Все' }, children: ui.list([
      ui.row({ lead: ui.leadIcon('map-pin', { accent: true }), title: 'Отметиться на свопе', sub: 'После входа во двор Бутылки', go: 'x' }),
      ui.row({ lead: ui.leadIcon('', { text: '19:30' }), title: 'Разбор гардероба', sub: 'Рубинштейна · 1,2 км', end: { badge: 'идёт' } }),
      ui.row({ lead: ui.avatar('ЛС'), title: 'Лера Савина', sub: '18 общих подписок', end: { value: 'Написать', toast: 'x', label: 'Написать' }, go: 'x' }),
      ui.row({ thumb: 'ph', title: 'Чечевичный суп', sub: '35 минут', duration: '2:40' }),
    ]) }) },
    { name: 'group · cell', note: 'Настройки: белые группы на сером, свитч, значение, шеврон', render: (ui) => ui.section({ children: ui.group({ label: 'Уведомления', cells: [
      ui.cell({ icon: 'bell', title: 'Подписки', sub: '12 авторов', toggle: true }),
      ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Без подбора', go: 'x' }),
      ui.cell({ icon: 'scan-face', title: 'Замок Face ID', toggle: false }),
    ] }) }) },
    { name: 'stats', note: 'Счётчики профиля', render: (ui) => ui.section({ children: ui.stats([['86', 'публикаций'], ['312', 'подписчиков'], ['148', 'подписок']]) }) },
    { name: 'search · chips · segments', note: 'Поиск; чипсы — переходы; сегменты внутри экрана', render: (ui) => ui.section({ children: [ui.search({ placeholder: 'Поиск по сообщениям' }), '<div class="sb-gap"></div>', ui.chips([{ label: 'Все', on: true }, { label: 'Быстро' }, { label: 'Выпечка' }]), '<div class="sb-gap"></div>', ui.segments([{ label: 'Для вас', on: true }, { label: 'Обновления' }])] }) },
  ] },
  { title: 'Доступы', items: [
    { name: 'granted · denied · note', note: 'Результат после разрешения, fallback при отказе, нейтральная подсказка', render: (ui) => ui.section({ children: [
      ui.granted('calendar', 'Своп в Календаре · напомним за час').replace('perm-hidden ', ''),
      ui.denied('calendar', 'Дата остаётся в карточке свопа').replace('perm-hidden', ''),
      ui.note('Сеть площадки — код на стойке у входа'),
      ui.foot('Сверено сегодня в 9:12 · 214 номеров'),
    ] }) },
  ] },
  { title: 'Соцсеть', items: [
    { name: 'stories', note: 'Фото, инициалы или значок; просмотренные — серое кольцо', render: (ui) => ui.stories([{ label: 'История', icon: 'plus', seen: true }, { label: 'Жанна', initial: 'ЖК' }, { label: 'Вместе', icon: 'chef-hat' }, { label: 'Тимур', initial: 'ТС', seen: true }]) },
    { name: 'composerPrompt', note: '«Что нового?» над лентой', render: (ui) => ui.composerPrompt({ initial: 'СЛ', placeholder: 'Что получилось сегодня?', trailing: ui.iconButton({ icon: 'camera', label: 'Снять' }) }) },
    { name: 'post', note: 'Пост: автор, текст, вложение, реакции. Без фото — без пустого кадра', render: (ui) => ui.post({ author: { initial: 'ЖК', name: 'Жанна Ким', meta: 'сегодня, 12:14 · Алматы' }, text: 'Тот самый чечевичный суп, но без сливок', attach: ui.list([ui.row({ lead: ui.leadIcon('utensils'), title: 'Чечевичный суп', sub: '35 минут · проверили 34 раза' })]), likes: 126, comments: 18, shares: 9, views: '4,1K', menu: { toast: 'x' } }) },
  ] },
  { title: 'Мессенджер', items: [
    { name: 'dialog', note: 'Строка диалога: онлайн, непрочитанные, «Вы:»', render: (ui) => [ui.dialog({ initial: 'ЛС', name: 'Лера Савина', text: 'Покажете жакет?', time: '9:36', unread: 2, online: true }), ui.dialog({ initial: 'ТС', name: 'Тимур Садыков', text: 'Рецепт · Хачапури', time: 'пн', you: true })].join('') },
    { name: 'chatNav · chat · bubble · voice · composer', note: 'Чат целиком', render: (ui) => ui.chatNav({ initial: 'ЛС', name: 'Лера Савина', status: 'в сети', call: { toast: 'x' } }) + ui.chat([ui.day('Сегодня'), ui.bubble({ text: 'Вещи принимаю до 10:00', time: '9:20' }), ui.bubble({ out: true, text: 'Вот жакет, размер 46', time: '9:28', read: true }), ui.voice({ dur: '0:09', time: '9:37' })]) + ui.composer({ mic: { toast: 'x' } }) },
    { name: 'callView', note: 'Звонок: аватар, статус, круглые кнопки', render: (ui) => ui.callView({ initial: 'ЛС', name: 'Лера Савина', status: 'Проверка: жакет · 00:48', controls: [{ icon: 'mic-off', label: 'Микрофон' }, { icon: 'video', label: 'Камера' }, { icon: 'phone-off', label: 'Завершить', end: true }] }) },
  ] },
  { title: 'Медиа', items: [
    { name: 'card · shelf', note: 'Карточки ленты Музыки', render: (ui) => ui.shelf([ui.card({ art: 'ph', title: 'Тихий берег', sub: '6 сессий' }), ui.card({ art: 'ph', title: 'Синий час', sub: '12 мин' }), ui.card({ art: 'ph', title: 'Под водой', sub: '5 мин' })]) },
    { name: 'grid', note: 'Сетка карточек 2 в ряд', render: (ui) => ui.grid([ui.card({ art: 'ph', title: 'Сторона А', sub: '7 треков' }), ui.card({ art: 'ph', title: 'Сторона Б', sub: 'откроется после А' })]) },
    { name: 'videoCard', note: 'Видео 16:9 с длительностью и прогрессом', render: (ui) => `<div class="sb-pad">${ui.videoCard({ art: 'ph', duration: '18:40', title: 'Выходные у озера', sub: '38 видео · собрано 58 %' })}</div>` },
    { name: 'tiles', note: 'Плитки-входы 2 в ряд', render: (ui) => ui.tiles([{ title: 'Подборки', sub: '12', art: 'ph' }, { title: 'Скачанное', sub: '3', art: 'ph' }]) },
    { name: 'miniPlayer · tabBar', note: 'Нижняя панель корня', render: (ui) => ui.tabBar({ items: [{ id: 'home', label: 'Главная', icon: 'house' }, { id: 'chats', label: 'Мессенджер', icon: 'message-circle' }, { id: 'profile', label: 'Профиль', icon: 'user' }], active: 'home', mini: ui.miniPlayer({ face: 'ph', title: 'Тихий берег', sub: 'выдох 6 с', open: {}, playAction: { label: 'Играть' }, progressClass: 'sb-w-40' }) }) },
  ] },
];
