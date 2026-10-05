# Архитектура

Основные сущности: автор, публикация, рецепт, проверка, совместная готовка, разговор и сообщение. Публикация принадлежит автору и может ссылаться на рецепт; проверка принадлежит рецепту; готовка использует зафиксированную версию шагов; разговор кухни всегда связан с готовкой и её текущим шагом.

Медиа хранится в управляемом Storage, данные — в Firestore с security rules, вход — через SDK провайдера и Keychain. Сообщения доставляются обычным push, именные Communication Notifications включаются в общих настройках, а телефон в топбаре кухни запускает настоящий групповой вызов через PushKit и CallKit. При отказе в микрофоне или VoIP вопрос остаётся доступен текстом.

## Модель домена

<!-- @generated:domain-model -->
| Сущность | Что это | Состояния | Экраны |
|---|---|---|---|
| Автор | человек, который готовит и публикует; фото нет — инициалы | не подписаны → подписаны | `profile`, `following`, `matches`, `discover` |
| Публикация | блюдо с текстом и карточкой рецепта | черновик → опубликована | `feed`, `post`, `compose` |
| Рецепт | проверенный рецепт: ингредиенты, замены, шаги | сохранён → приготовлен → проверен | `recipe`, `recipes` |
| Совместная готовка | ужин по шагам в общем темпе с ведущей | скоро → идёт → завершена | `cookings`, `cookalong`, `steps`, `kitchen` |
| Шаг | этап готовки с таймером | впереди → сейчас → готов | `steps`, `kitchen`, `audio` |
| Диалог | чат готовки или личная переписка с автором | есть непрочитанные → прочитан | `chats`, `conversation`, `direct-zhanna`, `direct-timur`, `call` |
<!-- @end -->

## Сила доступов

<!-- @generated:access-strength -->
Сильных доступов: **14 из 20** (`npm run access -- podacha`).

| Ключ | Жест | Экран | Оценка |
|---|---|---|---|
| `camera` ⚓ | «Снять блюдо» | `compose` | заслужен |
| `mic` | «Снять с пояснением» или голосовое в чате | `camera` | заслужен |
| `photos` ⚓ | «Из медиатеки» | `compose` | заслужен |
| `photosadd` | «Сохранить карточку в Фото» | `post` | после разрешения на экране ничего не меняется |
| `location` ⚓ | «Место» | `compose` | заслужен |
| `contacts` ⚓ | «Найти знакомых» | `following` | заслужен |
| `calendar` | «Добавить в календарь» | `cookalong` | после разрешения на экране ничего не меняется |
| `push` ⚓ | «Напомнить за 15 минут» | `cookalong` | заслужен |
| `tracking` ⚓ | «Настроить рекомендации» | `feed` | после разрешения на экране ничего не меняется |
| `audio` | «Слушать с погашенным экраном» | `audio` | после разрешения на экране ничего не меняется |
| `localnetwork` ⚓ | «Найти экран на кухне» | `kitchen` | заслужен |
| `wifiinfo` | «Кухня · Apple TV» | `cast` | после разрешения на экране ничего не меняется |
| `remotenotif` | Без жеста — фоновый режим | `notif` | заслужен |
| `fetch` | Без жеста — фоновый режим | `feed` | заслужен |
| `processing` | Без жеста — фоновый режим | `recipe` | заслужен |
| `bgtask` | Без жеста — фоновый режим | `cookalong` | заслужен |
| `keychain` | Без жеста — фоновый режим | `cast` | заслужен |
| `commnotif` | «Сообщения кухни» в настройках | `settings` | заслужен |
| `voip` | «Позвонить» в шапке чата кухни | `conversation` | заслужен |
| `speech` | «Надиктовать заметку» | `steps` | после разрешения на экране ничего не меняется |
<!-- @end -->

## Сценарные прототипы

