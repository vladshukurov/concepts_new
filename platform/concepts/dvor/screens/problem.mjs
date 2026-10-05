import { THEME } from './_shared.mjs';

/* Новая запись-заявка: кадры с места первыми, текст — настоящее поле, ниже свои похожие записи */
export default (ui) => ui.screen({
  id: 'problem', theme: THEME,
  body: [
    ui.nav({ title: 'Что случилось', back: 'close', trailing: ui.textButton({ label: 'Отправить', strong: true, toast: 'Заявка 4417-Б отправлена в чат УК' }) }),
    ui.scroll([
      ui.section({ title: 'Фото с места', meta: '2 кадра', children: [
        `<div class="dv-shots"><span class="ph"></span><span class="ph"></span></div>`,
        ui.actions([ui.button({ label: 'Снять ещё', icon: 'camera', variant: 'secondary', block: true, ask: 'camera|shoot|problem' })], { className: 'dv-gap' }),
        ui.denied('camera'),
      ] }),
      ui.section({ children: [
        `<label class="dv-field"><span>Что случилось</span><textarea rows="2" aria-label="Что случилось">Сорвало доводчик на второй двери, дверь бьёт по коляскам</textarea></label>`,
        ui.group({ cells: [
          ui.cell({ icon: 'layout-grid', title: 'Раздел', value: 'Подъезд', menu: ['Подъезд', 'Двор', 'Лифт', 'Вода'] }),
          ui.cell({ icon: 'map-pin', title: 'Место', value: '3 подъезд, вторая дверь' }),
          ui.cell({ icon: 'send', title: 'Куда', value: 'Чат УК' }),
          ui.cell({ icon: 'mic', title: 'Добавить голосом', sub: 'Надиктовать, текст распознается сам', ask: 'mic+speech|dictate|problem' }),
        ] }),
        ui.denied('mic,speech'),
      ] }),
      ui.section({ title: 'Похожие записи', children: ui.list([
        ui.row({ lead: ui.leadIcon('wrench'), title: 'Доводчик, та же дверь', sub: 'Ноябрь · заявка 3981 закрыта за 2 дня', go: 'post' }),
        ui.row({ lead: ui.leadIcon('wrench'), title: 'Домофон не открывал', sub: 'Февраль · закрыта за 5 часов' }),
      ]) }),
    ]),
  ],
});
