import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const BotonDelete = ({ onClick }) => {
	return (
		<span className='btnDelete' onClick={onClick}>
			<FontAwesomeIcon icon={faTrash} />
		</span>
	);
};

export default BotonDelete;
