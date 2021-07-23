import {
	EXPERIENCIA_LABORAL_AGREGADA,
	OBTENER_EXPERIENCIA,
	ELIMINAR_EXPERIENCIA,
	EDITAR_EXPERIENCIA,
	FIN_EDICION_EXPERIENCIA,
} from '../types';

const initialState = {
	experiencia: [],
	obtenerexperiencia: null,
	error: false,
	loading: false,
	banderaexperiencia: false,
};
//eslint-disable-next-line
export default function (state = initialState, action) {
	switch (action.type) {
		case EXPERIENCIA_LABORAL_AGREGADA:
			if (state.experiencia.length <= 2) {
				state.experiencia.push(action.payload);
			} else {
				state.error = true;
			}

			return {
				...state,
				banderaexperiencia: !state.banderaexperiencia,
			};
		case ELIMINAR_EXPERIENCIA:
			return {
				...state,
				experiencia: state.experiencia.filter(
					experiencia =>
						experiencia.idExperiencia !== action.payload,
				),
			};
		case OBTENER_EXPERIENCIA:
			return {
				...state,
				obtenerexperiencia: action.payload,
			};
		case EDITAR_EXPERIENCIA:
			return {
				...state,
				experiencia: state.experiencia.map(experiencia =>
					experiencia.idExperiencia ===
					action.payload.idExperiencia
						? (experiencia = action.payload)
						: experiencia,
				),
			};
		case FIN_EDICION_EXPERIENCIA:
			return {
				...state,
				obtenerexperiencia: null,
			};
		default:
			return state;
	}
}
