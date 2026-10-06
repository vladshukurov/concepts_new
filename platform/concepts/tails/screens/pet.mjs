import { THEME, PET } from './_shared.mjs';
import { revaccination } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'pet', theme: THEME,
  body: ui.scroll([
    `<div class="tl-hero ${PET.truffle}"><div class="tl-hero-nav">${ui.iconButton({ icon: 'chevron-left', label: 'Назад', look: 'glass', back: true })}${ui.iconButton({ icon: 'ellipsis', label: 'Действия с профилем', look: 'glass', menu: ['Изменить карточку', 'Пожаловаться'] })}</div></div>`,
    `<div class="tl-pet-head"><h1 class="ui-title">Трюфель, 2 года</h1><p class="ui-sub">Золотистый ретривер · Петроградская сторона</p><p>Дружелюбный, любит бегать, не боится больших собак</p>${ui.stats([['24', 'прогулки'], ['23', 'заметки'], ['5', 'друзей']])}${ui.actions([
      ui.button({ label: 'Открыть здоровье', icon: 'stethoscope', block: true, go: 'vaccine', primary: true }),
      ui.button({ label: 'Надиктовать заметку', icon: 'mic', variant: 'secondary', block: true, ask: 'speech|vetnote|vetnote' }),
    ])}</div>`,
    ui.section({ title: 'Здоровье', children: ui.list([
      ui.row({ lead: ui.leadIcon('syringe'), title: 'Прививки и обработки', sub: `Ревакцинация через ${revaccination.left}`, go: 'vaccine' }),
      ui.row({ lead: ui.leadIcon('notebook-pen'), title: 'Наблюдения владельца', sub: 'Последнее 14 мая: чесал правое ухо', go: 'vetnote' }),
    ]) }),
    ui.section({ title: 'Прогулки', meta: '24', children: ui.list([
      ui.row({ lead: ui.leadIcon('route'), title: 'Круг у пруда · 2,4 км', sub: 'Вчера · 41 минута' }),
      ui.row({ lead: ui.leadIcon('route'), title: 'Набережная · 3,1 км', sub: '12 мая · с Барни' }),
    ]) }),
  ]),
});
