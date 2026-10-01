# Контур — архитектура

Клиент iOS использует BaaS SDK для входа, социального графа и синхронизации. Собственного серверного обработчика нет. Core Data хранит партии и очередь офлайн; FileManager — локальные миниатюры; Keychain — сессию.

## Модель домена

<!-- @generated:domain-model -->
| Сущность | Что это | Состояния | Экраны |
|---|---|---|---|
| Партия | плёнка в проявке: химия, температура, этапы | принята → проявляется → сушится → отсканирована | `batch`, `timer`, `lab` |
| Контакт-лист | лист кадров с номерами и отметками | снят → отмечен → опубликован | `scan`, `post`, `photographer`, `picker` |
| Прогулка | фотопрогулка: маршрут, время, участники | собирается → идёт → прошла | `walks`, `walk`, `route`, `calendar` |
| Передача | отпечатки и материалы от лаборатории человеку | подготовлена → передана → получена | `handoff`, `materials` |
| Окно оборудования | время на сканере или красном свете | свободно → ваше → занято | `lab`, `labnet` |
<!-- @end -->

## Сила доступов

<!-- @generated:access-strength -->
Сильных доступов: **19 из 19** (`npm run access -- kontur`).

| Ключ | Жест | Экран | Оценка |
|---|---|---|---|
| `camera` ⚓ | «Сканировать лист» | `compose` | заслужен |
| `photos` | «Выбрать из Фото» | `compose` | заслужен |
| `mic` ⚓ | «Записать голосом» | `voice` | заслужен |
| `location` ⚓ | «Найти рядом» | `walks` | заслужен |
| `push` | «Разрешить уведомления» | `notifications` | заслужен |
| `remotenotif` | Без жеста — фоновый режим | `batch` | заслужен |
| `fetch` | Без жеста — фоновый режим | `feed` | заслужен |
| `bgtask` | Без жеста — фоновый режим | `feed` | заслужен |
| `appgroups` | «Добавить виджет» | `widget` | заслужен |
| `keychain` | «Открыть прогулку» с виджета | `widget` | заслужен |
| `autofill` | «Вход на сайте» | `security` | заслужен |
| `wifiinfo` | «Проверить сеть» | `labnet` | заслужен |
| `contacts` | «Найти в контактах» | `contacts` | заслужен |
| `calendar` | «Добавить в календарь» | `calendar` | заслужен |
| `faceid` | «Включить Face ID» | `security` | заслужен |
| `tracking` | «Персонализировать предложения» | `ads` | заслужен |
| `speech` ⚓ | «Распознать запись» | `voice` | заслужен |
| `hotspot` | «Подключиться к Lab-Red» | `labnet` | заслужен |
| `commnotif` | Переключатель «Сообщения» в уведомлениях | `notifications` | заслужен |
<!-- @end -->

## Информационная архитектура

