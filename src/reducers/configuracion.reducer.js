import {
	MOSTRAR_CONFIGURACION,
	GUARDAR_COLOR,
	RESETEAR_COLOR,
} from '../types';

const initialState = {
	showmodal: false,
	maincolor: '',
};
//eslint-disable-next-line
export default function (state = initialState, action) {
	switch (action.type) {
		case MOSTRAR_CONFIGURACION:
			return {
				...state,
				showmodal: action.payload,
			};
		case GUARDAR_COLOR:
			return {
				...state,
				maincolor: action.payload,
			};
		case RESETEAR_COLOR:
			return {
				...state,
				maincolor: '',
			};
		default:
			return state;
	}
}
