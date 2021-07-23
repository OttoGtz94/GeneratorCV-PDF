import { combineReducers } from 'redux';
import sobreMiReducer from './sobreMi.reducer';
import experienciaReducer from './experienciaLaboral.reducer';
import estudiosReducer from './estudios.reducer';
import habilidadReducer from './habilidad.reducer';
import imagenReducer from './imagen.reducer';
import configuracionReducer from './configuracion.reducer';

export default combineReducers({
	sobreMi: sobreMiReducer,
	imagen: imagenReducer,
	experiencia: experienciaReducer,
	estudio: estudiosReducer,
	habilidad: habilidadReducer,
	configuracion: configuracionReducer,
});
