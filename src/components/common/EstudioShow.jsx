import React from 'react';
import BotonEdit from './BotonEdit';
import BotonDelete from './BotonDelete';

const EstudioShow = ({
	estudio,
	eliminarEstudio,
	obtenerEstudio,
	setnuevoestudio,
}) => {
	const { idEstudio, nombreEscuela } = estudio;

	const onClickEliminarEstudio = () => {
		eliminarEstudio(idEstudio);
	};

	const onClickObtenerEstudio = () => {
		obtenerEstudio(estudio);
		setnuevoestudio(true);
	};
	return (
		<div className='subcontainerShow'>
			{/* <button
				className='btnEliminar'
				type='button'
				onClick={onClickEliminarEstudio}>
				Eliminar
			</button>
			<button
				className='btnEditar'
				type='button'
				onClick={onClickObtenerEstudio}>
				Editar
			</button> */}
			<h3>
				{' '}
				<span className='textoSpan'>{nombreEscuela}</span>
				<BotonEdit onClick={onClickObtenerEstudio} />{' '}
				<BotonDelete onClick={onClickEliminarEstudio} />
			</h3>
		</div>
	);
};

export default EstudioShow;
