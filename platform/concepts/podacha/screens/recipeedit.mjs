import { form } from './_shared.mjs';
import { own } from '../model.mjs';
export default (ui) => form(ui, { id: 'recipeedit', title: 'Правка рецепта', cta: 'Сохранить', fields: [['Название', 'Название рецепта', own.dish.title], ['Время', 'Сколько минут', '55 минут'], ['Форма', 'Размер формы', '22 см']] });
