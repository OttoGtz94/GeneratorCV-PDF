import React from 'react';

const ExperienciaLaboral = ({ experiencia }) => {
	const {
		tituloPuesto,
		empresa,
		fechaInicio,
		fechaSalida,
		descripcionExperiencia,
	} = experiencia;
	return (
		<div>
			<h6>
				{tituloPuesto} en {empresa}
			</h6>
			<span>
				{fechaInicio}/{fechaSalida}
			</span>
			<p>{descripcionExperiencia}</p>
		</div>
	);
};

export default ExperienciaLaboral;
