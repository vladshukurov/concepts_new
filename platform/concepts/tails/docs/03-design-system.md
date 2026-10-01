# Хвосты — дизайн-система

Мимикрия ВКонтакте: лента питомцев, «Рядом», мессенджер, здоровье и профиль. Своё у «Хвостов» — карточка питомца с прививками, прогулка рядом и запись к ветеринару. Фото назначены питомцам, а не экранам.

Оболочка, кегли, цвета и компоненты — из ядра (`kernel/base.css`, `kernel/components.mjs`). Концепт добавляет только свои доменные блоки в `styles.css` и не перекрашивает компоненты ядра. Правила интерфейса — в корневом `CLAUDE.md`: без капса и точек в конце фраз, вторичная кнопка — мягкий акцент, ни одного серого куска на белом, свой блок — только внутри секции.

## Тема и токены

<!-- @generated:theme-tokens -->
Тема `vk-light`, интерфейс набран системным SF Pro. Значения — из `kernel/base.css`, в концепте не переопределяются.

| Токен | Значение | Роль |
|---|---|---|
| `--ui-bg` | `#f2f3f5` | фон страницы |
| `--ui-card` | `#fff` | секция и карточка |
| `--ui-card-2` | `#ebedf0` | поле и плитка внутри секции |
| `--ui-text` | `#000` | основной текст |
| `--ui-text-2` | `#5f6b78` | второстепенный текст |
| `--ui-accent` | `#0077ff` | акцент: главная кнопка, активная вкладка |
| `--ui-link` | `#0067db` | акцентный текст и значки |
| `--ui-accent-soft` | `rgba(0,119,255,.1)` | вторичная кнопка, значок строки, аватар без фото |
| `--ui-danger` | `#c42b2b` | ошибка и удаление |
| `--ui-line` | `#d7d8d9` | разделитель и обводка вложения |
| `--ui-ph` | `#e1e3e6` | заглушка кадра |
| `--ui-page` | `600 24px/30px` | заголовок корня вкладки |
| `--ui-h1` | `600 20px/26px` | заголовок экрана |
| `--ui-h2` | `600 18px/24px` | заголовок секции |
| `--ui-row-h` | `64px` | высота строки |
<!-- @end -->

## Компоненты ядра

<!-- @generated:kernel-components -->
Экраны собраны из компонентов `kernel/components.mjs`: `row` ×53, `section` ×46, `cell` ×33, `button` ×21, `list` ×19, `denied` ×15, `nav` ×14, `iconButton` ×14, `group` ×13, `actions` ×9, `granted` ×8, `leadIcon` ×7, `bubble` ×6, `dialog` ×5, `tabBar` ×5, `largeTitle` ×4, `foot` ×4, `search` ×3, `textButton` ×3, `post` ×3, `progress` ×2, `times` ×2, `day` ×2, `stats` ×2, `callView` ×1, `chatNav` ×1, `chat` ×1, `voice` ×1, `composer` ×1, `top` ×1, `wordmark` ×1, `stories` ×1.
<!-- @end -->

## Свои компоненты

<!-- @generated:domain-components -->
| Компонент | Классы |
|---|---|
| Фото питомцев: один кадр — одна кличка | `.tl-p1` `.tl-p2` `.tl-p3` `.tl-p4` |
| Главная: вход в прогулки рядом — одна строка под историями | `.tl-nearby` `.tl-nearby-ico` |
| Вложение в пост: карточка курса | `.tl-attach` |
| Карточка прогулки: название, данные, кто идёт | `.tl-walk` `.tl-walk-head` `.tl-walk-time` `.tl-walk-sub` `.tl-walk-tags` `.tl-faces` |
| Прогулка | `.tl-walk-page` |
| Профиль питомца: фото во всю ширину | `.tl-hero` `.tl-hero-nav` `.tl-pet-head` `.tl-match` |
| Галерея публикаций | `.tl-gallery` |
| Профиль пользователя | `.tl-me` `.tl-me-ava` `.tl-me-block` |
| Новая запись | `.tl-composer` `.tl-composer-who` `.tl-composer-field` `.tl-attach-row` `.tl-attach-btn` |
| Камера и выбор фото — системные поверхности | `.tl-camera` `.tl-camera-view` `.tl-camera-shade` `.tl-shutter` `.tl-picker` |
| Ветпаспорт | `.tl-vet-head` `.tl-appt` `.tl-appt-when` `.tl-days` `.tl-date` |
| Расшифровка наблюдения | `.tl-note-head` `.tl-wave` `.tl-ts` |
| Курс | `.tl-course-cover` `.tl-course-copy` `.tl-player` `.tl-controls` |
| QR сети площадки | `.tl-qr` `.tl-qr-code` |
| Поделиться в «Хвосты» — лист расширения | `.tl-share-note` |
| Автозаполнение в Safari — чужая страница, свой вид | `.tl-web` `.tl-web-bar` `.tl-web-page` `.tl-web-field` `.tl-quicktype` |
| Системные поверхности iOS: локскрин и экран «Домой» | `.tl-lock` `.tl-lock-time` `.tl-glass` `.tl-glass-top` `.tl-glass-controls` `.tl-notif` |
| Доли прогресса | `.tl-w-46` `.tl-qr-actions` |
| Мессенджер: фото и карточка прогулки внутри сообщения | `.tl-chat-photo` `.tl-walk` `.tl-call` |
<!-- @end -->

## Актуальная навигация

<!-- @generated:navigation -->
Главная · Рядом · Мессенджер · Здоровье · Профиль
<!-- @end -->
