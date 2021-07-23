import React from 'react';
import { useSelector } from 'react-redux';
import ModeloFoto from '../images/modelo2.jpg';
import { usePalette } from 'react-palette';

const Header = () => {
	const cargarImagenState = useSelector(
		state => state.imagen.imagen,
	);
	const { data } = usePalette(
		cargarImagenState ? cargarImagenState : ModeloFoto,
	);
	return (
		<header style={{ background: data.muted }}>
			<h1>Generator CV</h1>
		</header>
	);
};

export default Header;
