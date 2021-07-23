import React from 'react';
import { useSelector } from 'react-redux';
import ModeloFoto from '../images/modelo2.jpg';
import { usePalette } from 'react-palette';

const Header = () => {
	const cargarImagenState = useSelector(
		state => state.imagen.imagen,
	);

	const maincolor = useSelector(
		state => state.configuracion.maincolor,
	);
	const { data } = usePalette(
		cargarImagenState ? cargarImagenState : ModeloFoto,
	);
	return (
		<header
			style={
				maincolor
					? { background: maincolor }
					: { background: data.muted }
			}>
			<h1>Generator CV</h1>
		</header>
	);
};

export default Header;
