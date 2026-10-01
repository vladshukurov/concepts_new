import { THEME } from './_shared.mjs';
import { workshops } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'verify', theme: THEME,
  body: [
    ui.nav({ title: 'Отметка в мастерской' }),
    ui.scroll([
      ui.section({ children: `<div class="uz-item"><small>Адрес совпал · до входа 24 м</small><strong>Вы рядом с «${workshops.revers.name}»</strong><span>Смена идёт · сеть ${workshops.revers.network}</span></div>` }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Я в мастерской', icon: 'wifi', block: true, activate: 'wifiinfo|workshop', primary: true }),
          ui.button({ label: 'Отметиться у дежурного', variant: 'tertiary', block: true, toast: 'Заявка отправлена дежурному' }),
        ]),
      ] }),
    ]),
  ],
});
