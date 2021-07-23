import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const Estudio = ({ estudio }) => {
	const {
		nombreEscuela,
		fechaInicio,
		fechaTermino,
		certificado,
	} = estudio;
	return (
		<div>
			<p>
				<FontAwesomeIcon
					icon={faCertificate}
					className='icon'
				/>{' '}
				<span>{certificado}</span>
			</p>
			<h6>
				<span>
					{fechaInicio}/{fechaTermino}
				</span>
				: {nombreEscuela}
			</h6>
		</div>
	);
};

export default Estudio;
