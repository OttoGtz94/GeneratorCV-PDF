import React from 'react';
import { useSelector } from 'react-redux';
import ExperienciaShow from './common/ExperienciaShow';

const InformacionShow = () => {
	const experiencias = useSelector(
		state => state.experiencia.experiencia,
	);

	const estudios = useSelector(state => state.estudio.estudios);

	const habilidades = useSelector(
		state => state.habilidad.habilidades,
	);
	return (
		<div className='containerInformacion'>
			<h4>Experiencia Laboral</h4>
		</div>
	);
};

export default InformacionShow;
