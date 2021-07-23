import {
	HABILIDAD_AGREGADA,
	ELIMINAR_HABILIDAD,
} from '../types';

export function agregarHabilidadAction(habilidad) {
	return dispatch => {
		dispatch(agregarHabilidad(habilidad));
	};
}

const agregarHabilidad = habilidad => ({
	type: HABILIDAD_AGREGADA,
	payload: habilidad,
});

export function eliminarHabilidadAction(id) {
	return dispatch => {
		dispatch(eliminarHabilidad(id));
	};
}

const eliminarHabilidad = id => ({
	type: ELIMINAR_HABILIDAD,
	payload: id,
});
