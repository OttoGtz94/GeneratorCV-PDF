import {
	EXPERIENCIA_LABORAL_AGREGADA,
	ELIMINAR_EXPERIENCIA,
	OBTENER_EXPERIENCIA,
	EDITAR_EXPERIENCIA,
	FIN_EDICION_EXPERIENCIA,
} from '../types';

export function agregarExperienciaAction(experiencia) {
	return dispatch => {
		dispatch(agregarExperiencia(experiencia));
	};
}

const agregarExperiencia = experiencia => ({
	type: EXPERIENCIA_LABORAL_AGREGADA,
	payload: experiencia,
});

export function eliminarExperienciaAction(id) {
	return dispatch => {
		dispatch(eliminarExperiencia(id));
	};
}

const eliminarExperiencia = id => ({
	type: ELIMINAR_EXPERIENCIA,
	payload: id,
});

export function obtenerExperienciaAction(experiencia) {
	return dispatch => {
		dispatch(obtenerExperiencia(experiencia));
	};
}

const obtenerExperiencia = experiencia => ({
	type: OBTENER_EXPERIENCIA,
	payload: experiencia,
});

export function editarExperienciaAction(experiencia) {
	return dispatch => {
		dispatch(editarExperiencia(experiencia));
	};
}

const editarExperiencia = experiencia => ({
	type: EDITAR_EXPERIENCIA,
	payload: experiencia,
});

export function finEdicionExperienciaAction() {
	return dispatch => {
		dispatch(finEdicionExperiencia());
	};
}

const finEdicionExperiencia = () => ({
	type: FIN_EDICION_EXPERIENCIA,
});
