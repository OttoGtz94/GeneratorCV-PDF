import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarSobreMiAction } from '../actions/sobreMi.actions';
import {
	agregarExperienciaAction,
	eliminarExperienciaAction,
	obtenerExperienciaAction,
	editarExperienciaAction,
	finEdicionExperienciaAction,
} from '../actions/experienciaLaboral.actions';
import {
	agregarEstudioAction,
	eliminarEstudioAction,
	obtenerEstudioAction,
	editarEstudioAction,
	finEdicionEstudioAction,
} from '../actions/estudios.action';
import {
	agregarHabilidadAction,
	eliminarHabilidadAction,
} from '../actions/habilidad.action';
import {
	imagenCargadaAction,
	eliminarImagenAction,
} from '../actions/imagen.actions';
import { generateID } from '../utils';
/* Componentes */
import SobreMiForm from './forms/SobreMiForm';
import ExperienciaForm from './forms/ExperienciaForm';
import ExperienciaShow from './common/ExperienciaShow';
import EstudiosForm from './forms/EstudiosForm';
import EstudioShow from './common/EstudioShow';
import HabilidadesForm from './forms/HabilidadesForm';
import HabilidadShow from './common/HabilidadShow';
import BotonAdd from './common/BotonAdd';
/* iconos */
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
/* alerta */
import Swal from 'sweetalert2';