Полный обзор дополняют девять независимых путей: вход, публикация блюда, поиск, совместная готовка, сохранение рецепта, кухонный экран, сообщения, социальные связи и настройки доступов. Каждый прототип начинается в точке реального намерения пользователя, содержит только нужные экраны и ведёт собственный журнал разрешений.

## Отказы и приватность

Камера заменяется выбором готового фото, место — ручным вводом, распознавание шага — экранными контролами, кухонный экран — телефоном, а голосовые и звонок — обычным сообщением. Контакты сопоставляются только после явного действия; рекламный трекинг, фоновые режимы и именные уведомления включаются в настройках, а не запрашиваются при старте.

<!-- @generated:ia-tree -->
```
Вход по номеру (phone) — старт, без таб-бара · открывается: старт
    ├─ Пароль (password) — push, без таб-бара · открывается: «Далее»
    │   └─ Аккаунт (account) — push, без таб-бара · открывается: «Профиль и аккаунт»
    │       └─ Удаление аккаунта (deleteaccount) — push, без таб-бара · открывается: «Удалить аккаунт»
    └─ Создать аккаунт (register) — push, без таб-бара · открывается: «Создать аккаунт»
        └─ Пароль нового аккаунта (registerpassword) — push, без таб-бара · открывается: «Далее»

Лента (feed) — tab (root) · открывается: «Продолжить без аккаунта», «Войти» … · tracking, fetch
    ├─ Публикация (post) — push · открывается: «Жанна», «Тот самый чечевичный суп, но без сливок: за…» …, «Снять с пояснением» (camera + mic) · photosadd
    ├─ Поиск (discover) — push · открывается: «Поиск», «Быстро» …
    ├─ Новая публикация (compose) — modal · открывается: «Что получилось сегодня?», «Моё» …, «Добавить 2 фото» (photos), «Зелёный базар», «Кофейня «Дом»» … · camera, photos, location
    │   ├─ Снять блюдо (camera) — fullscreen · открывается: «Снять блюдо», «Камера», «Снять блюдо» (camera) · mic
    │   ├─ Медиатека (picker) — system · открывается: «Фото», «Из медиатеки» (photos)
    │   └─ Место (place) — push · открывается: «Место» (location)
    └─ Уведомления (notif) — push · открывается: «Уведомления» · remotenotif

Готовим вместе (cookings) — tab (root) · открывается: «Амина Рахимова», «Готовим сегодня»
    └─ Совместная готовка (cookalong) — push · открывается: «Вместе 19:00», «Ужин из одной сковороды» … · calendar, push, bgtask
        └─ Шаги готовки (steps) — push · открывается: «Открыть все шаги», «Шаги» · speech
            └─ Кухонный экран (kitchen) — fullscreen · открывается: «Кухонный экран», «Шаг готов» …, «Показать шаги» · localnetwork
                └─ Выбор экрана (cast) — modal · открывается: «Найти экран на кухне» (localnetwork) · wifiinfo, keychain

Рецепты (recipes) — tab (root) · открывается: «Выпечка», «Мои проверки»
    └─ Проверенный рецепт (recipe) — push · открывается: «Рецепт: Чечевичный суп», «Рецепт: Хачапури на сковороде» … · processing

Профиль автора (profile) — tab (root) · открывается: «Мои», «Скопировать ссылку»
    ├─ Подписки (following) — push · открывается: «Подписки», «Новое сообщение» · contacts
    │   └─ Знакомые (matches) — push · открывается: «Найти знакомых» (contacts)
    │       └─ Приглашение (invite) — system · открывается: «Пригласить», «Пригласить по ссылке»
    └─ Настройки (settings) — push · открывается: «Настройки» · commnotif
        ├─ Рецепт вслух (audio) — fullscreen · открывается: «Рецепт вслух» · audio
        └─ Конфиденциальность (privacy) — push · открывается: «Конфиденциальность»

Чаты (chats) — tab (root) · открывается: вкладка таб-бара
    ├─ Разговор кухни (conversation) — push · открывается: «Чат кухни», «Чат кухни · 4 новых» … · voip
    │   └─ Звонок кухни (call) — fullscreen · открывается: «Позвонить» (voip)
    ├─ Жанна Ким (direct-zhanna) — push · открывается: «Жанна Ким», «Жанна проверила вашу замену» …
    └─ Тимур Садыков (direct-timur) — push · открывается: «Тимур», «Тимур Садыков» …
```
<!-- @end -->

