import {
	ESTUDIO_AGREGADO,
	ELIMINAR_ESTUDIO,
	OBTENER_ESTUDIO,
	EDITAR_ESTUDIO,
	FIN_EDICION_ESTUDIO,
} from '../types';

export function agregarEstudioAction(estudio) {
	return dispatch => {
		dispatch(agregarEstudio(estudio));
	};
}

const agregarEstudio = estudio => ({
	type: ESTUDIO_AGREGADO,
	payload: estudio,
});

export function eliminarEstudioAction(id) {
	return dispatch => {
		dispatch(eliminarEstudio(id));
	};
}

const eliminarEstudio = id => ({
	type: ELIMINAR_ESTUDIO,
	payload: id,
});

export function obtenerEstudioAction(estudio) {
	return dispatch => {
		dispatch(obtenerEstudio(estudio));
	};
}

const obtenerEstudio = estudio => ({
	type: OBTENER_ESTUDIO,
	payload: estudio,
});

export function editarEstudioAction(estudio) {
	return dispatch => {
		dispatch(editarEstudio(estudio));
	};
}

const editarEstudio = estudio => ({
	type: EDITAR_ESTUDIO,
	payload: estudio,
});

export function finEdicionEstudioAction() {
	return dispatch => {
		dispatch(finEdicionEstudio());
	};
}

const finEdicionEstudio = () => ({
	type: FIN_EDICION_ESTUDIO,
});
