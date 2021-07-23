import React from 'react';
import BotonDelete from './BotonDelete';

const HabiliadShow = ({ habilidad, eliminarHabilidad }) => {
	const { idHabilidad, nombreHabilidad } = habilidad;
	const onClickEliminarHabilidad = () => {
		eliminarHabilidad(idHabilidad);
	};
	return (
		<div className='subcontainerShow'>
			<h3>
				<span className='textoSpan'>{nombreHabilidad}</span>
				<BotonDelete onClick={onClickEliminarHabilidad} />
			</h3>
			{/* <button
				type='button'
				onClick={onClickEliminarHabilidad}>
				Eliminar
			</button> */}
		</div>
	);
};

export default HabiliadShow;
