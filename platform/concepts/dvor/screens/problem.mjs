import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'problem', theme: THEME,
  body: [
    ui.nav({ title: 'Что случилось', back: 'close', trailing: ui.textButton({ label: 'Отправить', strong: true, toast: 'Заявка 4417-Б отправлена в УК' }) }),
    ui.scroll([
      ui.composerPrompt({ initial: 'АР', placeholder: 'Сорвало доводчик на второй двери, дверь бьёт по коляскам', toast: 'Описание заявки' }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'layout-grid', title: 'Раздел', value: 'Подъезд', toast: 'Подъезд · Двор · Лифт · Вода' }),
        ui.cell({ icon: 'map-pin', title: 'Место', value: '3 подъезд, 1 этаж' }),
        ui.cell({ icon: 'eye', title: 'Видно соседям', value: '18 жильцов' }),
        ui.cell({ icon: 'camera', title: 'Фото с места', sub: 'Пока не добавлено', ask: 'camera|shoot|problem' }),
      ] }) }),
      ui.denied('camera'),
    ]),
  ],
});
