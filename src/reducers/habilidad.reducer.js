import {
	HABILIDAD_AGREGADA,
	ELIMINAR_HABILIDAD,
} from '../types';

const initialState = {
	habilidades: [],
	error: false,
	banderahabilidades: false,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
	switch (action.type) {
		case HABILIDAD_AGREGADA:
			state.habilidades.push(action.payload);
			return {
				...state,
				banderahabilidades: !state.banderahabilidades,
			};
		case ELIMINAR_HABILIDAD:
			return {
				...state,
				habilidades: state.habilidades.filter(
					habilidad =>
						habilidad.idHabilidad !== action.payload,
				),
			};
		default:
			return state;
	}
}
