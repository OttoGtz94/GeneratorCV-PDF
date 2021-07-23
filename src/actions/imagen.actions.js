import { IMAGEN_CARGADA, IMAGEN_ELIMINADA } from '../types';

export function imagenCargadaAction(imagen) {
	return dispatch => {
		dispatch(imagenCargada(imagen));
	};
}

const imagenCargada = imagen => ({
	type: IMAGEN_CARGADA,
	payload: imagen,
});

export function eliminarImagenAction() {
	return dispatch => {
		dispatch(eliminarImagen());
	};
}

const eliminarImagen = () => ({
	type: IMAGEN_ELIMINADA,
});
