import React from 'react';
import { usePalette } from 'react-palette';
import ModeloFoto from '../../images/modelo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhoneAlt,
	faAt,
	faUser,
} from '@fortawesome/free-solid-svg-icons';

const Contacto = ({
	sobreMiState,
	cargarImagenState,
	maincolor,
}) => {
	const { data } = usePalette(
		cargarImagenState ? cargarImagenState : ModeloFoto,
	);
	return (
		<div
			className='contacto'
			style={
				maincolor
					? { backgroundColor: maincolor }
					: { backgroundColor: data.muted }
			}>
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
