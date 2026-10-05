import { THEME, TABS } from './_shared.mjs';
import { people, longrun, club } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Рядом' }), [
      ui.iconButton({ icon: 'bell', label: 'Уведомления', go: 'notif' }),
      ui.iconButton({ icon: 'plus', label: 'Новая публикация', go: 'compose' }),
    ]),
    ui.composerPrompt({ initial: people.me.initial, placeholder: 'Позвать на тренировку', go: 'compose', primary: true, trailing: ui.iconButton({ icon: 'camera', label: 'Снять', go: 'shoot' }) }),
    ui.stories([
      { label: 'Алина', initial: people.alina.initial, go: 'post' },
      { label: 'Лонгран', icon: 'route', go: 'meetup' },
      { label: 'Роман', initial: people.roman.initial, seen: true, go: 'videos' },
      { label: 'Лера', initial: people.lera.initial, seen: true, go: 'friends' },
    ]),
    ui.section({ children: [
      `<button class="ry-plan" data-go="meetup"><small>Сегодня · старт в ${longrun.start}</small><strong>${longrun.title}</strong><span>${longrun.from} · ${longrun.km} км · темп ${longrun.pace}</span>${ui.progress({ fillClass: 'ry-w-64' })}</button>`,
    ] }),
    ui.post({
      author: { initial: people.alina.initial, name: people.alina.name, meta: `вчера, 21:04 · ${club.city}`, action: { go: 'friends' } },
      text: 'Первый спокойный выход после перерыва: 6,4 км по набережной, средний темп 6:12. На восточном мосту лёд — лучше свернуть к велодорожке',
      attach: ui.list([ui.row({ lead: ui.leadIcon('route', { accent: true }), title: 'Набережная · 6,4 км', sub: 'Темп 6:12 · 4 участника', go: 'player' })]),
      likes: 14, comments: 9, shares: 2, open: { go: 'post' }, discuss: { go: 'post' }, menu: ['Пожаловаться', 'Скрыть', 'Копировать ссылку'],
    }),
    ui.section({ title: 'Реклама', children: [
      ui.list([ui.row({ lead: ui.leadIcon('store'), title: 'Беговой магазин на Абая', sub: 'Подбор кроссовок по стопе · −10 % участникам клуба' })]),
      ui.actions([ui.button({ label: 'Показывать подходящее', variant: 'secondary', block: true, ask: 'tracking|feed|feed' })], { className: 'ry-gap' }),
      ui.denied('tracking'),
    ] }),
    ui.post({
      author: { initial: people.roman.initial, name: people.roman.name, meta: 'позавчера · видео техники', action: { go: 'videos' } },
      text: 'Сняли постановку стопы на темпе — смотрите на большом экране, там видно, где теряется каденс',
      attach: ui.list([ui.row({ lead: ui.leadIcon('film'), title: 'Постановка стопы на темпе', sub: '3:47 · разбор тренера', go: 'videos' })]),
      likes: 21, comments: 6, shares: 4, open: { go: 'videos' },
    }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'feed' }),
});
