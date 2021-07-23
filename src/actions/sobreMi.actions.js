import { SOBRE_MI_AGREGADO } from '../types';

export function agregarSobreMiAction(sobreMi) {
	return dispatch => {
		dispatch(agregarSobreMi(sobreMi));
	};
}

const agregarSobreMi = sobreMi => ({
	type: SOBRE_MI_AGREGADO,
	payload: sobreMi,
});
