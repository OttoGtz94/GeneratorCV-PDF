import React from 'react';
import { usePalette } from 'react-palette';
import { lorem } from '../../utils';
import ModeloFoto from '../../images/modelo2.jpg';

const AcercaDe = ({ sobreMiState, cargarImagenState }) => {
	const { data } = usePalette(
		cargarImagenState ? cargarImagenState : ModeloFoto,
	);
	return (
		<div
			className='acercaDe'
			style={{ backgroundColor: data.muted }}>
			<h2>
				{sobreMiState.nombre
					? sobreMiState.nombre
					: 'Nombres y apellidos'}
			</h2>
			<h3>
				{sobreMiState.profesion
					? sobreMiState.profesion
					: 'Tú profesión'}
			</h3>
			<img
				src={
					cargarImagenState ? cargarImagenState : ModeloFoto
				}
				alt='foto'
			/>
			<div className='linea'></div>
			<h4>Sobre ti</h4>
			<p>
				{sobreMiState.descripcionSobreMi
					? sobreMiState.descripcionSobreMi
					: lorem()}
			</p>
		</div>
	);
};

export default AcercaDe;
