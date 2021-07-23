import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const BotonEdit = ({ onClick }) => {
	return (
		<span className='btnEdit' onClick={onClick}>
			<FontAwesomeIcon icon={faEdit} />
		</span>
	);
};

export default BotonEdit;
