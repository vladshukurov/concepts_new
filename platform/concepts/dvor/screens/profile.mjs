import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: [
    ui.nav({ title: '' }),
    ui.scroll([
      `<div class="dv-person">${ui.avatar('ПИ', { large: true })}<h1 class="ui-title">Пётр Ильин</h1><p class="ui-sub">Кв. 66 · 3 подъезд · дом подтверждён</p></div>`,
      ui.section({ children: [ui.stats([['8', 'общих контактов'], ['2', 'общих чата'], ['3', 'года в доме']]), ui.actions([ui.button({ label: 'Написать', icon: 'message-circle', go: 'chat' }), ui.button({ label: 'События', variant: 'secondary', go: 'events' })], { row: true, className: 'dv-gap' })] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'message-circle', title: 'Общие чаты', sub: '3 подъезд · соседи по этажу', go: 'chats' }),
        ui.cell({ icon: 'shield', title: 'Пожаловаться', sub: 'В поддержку приложения', toast: 'Жалоба отправлена' }),
        ui.cell({ icon: 'x', title: 'Заблокировать', sub: 'Его сообщения перестанут приходить', toast: 'Пётр Ильин заблокирован' }),
      ] }) }),
    ]),
  ],
});