<!-- @generated:ia-tree -->
```
Вход по номеру (phone) — старт, без таб-бара · открывается: старт
    ├─ Пароль (password) — push, без таб-бара · открывается: «Далее»
    │   └─ Аккаунт (account) — push, без таб-бара · открывается: «Профиль и аккаунт»
    │       └─ Удаление аккаунта (deleteaccount) — push, без таб-бара · открывается: «Удалить аккаунт»
    └─ Создать аккаунт (register) — push, без таб-бара · открывается: «Создать аккаунт»
        └─ Пароль нового аккаунта (registerpassword) — push, без таб-бара · открывается: «Далее»

Лента (feed) — tab (root) · открывается: «Продолжить без аккаунта», «Войти» … · fetch, bgtask
    ├─ Контакт-лист (post) — push · открывается: «36 кадров после дождя», «Отмеченные кадры» …
    │   ├─ Профиль фотографа (photographer) — push · открывается: «Алия», «Марат» …
    │   └─ Передача материалов (handoff) — push · открывается: «Передать автору материал», «Серия «После дождя»» …
    └─ Новый контакт-лист (compose) — modal · открывается: «Новый контакт-лист», «Сохранить скан» … · camera, photos
        ├─ Скан контакт-листа (camera) — fullscreen · открывается: «Сканировать лист» (camera)
        └─ Выбор сканов (picker) — system · открывается: «Выбрать из Фото» (photos)

Фотопрогулки (walks) — tab (root) · открывается: «Сегодня» · location
    └─ Детали прогулки (walk) — push · открывается: «Ближайшая прогулка», «18:40» …, «Добавить в календарь» (calendar), «Открыть прогулку» (keychain)
        ├─ Маршрут (route) — push · открывается: «Найти рядом» (location), «Маршрут»
        └─ Календарь прогулки (calendar) — push · открывается: «Время» · calendar

Лаборатория (lab) — tab (root) · открывается: «В лабе», «Lab-Red»
    ├─ Партия проявки (batch) — push · открывается: «Проявка», «HP5 · партия K-184» … · remotenotif
    │   ├─ Таймер проявки (timer) — fullscreen · открывается: «Запустить таймер»
    │   ├─ Скан контакт-листа (scan) — fullscreen · открывается: «Portra 400 · K-185», «Сканировать лист»
    │   └─ Голосовая заметка (voice) — push · открывается: «Голосовая заметка» · mic, speech
    ├─ Материалы (materials) — push · открывается: «Ilford MG RC · 18 листов», «Материалы»
    └─ Сеть лаборатории (labnet) — push · открывается: «Сеть лаборатории» · wifiinfo, hotspot

Профиль (profile) — tab (root) · открывается: «Персонализировать предложения» (tracking), «Оставить без подбора»
    ├─ Знакомые фотографы (contacts) — push · открывается: «Знакомые фотографы» · contacts
    ├─ Уведомления (notifications) — push · открывается: «Уведомления» · push, commnotif
    ├─ Виджет (widget) — system · открывается: «Виджет» · appgroups, keychain
    ├─ Защита и вход (security) — push · открывается: «Защита и вход» · autofill, faceid
    └─ Предложения мастерских (ads) — push · открывается: «Предложения мастерских» · tracking
```
<!-- @end -->

