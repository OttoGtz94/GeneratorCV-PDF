import React from 'react';
import ExperienciaLaboral from './ExperienciaLaboral';

const ExperienciasLaborales = ({ experienciaState }) => {
	return (
		<div className='experienciaLaboral tipoFormacion'>
			<h5>Experiencia Laboral</h5>
			<div className='linea'></div>
			{experienciaState
				? experienciaState.map(experiencia => (
						<ExperienciaLaboral
							key={experiencia.idExperiencia}
							experiencia={experiencia}
						/>
				  ))
				: null}
		</div>
	);
};

export default ExperienciasLaborales;
