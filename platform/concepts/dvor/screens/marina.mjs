import { personScreen } from './_shared.mjs';

/* Профиль Марины из 63-й: она открывает подъезд мастерам */
export default (ui) => personScreen(ui, { id: 'marina', initial: 'МК', name: 'Марина Кольцова', sub: 'Кв. 63 · 3 подъезд · дом подтверждён', chat: 'chat', rows: [
  ['wrench', 'Доводчик, 3 подъезд', 'Откроет подъезд мастеру с 16:00'],
  ['calendar', 'Субботник 12 апреля', 'Придёт с детьми, берёт перчатки'],
] });