const Formulario = () => {
	/* states */
	const [sobremi, setsobremi] = useState({
		nombre: '',
		profesion: '',
		tel1: '',
		tel2: '',
		email: '',
		sitioWeb: '',
		descripcionSobreMi: '',
	});

	const [experiencia, setexperiencia] = useState({
		idExperiencia: generateID(),
		tituloPuesto: '',
		empresa: '',
		fechaInicio: '',
		fechaSalida: '',
		descripcionExperiencia: '',
	});

	const [estudio, setestudio] = useState({
		idEstudio: generateID(),
		nombreEscuela: '',
		fechaInicio: '',
		fechaTermino: '',
		certificado: '',
	});

	const [habilidad, sethabilidad] = useState({
		idHabilidad: generateID(),
		nombreHabilidad: '',
	});

	const [nuevaexperiencia, setnuevaexperiencia] =
		useState(false);

	const [nuevoestudio, setnuevoestudio] = useState(false);

	const [nuevahabilidad, setnuevahabilidad] = useState(false);

	/* dispatch */
	const dispatch = useDispatch();

	const agregarSobremi = sobremi =>
		dispatch(agregarSobreMiAction(sobremi));

	const imagenCargada = imagen =>
		dispatch(imagenCargadaAction(imagen));

	const eliminarImagen = () => dispatch(eliminarImagenAction());

	const agregarExperiencia = experiencia =>
		dispatch(agregarExperienciaAction(experiencia));

	const eliminarExperiencia = idExperiencia =>
		dispatch(eliminarExperienciaAction(idExperiencia));

	const obtenerExperiencia = experiencia =>
		dispatch(obtenerExperienciaAction(experiencia));

	const editarExperiencia = experiencia =>
		dispatch(editarExperienciaAction(experiencia));

	const finEdicionExperiencia = () =>
		dispatch(finEdicionExperienciaAction());

	const agregarEstudio = estudio =>
		dispatch(agregarEstudioAction(estudio));

	const eliminarEstudio = idEstudio =>
		dispatch(eliminarEstudioAction(idEstudio));

	const obtenerEstudio = estudio =>
		dispatch(obtenerEstudioAction(estudio));

	const editarEstudio = estudio =>
		dispatch(editarEstudioAction(estudio));

	const finEdicionEstudio = () => {
		dispatch(finEdicionEstudioAction());
	};

	const agregarHabilidad = habilidad =>
		dispatch(agregarHabilidadAction(habilidad));

	const eliminarHabilidad = idHabilidad =>
		dispatch(eliminarHabilidadAction(idHabilidad));

	/* selector */
	const imagencargada = useSelector(
		state => state.imagen.cargada,
	);
	const experiencias = useSelector(
		state => state.experiencia.experiencia,
	);
	const obtenerexperiencia = useSelector(
		state => state.experiencia.obtenerexperiencia,
	);

	const estudios = useSelector(state => state.estudio.estudios);

	const obtenerestudio = useSelector(
		state => state.estudio.obtenerestudio,
	);

	const habilidades = useSelector(
		state => state.habilidad.habilidades,
	);
	/* Funciones */
	const onChangueSobreMi = e => {
		setsobremi({
			...sobremi,
			[e.target.name]: e.target.value,
		});
	};

	const onChangueExperiencia = e => {
		setexperiencia({
			...experiencia,
			[e.target.name]: e.target.value,
		});
	};

	const onChangueEstudio = e => {
		setestudio({
			...estudio,
			[e.target.name]: e.target.value,
		});
	};

	const onChangueHabilidad = e => {
		sethabilidad({
			...habilidad,
			[e.target.name]: e.target.value,
		});
	};
	const onClickAddAboutMe = () => {
		const {
			nombre,
			profesion,
			tel1,
			email,
			descripcionSobreMi,
		} = sobremi;
		if (
			nombre === '' ||
			profesion === '' ||
			tel1 === '' ||
			email === '' ||
			descripcionSobreMi === ''
		) {
			Swal.fire('Todos los campos con "*" son obligatorios.');
			return;
		}
		agregarSobremi(sobremi);
	};

	const onClickAddExperence = () => {
		const {
			tituloPuesto,
			empresa,
			fechaInicio,
			fechaSalida,
			descripcionExperiencia,
		} = experiencia;
		if (
			tituloPuesto === '' ||
			empresa === '' ||
			fechaInicio === '' ||
			fechaSalida === '' ||
			descripcionExperiencia === ''
		) {
			Swal.fire('Faltan Campos en "Empleo" por llenar');
			setnuevaexperiencia(false);
			return;
		}
		agregarExperiencia(experiencia);
		setnuevaexperiencia(false);
		setexperiencia({
			idExperiencia: generateID(),
			tituloPuesto: '',
			empresa: '',
			fechaInicio: '',
			fechaSalida: '',
			descripcionExperiencia: '',
		});
	};
	/* Evento para aparecer formulario de experiencia */
	const onClickNewExperence = () => {
		if (experiencias.length <= 2) {
			setnuevaexperiencia(!nuevaexperiencia);
		} else {
			Swal.fire('Solo puedes agregar 3 empleos.');
		}
	};
	/* Evento para aparecer formulario de estudio */
	const onClickNewStudy = () => {
		if (estudios.length <= 3) {
			setnuevoestudio(!nuevoestudio);
		} else {
			Swal.fire('Solo puedes agregar 4 estudios.');
		}
	};

	const onClickAddStudy = () => {
		const {
			nombreEscuela,
			fechaInicio,
			fechaTermino,
			certificado,
		} = estudio;
		if (
			nombreEscuela === '' ||
			fechaInicio === '' ||
			fechaTermino === '' ||
			certificado === ''
		) {
			Swal.fire('Faltan Campos en "Estudio" por llenar');
			return;
		}
		agregarEstudio(estudio);
		setnuevoestudio(false);
		setestudio({
			idEstudio: generateID(),
			nombreEscuela: '',
			fechaInicio: '',
			fechaTermino: '',
			certificado: '',
		});
	};
	/* Evento para aparecer formulario de habilidad */
	const onClickNewHability = () => {
		if (habilidades.length <= 7) {
			setnuevahabilidad(!nuevahabilidad);
		} else {
			Swal.fire('Solo puedes agregar 8 habilidades.');
		}
	};

	const onClickHability = () => {
		const { nombreHabilidad } = habilidad;
		if (nombreHabilidad === '') {
			Swal.fire('Faltan el campo en "Habilidad" por llenar');
			return;
		}
		agregarHabilidad(habilidad);
		setnuevahabilidad(false);
		sethabilidad({
			idHabilidad: generateID(),
			nombreHabilidad: '',
		});
	};

	const onSubmit = e => {
		e.preventDefault();

		agregarSobremi(sobremi);
	};
	return (
		<Fragment>
			<form onSubmit={onSubmit}>
				<SobreMiForm
					onChangue={onChangueSobreMi}
					sobremi={sobremi}
					imagenCargada={imagenCargada}
					eliminarImagen={eliminarImagen}
					imagencargada={imagencargada}
				/>

				<BotonAdd
					className='btnAgregarSobreMi'
					onCLick={onClickAddAboutMe}
					icon={faPlusCircle}
					text='Agregar Información'
				/>

				<BotonAdd
					className='btnNuevaExperiencia'
					onCLick={onClickNewExperence}
					icon={faPlusCircle}
					text='Agregar Empleo'
				/>
				{/* si los estados estas en true muestra formulario */}
				{nuevaexperiencia ? (
					<ExperienciaForm
						onChangueExperiencia={onChangueExperiencia}
						onClickAddExperence={onClickAddExperence}
						obtenerexperiencia={obtenerexperiencia}
						editarExperiencia={editarExperiencia}
						experiencia={experiencia}
						setexperiencia={setexperiencia}
						finEdicionExperiencia={finEdicionExperiencia}
						setnuevaexperiencia={setnuevaexperiencia}
					/>
				) : null}

				<BotonAdd
					className='btnNuevoEstudio'
					onCLick={onClickNewStudy}
					icon={faPlusCircle}
					text='Agregar Estudio'
				/>

				{nuevoestudio ? (
					<EstudiosForm
						onChangueEstudio={onChangueEstudio}
						onClickAddStudy={onClickAddStudy}
						obtenerestudio={obtenerestudio}
						editarEstudio={editarEstudio}
						estudio={estudio}
						setestudio={setestudio}
						setnuevoestudio={setnuevoestudio}
						finEdicionEstudio={finEdicionEstudio}
					/>
				) : null}
				<BotonAdd
					className='btnNuevaHabilidad'
					onCLick={onClickNewHability}
					icon={faPlusCircle}
					text='Agregar Habilidad'
				/>
				{nuevahabilidad ? (
					<HabilidadesForm
						onChangueHabilidad={onChangueHabilidad}
						onClickHability={onClickHability}
						setnuevahabilidad={setnuevahabilidad}
						habilidad={habilidad}
					/>
				) : null}
			</form>
			<div className='containerInformacion'>
				<h5 className='tituloSeccion'>
					Experiencia Laboral
				</h5>
				{experiencias
					? experiencias.map(experiencia => (
							<ExperienciaShow
								key={experiencia.idExperiencia}
								experiencia={experiencia}
								eliminarExperiencia={eliminarExperiencia}
								obtenerExperiencia={obtenerExperiencia}
								setnuevaexperiencia={setnuevaexperiencia}
								setnuevoestudio={setnuevoestudio}
							/>
					  ))
					: null}
				<h5 className='tituloSeccion'>
					Formación Academica
				</h5>
				{estudios
					? estudios.map(estudio => (
							<EstudioShow
								key={estudio.idEstudio}
								estudio={estudio}
								eliminarEstudio={eliminarEstudio}
								setnuevoestudio={setnuevoestudio}
								obtenerEstudio={obtenerEstudio}
							/>
					  ))
					: null}
				<h5 className='tituloSeccion'>
					Habilidades y Conocimientos
				</h5>
				{habilidades
					? habilidades.map(habilidad => (
							<HabilidadShow
								key={habilidad.idHabilidad}
								habilidad={habilidad}
								eliminarHabilidad={eliminarHabilidad}
							/>
					  ))
					: null}
			</div>
		</Fragment>
	);
};

export default Formulario;
