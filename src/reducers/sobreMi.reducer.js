import { SOBRE_MI_AGREGADO } from '../types';
const initialState = {
	sobreMi: {},
	error: false,
	loading: false,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
	switch (action.type) {
		case SOBRE_MI_AGREGADO:
			return {
				...state,
				sobreMi: action.payload,
			};
		default:
			return state;
	}
}
