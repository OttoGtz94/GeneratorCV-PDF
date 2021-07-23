import {
	ESTUDIO_AGREGADO,
	ELIMINAR_ESTUDIO,
	OBTENER_ESTUDIO,
	EDITAR_ESTUDIO,
	FIN_EDICION_ESTUDIO,
} from '../types';

const initialState = {
	estudios: [],
	obtenerestudio: null,
	error: false,
	banderaestudio: false,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
	switch (action.type) {
		case ESTUDIO_AGREGADO:
			state.estudios.push(action.payload);
			return {
				...state,
				banderaestudio: !state.banderaestudio,
			};
		case ELIMINAR_ESTUDIO:
			return {
				...state,
				estudios: state.estudios.filter(
					estudio => estudio.idEstudio !== action.payload,
				),
			};
		case OBTENER_ESTUDIO:
			return {
				...state,
				obtenerestudio: action.payload,
			};
		case EDITAR_ESTUDIO:
			return {
				...state,
				estudios: state.estudios.map(estudio =>
					estudio.idEstudio === action.payload.idEstudio
						? (estudio = action.payload)
						: estudio,
				),
			};
		case FIN_EDICION_ESTUDIO:
			return {
				...state,
				obtenerestudio: null,
			};
		default:
			return state;
	}
}
