import { personScreen } from './_shared.mjs';

/* Профиль Ирины из 78-й: стеллаж в колясочной */
export default (ui) => personScreen(ui, { id: 'irina', initial: 'ИТ', name: 'Ирина Тепляк', sub: 'Кв. 78 · 3 подъезд · дом подтверждён', chat: 'chatirina', rows: [
  ['calendar', 'Собрание собственников 18 апреля', 'Придёт, спросит про крышу'],
  ['key', 'Стеллаж в колясочной', 'Ключ у неё, 3 апреля оставила голосовое'],
] });
