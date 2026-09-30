import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: [
    ui.nav({ title: '' }),
    ui.scroll([
      `<div class="dv-person">${ui.avatar('ПИ', { large: true })}<h1 class="ui-title">Пётр Ильин</h1><p class="ui-sub">Кв. 12 · 3 подъезд · дом подтверждён</p></div>`,
      ui.section({ children: [ui.stats([['8', 'общих контактов'], ['12', 'заявок'], ['3', 'года в доме']]), ui.actions([ui.button({ label: 'Написать', icon: 'message-circle', go: 'chat' }), ui.button({ label: 'События', variant: 'secondary', go: 'events' })], { row: true, className: 'dv-gap' })] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'repeat-2', title: 'Обмен во дворе', sub: 'Отдаёт кипятильники и стремянку' }),
        ui.cell({ icon: 'shield', title: 'Пожаловаться на жильца', sub: 'Старшему по дому', toast: 'Жалоба отправлена старшему по дому' }),
        ui.cell({ icon: 'x', title: 'Заблокировать', sub: 'Публикации и ответы скроются', toast: 'Пётр Ильин заблокирован' }),
      ] }) }),
    ]),
  ],
});
