import { THEME, PET } from './_shared.mjs';
import { revaccination } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'pet', theme: THEME,
  body: ui.scroll([
    `<div class="tl-hero ${PET.truffle}"><div class="tl-hero-nav">${ui.iconButton({ icon: 'chevron-left', label: 'Назад', look: 'glass', back: true })}${ui.iconButton({ icon: 'ellipsis', label: 'Действия с профилем', look: 'glass', menu: ['Скрыть', 'Пожаловаться'] })}</div></div>`,
    `<div class="tl-pet-head"><h1 class="ui-title">Трюфель, 2 года</h1><p class="ui-sub">Золотистый ретривер · Петроградская сторона</p><p>Дружелюбный, любит бегать, не боится больших собак</p>${ui.stats([['628', 'друзей'], ['142', 'публикации'], ['18', 'прогулок']])}${ui.actions([
      ui.button({ label: 'Открыть здоровье', icon: 'stethoscope', block: true, go: 'vaccine', primary: true }),
      ui.button({ label: 'Надиктовать заметку', icon: 'mic', variant: 'secondary', block: true, ask: 'speech|vetnote|vetnote' }),
    ])}</div>`,
    ui.section({ children: `<div class="tl-match">${ui.icon('badge-check')}<div><strong>Подойдёте друг другу</strong>Барни и Трюфель выбирают активные прогулки и спокойно общаются с крупными собаками</div></div>` }),
    ui.section({ title: 'Здоровье', children: ui.list([
      ui.row({ lead: ui.leadIcon('syringe'), title: 'Прививки и обработки', sub: `Ревакцинация через ${revaccination.left}`, go: 'vaccine' }),
      ui.row({ lead: ui.leadIcon('notebook-pen'), title: 'Наблюдения владельца', sub: 'Последнее 14 мая: чесал правое ухо', go: 'vetnote' }),
    ]) }),
    ui.section({ title: 'Публикации', meta: '142', children: `<div class="tl-gallery">${[PET.truffle, PET.loki, PET.barni, PET.mint, PET.truffle, PET.loki].map((p, i) => `<button class="${p}" data-toast="Публикация ${i + 1}" aria-label="Публикация ${i + 1}"></button>`).join('')}</div>` }),
  ]),
});
