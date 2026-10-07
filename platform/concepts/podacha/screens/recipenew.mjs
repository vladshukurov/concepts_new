import { form } from './_shared.mjs';
export default (ui) => form(ui, { id: 'recipenew', title: 'Новый рецепт', cta: 'Сохранить', fields: [['Название', 'Например, сырники на кефире'], ['Время', 'Сколько минут'], ['Ингредиенты', 'Через запятую']] });
