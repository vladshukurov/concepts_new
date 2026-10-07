import { THEME, TABS, map } from './_shared.mjs';
import { own, longrun } from '../model.mjs';

/* Свой беговой дневник: всё на главной пробежал, записал или снял сам Влад.
   Чужих публикаций, лайков и подписок нет — с клубом бегают вместе и пишут в чат */
export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Выбег' }), [
      ui.iconButton({ icon: 'bell', label: 'Уведомления', go: 'notif' }),
      ui.iconButton({ icon: 'plus', label: 'Новая запись', go: 'compose' }),
    ]),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Пробежки', filter: 'run' },
      { label: 'Заметки', filter: 'note' },
      { label: 'Видео', filter: 'video' },
    ]) }),
    ui.entry({
      icon: 'route', title: longrun.title, meta: `с клубом · сегодня в ${longrun.start} · ${longrun.km} км`, status: { label: 'скоро', accent: true },
      text: `Старт от главного входа, темп ${longrun.pace}. Маршрут и подсказки уже на телефоне`, actions: [{ label: 'Открыть тренировку', icon: 'calendar', go: 'meetup', primary: true }], tags: ['run'],
    }),
    ui.entry({ icon: 'activity', title: own.run.title, meta: `${own.run.when} · темп ${own.run.pace} · ${own.run.time}`, text: own.run.note, attach: map(), open: { go: 'post' }, menu: ['Изменить', 'Удалить'], tags: ['run'] }),
    /* Реклама — модель монетизации дневника. ATT спрашивается у самой карточки, до выбора;
       после разрешения карточка подобрана под свои маршруты и километры */
    ui.entry({
      icon: 'megaphone', title: `<span data-hide-granted="tracking">Беговой магазин на Абая</span><span class="perm-hidden" data-show-granted="tracking">Кроссовки для асфальта на Абая</span>`,
      meta: `<span data-hide-granted="tracking">реклама</span><span class="perm-hidden" data-show-granted="tracking">реклама · подобрано по пробежкам</span>`,
      text: `<span data-hide-granted="tracking">Подбор кроссовок по стопе на дорожке, примерка без записи</span><span class="perm-hidden" data-show-granted="tracking">Под темп 6:00–6:20 и набережную: три пары с амортизацией, примерка на дорожке</span>`,
      actions: [{ label: 'Подбирать по моим пробежкам', icon: 'sliders-horizontal', ask: 'tracking|feed|feed' }],
    }),
    ui.entry({ icon: 'mic', title: own.voice.title, meta: `${own.voice.when} · заметка после разминки`, voice: { dur: own.voice.dur }, tags: ['note'] }),
    ui.entry({
      icon: 'target', title: `Неделя · ${own.week.done} из ${own.week.goal} км`, meta: `${own.week.runs} пробежки · осталось ${own.week.left} км`,
      attach: ui.checklist([
        { title: 'Вт · интервалы 6 × 400', value: '9,6 км', done: true },
        { title: 'Чт · восстановительная', value: '7,4 км', done: true },
        { title: `Пт · ${own.run.short.toLowerCase()}`, value: '6,4 км', done: true },
        { title: 'Сб · лонгран с клубом', value: `${longrun.km} км` },
      ]), tags: ['run'],
    }),
    ui.entry({ icon: 'video', title: own.clip.title, meta: `${own.clip.when} · ${own.clip.dur} · ${own.clip.by}`, photos: 1, open: { go: 'videos' }, tags: ['video'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'feed' }),
});
