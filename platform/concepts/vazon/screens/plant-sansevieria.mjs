import { plantScreen } from './_shared.mjs';

export default (ui) => plantScreen(ui, 'sansevieria', {
  care: [ui.row({ lead: ui.leadIcon('triangle-alert'), title: 'Не перелить', sub: 'Зимой полив раз в месяц, грунт должен просохнуть' })],
  growth: [ui.row({ thumb: 'ph', title: 'Июль · новый росток', sub: 'Полез из края горшка — пора делить весной' })],
});
