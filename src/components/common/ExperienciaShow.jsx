import React from 'react';
import BotonEdit from './BotonEdit';
import BotonDelete from './BotonDelete';

const ExperienciaShow = ({
	experiencia,
	eliminarExperiencia,
	obtenerExperiencia,
	setnuevaexperiencia,
}) => {
	const { idExperiencia, tituloPuesto, empresa } = experiencia;

	const onClickEliminarExperiencia = () => {
		eliminarExperiencia(idExperiencia);
	};

	const onClickObtenerExperiencia = () => {
		obtenerExperiencia(experiencia);
		setnuevaexperiencia(true);
	};
	return (
		<div className='subcontainerShow'>
			{/* <button
				type='button'
				onClick={onClickEliminarExperiencia}>
				Eliminar
			</button>
			<button
				type='button'
				onClick={onClickObtenerExperiencia}>
				Editar
			</button> */}
			<h3>
				<span className='textoSpan'>
					{tituloPuesto} en {empresa}
				</span>
				<BotonEdit onClick={onClickObtenerExperiencia} />{' '}
				<BotonDelete onClick={onClickEliminarExperiencia} />
			</h3>
		</div>
	);
};

export default ExperienciaShow;
