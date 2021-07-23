import { IMAGEN_CARGADA, IMAGEN_ELIMINADA } from '../types';

const initialState = {
	imagen: '',
	cargada: false,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
	switch (action.type) {
		case IMAGEN_CARGADA:
			return {
				...state,
				imagen: action.payload,
				cargada: true,
			};
		case IMAGEN_ELIMINADA:
			return {
				...state,
				imagen: '',
				cargada: false,
			};
		default:
			return state;
	}
}
