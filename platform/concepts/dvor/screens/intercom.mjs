import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'intercom', theme: THEME, className: 'dv-intercom',
  body: [
    ui.nav({ title: 'Домофон', back: 'close' }),
    '<div class="dv-door ph on-dark"></div>',
    '<div class="dv-intercom-copy"><strong>Вторая дверь, 3 подъезд</strong><span>Курьер · звонит 0:12</span></div>',
    ui.actions([
      ui.button({ label: 'Открыть дверь', icon: 'key', block: true, primary: true, toast: 'Дверь открыта на 8 секунд' }),
      ui.button({ label: 'Отклонить', variant: 'secondary', block: true, back: true }),
    ]),
  ],
});
