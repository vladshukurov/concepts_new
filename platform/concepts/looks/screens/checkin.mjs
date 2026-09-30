import { THEME, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'checkin', theme: THEME,
  body: [
    ui.nav({ title: 'Отметка' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="lk-swap"><small>Сейчас 14:06 · своп идёт третий час</small><strong>Новая Голландия</strong><span>Отметка по сети площадки у входа</span></div>`,
        ui.actions([ui.button({ label: 'Отметиться на свопе', icon: 'map-pin', block: true, activate: 'wifiinfo|checkin', primary: true })]),
        ui.granted('wifiinfo', 'Вы на свопе · отметка в 14:06'),
        ui.denied('wifiinfo', 'Отметка уйдёт организатору на подтверждение', ui.actions([ui.button({ label: 'Подключиться по QR', variant: 'secondary', block: true, go: 'netqr' })])),
      ] }),
      ui.section({ title: 'Уже отметились', meta: '11 из 18', children: ui.list([
        ui.row({ thumb: `${P.lera} is-round`, title: 'Лера Савина', sub: '14:02 · принесла 4 вещи' }),
        ui.row({ thumb: `${P.yulia} is-round`, title: 'Юля Карпова', sub: '14:05 · вручную' }),
        ui.row({ thumb: `${P.mark} is-round`, title: 'Марк Зотов', sub: '13:58 · первый' }),
      ]) }),
    ]),
  ],
});
