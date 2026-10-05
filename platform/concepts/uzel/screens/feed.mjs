import { THEME, TABS, stages } from './_shared.mjs';
import { people, lamp, workshops } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Узел' }), ui.iconButton({ icon: 'plus', label: 'Опубликовать этап', go: 'update' })),
    ui.composerPrompt({ initial: people.me.initial, placeholder: 'Что починили сегодня?', go: 'update', primary: true, trailing: ui.iconButton({ icon: 'camera', label: 'Снять этап', go: 'update' }) }),
    ui.stories([
      { label: 'Ирина', initial: people.irina.initial, go: 'project' },
      { label: lamp.id, icon: 'lamp', go: 'project' },
      { label: 'Мастерские', icon: 'map-pin', seen: true, go: 'workshops' },
      { label: 'Антон', initial: people.anton.initial, seen: true, go: 'contacts' },
    ]),
    ui.post({
      author: { initial: people.irina.initial, name: people.irina.name, meta: `${lamp.title} · сегодня, 14:20`, action: { go: 'contacts' } },
      text: 'Заменили патрон и закрепили кабель — лампа снова включается. Осталось подобрать абажур',
      attach: `<button class="uz-item" data-go="project"><small>${workshops.revers.name} · этап ${lamp.stage} из ${lamp.stages}</small><strong>${lamp.title}</strong>${stages(lamp.stage, lamp.stages)}<span>Следующий шаг — ${lamp.next.toLowerCase()}</span></button>`,
      likes: 24, comments: 5, shares: 3, open: { go: 'project' }, discuss: { go: 'chat' }, menu: ['Скрыть', 'Пожаловаться'],
    }),
    ui.post({
      author: { initial: people.anton.initial, name: people.anton.name, meta: `${workshops.electro.name} · вчера` },
      text: 'Тостер Т‑18: сопротивление спирали в норме, виноват термореле. Заказали замену',
      attach: ui.list([ui.row({ lead: ui.leadIcon('plug', { accent: true }), title: 'Тостер Т‑18 · диагностика', sub: 'Этап 2 из 4', go: 'project' })]),
      likes: 11, comments: 2, open: { go: 'project' },
    }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'feed' }),
});
