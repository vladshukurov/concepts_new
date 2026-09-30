import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'shareext', theme: THEME,
  body: [
    ui.nav({ title: 'Образы', back: 'cancel', trailing: ui.textButton({ label: 'Сохранить', strong: true, toast: 'Сохранено в черновики|profile', primary: true }) }),
    ui.scroll([
      ui.section({ children: ui.list([ui.row({ lead: ui.leadIcon('link'), title: 'Жакет в клетку, шерсть · 12 400 ₽', sub: 'sezon-store.ru' })]) }),
      ui.section({ title: 'Куда положить', children: ui.group({ cells: [
        ui.cell({ icon: 'file-text', title: 'Черновик образа', sub: '7 черновиков', check: true }),
        ui.cell({ icon: 'bookmark', title: 'Подборка «Осень»', sub: '18 вещей', toast: 'Выбрана подборка «Осень»' }),
        ui.cell({ icon: 'plus', title: 'Новая подборка', toast: 'Назовите подборку' }),
      ] }) }),
      ui.section({ title: 'Заметка', children: '<p class="lk-share-note">Под серое пальто, померить рукав</p>' }),
    ]),
  ],
});
