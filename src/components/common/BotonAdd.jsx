import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BotonAdd = ({ className, onCLick, icon, text }) => {
	return (
		<button
			className={className}
			type='button'
			onClick={onCLick}>
			<FontAwesomeIcon className='icono' icon={icon} />
			{text}
		</button>
	);
};

export default BotonAdd;