## Переходы

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
| `feed` | «Новый контакт-лист» | `compose` | — | переход |
| `feed` | «Алия», «Марат» … | `photographer` | — | переход |
| `feed` | «Сегодня» | `walks` | — | переход |
| `feed` | «В лабе» | `lab` | — | переход |
| `feed` | «36 кадров после дождя», «Отмеченные кадры» … | `post` | — | переход |
| `post` | «Назад» | `feed` | — | возврат по IA |
| `post` | «Дана Садыкова», «Открыть практику Даны» | `photographer` | — | переход |
| `post` | «Передать автору материал» | `handoff` | — | переход |
| `photographer` | «Назад» | `post` | — | возврат по IA |
| `photographer` | «Ближайшая прогулка» | `walk` | — | переход |
| `photographer` | «Серия «После дождя»» | `handoff` | — | переход |
| `photographer` | «Лист K-184» | `post` | — | переход |
| `compose` | «Сканировать лист» | `camera` | `NSCameraUsageDescription` | доступ разрешён |
| `compose` | «Сканировать лист» | `compose` | `NSCameraUsageDescription` | отказ → fallback |
| `compose` | «Выбрать из Фото» | `picker` | `NSPhotoLibraryUsageDescription` | доступ разрешён |
| `compose` | «Выбрать из Фото» | `compose` | `NSPhotoLibraryUsageDescription` | отказ → fallback |
| `compose` | «Проявка» | `batch` | — | переход |
| `camera` | «Закрыть» | `compose` | — | возврат по IA |
| `camera` | «Сохранить скан» | `compose` | — | переход |
| `picker` | «Готово» | `compose` | — | переход |
| `walks` | «Найти рядом» | `route` | `NSLocationWhenInUseUsageDescription` | доступ разрешён |
| `walks` | «Найти рядом» | `walks` | `NSLocationWhenInUseUsageDescription` | отказ → fallback |
| `walks` | «18:40», «Ранний рынок» … | `walk` | — | переход |
| `walk` | «Назад» | `walks` | — | возврат по IA |
| `walk` | «Маршрут» | `route` | — | переход |
| `walk` | «Время» | `calendar` | — | переход |
| `walk` | «После прогулки» | `post` | — | переход |
| `route` | «Назад» | `walk` | — | возврат по IA |
| `route` | «Арбат», «Открыть сбор» | `walk` | — | переход |
| `route` | «Lab-Red» | `lab` | — | переход |
| `calendar` | «Назад» | `walk` | — | возврат по IA |
| `calendar` | «Добавить в календарь» | `walk` | `NSCalendarsFullAccessUsageDescription` | доступ разрешён |
| `calendar` | «Добавить в календарь» | `calendar` | `NSCalendarsFullAccessUsageDescription` | отказ → fallback |
| `handoff` | «Назад» | `post` | — | возврат по IA |
| `lab` | «Сеть лаборатории» | `labnet` | — | переход |
| `lab` | «HP5 · партия K-184», «Fomapan 200 · K-186» | `batch` | — | переход |
| `lab` | «Portra 400 · K-185» | `scan` | — | переход |
| `lab` | «Ilford MG RC · 18 листов», «Материалы» | `materials` | — | переход |
| `batch` | «Назад» | `lab` | — | возврат по IA |
| `batch` | «Запустить таймер» | `timer` | — | переход |
| `batch` | «Голосовая заметка» | `voice` | — | переход |
| `batch` | «Сканировать лист» | `scan` | — | переход |
| `timer` | «Закрыть» | `batch` | — | возврат по IA |
| `scan` | «Закрыть» | `batch` | — | возврат по IA |
| `scan` | «Сканировать лист» | `batch` | — | переход |
| `materials` | «Назад» | `lab` | — | возврат по IA |
| `materials` | «Ilford MG RC 13×18» | `handoff` | — | переход |
| `voice` | «Назад» | `batch` | — | возврат по IA |
| `voice` | «Записать голосом» | `voice` | `NSMicrophoneUsageDescription` | доступ разрешён |
| `voice` | «Распознать запись» | `voice` | `NSSpeechRecognitionUsageDescription` | доступ разрешён |
| `labnet` | «Назад» | `lab` | — | возврат по IA |
| `labnet` | «Проверить сеть» | `labnet` | `com.apple.developer.networking.wifi-info` | entitlement, без alert |
| `labnet` | «Подключиться к Lab-Red» | `labnet` | `com.apple.developer.networking.HotspotConfiguration` | доступ разрешён |
| `profile` | «Защита и вход» | `security` | — | переход |
| `profile` | «Новый контакт-лист» | `compose` | — | переход |
| `profile` | «Знакомые фотографы» | `contacts` | — | переход |
| `profile` | «Уведомления» | `notifications` | — | переход |
| `profile` | «Предложения мастерских» | `ads` | — | переход |
| `profile` | «Профиль и аккаунт» | `account` | — | переход |
| `profile` | «Виджет» | `widget` | — | переход |
| `contacts` | «Назад» | `profile` | — | возврат по IA |
| `contacts` | «Найти в контактах» | `contacts` | `NSContactsUsageDescription` | доступ разрешён |
| `contacts` | «Ренат Мусин», «Лиза Вэй» … | `photographer` | — | переход |
| `notifications` | «Назад» | `profile` | — | возврат по IA |
| `notifications` | «Разрешить уведомления» | `notifications` | `aps-environment` | доступ разрешён |
| `notifications` | «Сообщения» | `notifications` | `com.apple.developer.usernotifications.communication` | entitlement, без alert |
| `widget` | «Добавить виджет» | `widget` | `com.apple.security.application-groups` | entitlement, без alert |
| `widget` | «Открыть прогулку» | `walk` | `keychain-access-groups` | entitlement, без alert |
| `security` | «Назад» | `profile` | — | возврат по IA |
| `security` | «Включить Face ID» | `security` | `NSFaceIDUsageDescription` | доступ разрешён |
| `security` | «Вход на сайте» | `security` | `com.apple.developer.authentication-services.autofill-credential-provider` | entitlement, без alert |
| `ads` | «Назад» | `profile` | — | возврат по IA |
| `ads` | «Персонализировать предложения» | `profile` | `NSUserTrackingUsageDescription` | доступ разрешён |
| `ads` | «Персонализировать предложения» | `ads` | `NSUserTrackingUsageDescription` | отказ → fallback |
| `ads` | «Оставить без подбора» | `profile` | — | переход |
<!-- @end -->

## Доступы

PermissionsService — единственная точка JIT-запросов. Один ключ имеет один триггер. При отказе пользователь остаётся в том же процессе с видимым fallback.

## Не заявлено

Associated Domains исключён: диплинков в концепте нет. VoIP и Audio background исключены: ядровая функция не требует звонков или фонового аудио.
