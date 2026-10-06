import { THEME, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'refresh', theme: THEME,
  body: [
    ui.nav({ title: 'Без сети' }),
    ui.scroll([
      ui.section({ title: 'В поездку с Трюфелем', children: [
        ui.list([
          ui.row({ thumb: `${PET.truffle} is-round`, title: 'Ветпаспорт и прививки', sub: 'Бешенство до 19 мая 2027 · 4 записи' }),
          ui.row({ lead: ui.leadIcon('map-pin'), title: 'Площадки у дачи', sub: 'Сосново · 3 площадки и ветклиника' }),
          ui.row({ lead: ui.leadIcon('phone'), title: 'Дежурный ветеринар', sub: 'Круглосуточно · Приозерск' }),
        ]),
        ui.actions([ui.button({ label: 'Скачать к утру', icon: 'download', block: true, primary: true, activate: 'bgtask|refresh' })]),
        ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Скачается ночью', sub: 'На зарядке и в Wi‑Fi · к 7:00 будет без сети' , shownAfter: 'bgtask' })]),
      ] }),
    ]),
  ],
});
