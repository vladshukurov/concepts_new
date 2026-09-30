import { THEME, TABS, sheet, kit } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Контур', glyph: 'aperture' }), ui.iconButton({ icon: 'plus', label: 'Новый контакт-лист', go: 'compose' })),
    ui.stories([
      { label: 'Алия', icon: 'aperture', go: 'photographer' },
      { label: 'Марат', icon: 'aperture', go: 'photographer' },
      { label: 'Сегодня', icon: 'route', seen: true, go: 'walks' },
      { label: 'В лабе', icon: 'flask-conical', seen: true, go: 'lab' },
    ]),
    `<article class="ui-post"><div class="ui-post-head"><button class="ui-post-author" data-go="photographer" aria-label="Дана Садыкова"><span class="ui-post-ava is-initial">ДС</span><span class="ui-post-who"><strong>Дана Садыкова</strong><span>сегодня · Самал-2</span></span></button></div><button class="ui-post-text" data-primary data-go="post"><strong>36 кадров после дождя</strong></button>${sheet(36, [4, 11, 12, 19, 23, 27, 30])}${kit('Olympus XA', 'HP5 400 → 800', 'DD-X 1+4')}<div class="ui-post-bar"><button class="ui-post-act" data-toast="Понравилось" aria-label="Нравится">${ui.icon('heart')}28</button><button class="ui-post-act" data-go="post" aria-label="Отмеченные кадры">${ui.icon('bookmark')}7 кадров</button><span class="ui-post-views">лист готов к печати</span></div></article>`,
    `<article class="ui-post"><div class="ui-post-head"><button class="ui-post-author" data-go="photographer" aria-label="Тимур Ким"><span class="ui-post-ava is-initial">ТК</span><span class="ui-post-who"><strong>Тимур Ким</strong><span>вчера · Орбита</span></span></button></div><button class="ui-post-text" data-go="post">Проверка света у старого кинотеатра</button>${sheet(24)}${kit('Portra 400', 'ждёт окно лаборатории')}<div class="ui-post-bar"><button class="ui-post-act" data-toast="Понравилось" aria-label="Нравится">${ui.icon('heart')}12</button></div></article>`,
    ui.section({ children: [
      ui.group({ cells: [ui.cell({ icon: 'repeat-2', title: 'Обновлять ленту в фоне', sub: 'Новые листы к открытию', toggle: false, activate: 'fetch|feed' })] }),
      ui.denied('fetch', 'Лента обновится после открытия'),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'feed' }),
});
