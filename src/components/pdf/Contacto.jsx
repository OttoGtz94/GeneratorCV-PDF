import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhoneAlt,
	faAt,
	faUser,
} from '@fortawesome/free-solid-svg-icons';

const Contacto = ({ sobreMiState }) => {
	return (
		<div className='contacto'>
			<p>
				<FontAwesomeIcon icon={faPhoneAlt} />{' '}
				{sobreMiState.tel1
					? sobreMiState.tel1
					: '56-20-92-4284'}
			</p>

			{sobreMiState.tel2 ? (
				<p>
					<FontAwesomeIcon icon={faPhoneAlt} />{' '}
					{sobreMiState.tel2}
				</p>
			) : null}

			<p>
				<FontAwesomeIcon icon={faAt} />{' '}
				{sobreMiState.email
					? sobreMiState.email
					: 'atorrespereyra@gmail.com'}
			</p>
			{sobreMiState ? null : (
				<p>
					<FontAwesomeIcon icon={faUser} />{' '}
					{sobreMiState.sitioWeb}
				</p>
			)}
			{sobreMiState.sitioWeb ? (
				<p>
					<FontAwesomeIcon icon={faUser} />{' '}
					{sobreMiState.sitioWeb}
				</p>
			) : null}
		</div>
	);
};

export default Contacto;
