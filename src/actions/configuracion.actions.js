import {
	MOSTRAR_CONFIGURACION,
	GUARDAR_COLOR,
	RESETEAR_COLOR,
} from '../types';

export function mostrarConfiguracionAction(showmodal) {
	return dispatch => {
		dispatch(mostrarConfiguracion(showmodal));
	};
}

const mostrarConfiguracion = showmodal => ({
	type: MOSTRAR_CONFIGURACION,
	payload: showmodal,
});

export function guardarColorAction(color) {
	return dispatch => {
		dispatch(guardarColor(color));
	};
}

const guardarColor = color => ({
	type: GUARDAR_COLOR,
	payload: color,
});

export function resetearColorAction() {
	return dispatch => {
		dispatch(resetearColor());
	};
}

const resetearColor = () => ({
	type: RESETEAR_COLOR,
});
