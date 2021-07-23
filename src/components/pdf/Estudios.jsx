import React from 'react';
import Estudio from './Estudio';

const Estudios = ({ estudiosState }) => {
	return (
		<div className='estudios tipoFormacion'>
			<h5>Formación Academica</h5>
			<div className='linea'></div>
			{estudiosState
				? estudiosState.map(estudio => (
						<Estudio
							key={estudio.idEstudio}
							estudio={estudio}
						/>
				  ))
				: null}
		</div>
	);
};

export default Estudios;
