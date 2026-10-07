/** Поле формы «Все дома»: подпись и настоящий input */
export const field = (label, value, extra = '') => `<label class="sv-field"><span>${label}</span><input value="${value}" aria-label="${label}"${extra}></label>`;