<!-- @generated:transitions -->
| Экран | Что можно сделать | Ведёт на | Доступ | Тип перехода |
|---|---|---|---|---|
| `phone` | «Далее» | `password` | — | переход |
| `phone` | «Создать аккаунт» | `register` | — | переход |
| `phone` | «Продолжить без аккаунта» | `feed` | — | переход |
| `password` | «Назад» | `phone` | — | возврат по IA |
| `password` | «Войти» | `feed` | — | переход |
| `register` | «Назад» | `phone` | — | возврат по IA |
| `register` | «Далее» | `registerpassword` | — | переход |
| `register` | «Уже есть аккаунт? Войти» | `phone` | — | переход |
| `registerpassword` | «Назад» | `register` | — | возврат по IA |
| `registerpassword` | «Создать аккаунт» | `feed` | — | переход |
| `account` | «Назад» | `password` | — | возврат по IA |
| `account` | «Выйти» | `phone` | — | переход |
| `account` | «Удалить аккаунт» | `deleteaccount` | — | переход |
| `deleteaccount` | «Назад» | `account` | — | возврат по IA |
| `deleteaccount` | «Удалить аккаунт» | `phone` | — | переход |
| `feed` | «Поиск» | `discover` | — | переход |
| `feed` | «Уведомления» | `notif` | — | переход |
| `feed` | «Что получилось сегодня?», «Моё» | `compose` | — | переход |
| `feed` | «Снять блюдо» | `camera` | — | переход |
| `feed` | «Жанна», «Тот самый чечевичный суп, но без сливок: за…» … | `post` | — | переход |
| `feed` | «Вместе 19:00» | `cookalong` | — | переход |
| `feed` | «Тимур», «Тимур Садыков» | `direct-timur` | — | переход |
| `feed` | «Жанна Ким» | `direct-zhanna` | — | переход |
| `feed` | «Рецепт: Чечевичный суп», «Рецепт: Хачапури на сковороде» | `recipe` | — | переход |
| `feed` | «Настроить рекомендации» | `feed` | `NSUserTrackingUsageDescription` | доступ разрешён |
| `post` | «Назад» | `feed` | — | возврат по IA |
| `post` | «Жанна Ким» | `direct-zhanna` | — | переход |
| `post` | «Рецепт: Чечевичный суп», «Открыть проверенный рецепт» | `recipe` | — | переход |
| `post` | «Сохранить карточку в Фото» | `post` | `NSPhotoLibraryAddUsageDescription` | доступ разрешён |
| `post` | «Камера» | `camera` | — | переход |
| `post` | «Фото» | `picker` | — | переход |
| `discover` | «Назад» | `feed` | — | возврат по IA |
| `discover` | «Амина Рахимова», «Готовим сегодня» | `cookings` | — | переход |
| `discover` | «Жанна Ким» | `direct-zhanna` | — | переход |
| `discover` | «Ужин за 20 минут» | `post` | — | переход |
| `compose` | «Закрыть» | `feed` | — | возврат по IA |
| `compose` | «Опубликовать» | `post` | — | переход |
| `compose` | «Снять блюдо» | `camera` | `NSCameraUsageDescription` | доступ разрешён |
| `compose` | «Снять блюдо» | `compose` | `NSCameraUsageDescription` | отказ → fallback |
| `compose` | «Из медиатеки» | `picker` | `NSPhotoLibraryUsageDescription` | доступ разрешён |
| `compose` | «Из медиатеки» | `compose` | `NSPhotoLibraryUsageDescription` | отказ → fallback |
| `compose` | «Место» | `place` | `NSLocationWhenInUseUsageDescription` | доступ разрешён |
| `compose` | «Проверенный рецепт» | `recipe` | — | переход |
| `camera` | «Закрыть» | `compose` | — | возврат по IA |
| `camera` | «Снять с пояснением» | `post` | `NSCameraUsageDescription + NSMicrophoneUsageDescription` | доступ разрешён |
| `camera` | «Снять с пояснением» | `camera` | `NSCameraUsageDescription + NSMicrophoneUsageDescription` | отказ → fallback |
| `picker` | «Закрыть» | `compose` | — | возврат по IA |
| `picker` | «Добавить 2 фото» | `compose` | `NSPhotoLibraryUsageDescription` | доступ разрешён |
| `place` | «Назад» | `compose` | — | возврат по IA |
| `place` | «Зелёный базар», «Кофейня «Дом»» … | `compose` | — | подтверждение |
| `cookings` | «Уведомления» | `notif` | — | переход |
| `cookings` | «Сегодня» | `cookings` | — | переход |
| `cookings` | «Выпечка» | `recipes` | — | переход |
| `cookings` | «Мои» | `profile` | — | переход |
| `cookings` | «Ужин из одной сковороды», «Хлеб без замеса» … | `cookalong` | — | переход |
| `cookings` | «Создать готовку» | `compose` | — | переход |
| `cookalong` | «Назад» | `cookings` | — | возврат по IA |
| `cookalong` | «Чат кухни», «Чат кухни · 4 новых» | `conversation` | — | переход |
| `cookalong` | «Открыть все шаги» | `steps` | — | переход |
| `cookalong` | «Добавить в календарь» | `cookalong` | `NSCalendarsWriteOnlyAccessUsageDescription` | доступ разрешён |
| `cookalong` | «Напомнить за 15 минут» | `cookalong` | `aps-environment` | доступ разрешён |
| `steps` | «Назад» | `cookalong` | — | возврат по IA |
| `steps` | «Кухонный экран», «Шаг готов» | `kitchen` | — | переход |
| `steps` | «Надиктовать заметку» | `steps` | `NSSpeechRecognitionUsageDescription` | доступ разрешён |
| `recipes` | «Поиск», «Быстро» … | `discover` | — | переход |
| `recipes` | «Все» | `recipes` | — | переход |
| `recipes` | «Чечевичный суп», «Хачапури на сковороде» … | `recipe` | — | переход |
| `recipe` | «Назад» | `recipes` | — | возврат по IA |
| `recipe` | «Готовить по шагам» | `cookalong` | — | переход |
| `audio` | «Свернуть» | `settings` | — | возврат по IA |
| `audio` | «Слушать с погашенным экраном» | `audio` | `UIBackgroundModes: audio` | entitlement, без alert |
| `kitchen` | «Назад» | `steps` | — | возврат по IA |
| `kitchen` | «Рецепт вслух» | `audio` | — | переход |
| `kitchen` | «Найти экран на кухне» | `cast` | `NSLocalNetworkUsageDescription` | доступ разрешён |
| `kitchen` | «Найти экран на кухне» | `kitchen` | `NSLocalNetworkUsageDescription` | отказ → fallback |
| `cast` | «Закрыть» | `kitchen` | — | возврат по IA |
| `cast` | «Кухня · Apple TV» | `cast` | `Access WiFi Information` | entitlement, без alert |
| `cast` | «Показать шаги» | `kitchen` | — | подтверждение |
| `profile` | «Настройки» | `settings` | — | переход |
| `profile` | «Опубликовать» | `compose` | — | переход |
| `profile` | «Пригласить» | `invite` | — | переход |
| `profile` | «Подписки» | `following` | — | переход |
| `profile` | «Мои проверки» | `recipes` | — | переход |
| `profile` | «Саша Левина» | `profile` | — | переход |
| `profile` | «Пирог с грушей на цельнозерновой муке. Саха…» | `post` | — | переход |
| `profile` | «Рецепт: Грушевый пирог» | `recipe` | — | переход |
| `following` | «Назад» | `profile` | — | возврат по IA |
| `following` | «Жанна Ким» | `direct-zhanna` | — | переход |
| `following` | «Тимур Садыков» | `direct-timur` | — | переход |
| `following` | «Амина Рахимова» | `cookalong` | — | переход |
| `following` | «Найти знакомых» | `matches` | `NSContactsUsageDescription` | доступ разрешён |
| `following` | «Найти знакомых» | `following` | `NSContactsUsageDescription` | отказ → fallback |
| `matches` | «Назад» | `following` | — | возврат по IA |
| `matches` | «Пригласить по ссылке» | `invite` | — | переход |
| `notif` | «Назад» | `feed` | — | возврат по IA |
| `notif` | «Жанна проверила вашу замену» | `direct-zhanna` | — | переход |
| `notif` | «Ужин из одной сковороды» | `cookalong` | — | переход |
| `notif` | «Ваш пирог повторили 6 раз» | `post` | — | переход |
| `chats` | «Новое сообщение» | `following` | — | переход |
| `chats` | «Диалог: Ужин из одной сковороды» | `conversation` | — | переход |
| `chats` | «Диалог: Жанна Ким» | `direct-zhanna` | — | переход |
| `chats` | «Диалог: Тимур Садыков» | `direct-timur` | — | переход |
| `conversation` | «Назад» | `chats` | — | возврат по IA |
| `conversation` | «Позвонить» | `call` | `UIBackgroundModes: voip` | entitlement, без alert |
| `conversation` | «Обжарьте лук до прозрачности» | `cookalong` | — | переход |
| `conversation` | «Вложение» | `conversation` | `NSPhotoLibraryUsageDescription` | доступ разрешён |
| `conversation` | «Голосовое сообщение» | `conversation` | `NSMicrophoneUsageDescription` | доступ разрешён |
| `call` | «Шаги» | `steps` | — | переход |
| `call` | «Завершить» | `conversation` | — | возврат по IA |
| `direct-zhanna` | «Назад» | `chats` | — | возврат по IA |
| `direct-zhanna` | «Позвонить» | `call` | `UIBackgroundModes: voip` | entitlement, без alert |
| `direct-zhanna` | «Чечевичный суп» | `recipe` | — | переход |
| `direct-zhanna` | «Вложение» | `direct-zhanna` | `NSPhotoLibraryUsageDescription` | доступ разрешён |
| `direct-zhanna` | «Голосовое сообщение» | `direct-zhanna` | `NSMicrophoneUsageDescription` | доступ разрешён |
| `direct-timur` | «Назад» | `chats` | — | возврат по IA |
| `direct-timur` | «Позвонить» | `call` | `UIBackgroundModes: voip` | entitlement, без alert |
| `direct-timur` | «Хачапури на сковороде» | `recipe` | — | переход |
| `direct-timur` | «Вложение» | `direct-timur` | `NSPhotoLibraryUsageDescription` | доступ разрешён |
| `direct-timur` | «Голосовое сообщение» | `direct-timur` | `NSMicrophoneUsageDescription` | доступ разрешён |
| `settings` | «Назад» | `profile` | — | возврат по IA |
| `settings` | «Профиль и аккаунт» | `account` | — | переход |
| `settings` | «Конфиденциальность» | `privacy` | — | переход |
| `settings` | «Напоминания» | `settings` | `aps-environment` | доступ разрешён |
| `settings` | «Сообщения кухни» | `settings` | `com.apple.developer.usernotifications.communication` | entitlement, без alert |
| `settings` | «Рецепт вслух» | `audio` | — | переход |
| `settings` | «Общий экран» | `kitchen` | — | переход |
| `privacy` | «Назад» | `settings` | — | возврат по IA |
| `privacy` | «Персональные рекомендации» | `privacy` | `NSUserTrackingUsageDescription` | доступ разрешён |
| `invite` | «Скопировать ссылку» | `profile` | — | подтверждение |
<!-- @end -->
