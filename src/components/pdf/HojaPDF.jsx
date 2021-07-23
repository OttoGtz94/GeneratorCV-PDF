import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
import ExperienciasLaborales from './ExperienciasLaborales';
import Estudios from './Estudios';

const HojaPDF = React.forwardRef(props => {
	const { pdfRef } = props;

	const sobreMiState = useSelector(
		state => state.sobreMi.sobreMi,
	);
	const cargarImagenState = useSelector(
		state => state.imagen.imagen,
	);
	const experienciaState = useSelector(
		state => state.experiencia.experiencia,
	);
	const banderaExperiencia = useSelector(
		state => state.experiencia.banderaexperiencia,
	);

	const estudiosState = useSelector(
		state => state.estudio.estudios,
	);

	const banderaEstudio = useSelector(
		state => state.estudio.banderaestudio,
	);

	const habilidadesState = useSelector(
		state => state.habilidad.habilidades,
	);

	const banderaHabilidad = useSelector(
		state => state.habilidad.banderahabilidades,
	);

	useEffect(() => {
		console.log('pdf recargado');
	}, [banderaExperiencia, banderaEstudio, banderaHabilidad]);
	return (
		<div ref={pdfRef} className='pdf'>
			<AcercaDe
				sobreMiState={sobreMiState}
				cargarImagenState={cargarImagenState}
			/>
			<div className='formacion'>
				<ExperienciasLaborales
					experienciaState={experienciaState}
				/>
				<Estudios estudiosState={estudiosState} />
				<ul className='habilidades'>
					{habilidadesState
						? habilidadesState.map(habilidad => (
								<li key={habilidad.idHabilidad}>
									{habilidad.nombreHabilidad}
								</li>
						  ))
						: null}
				</ul>
			</div>
			<Contacto
				sobreMiState={sobreMiState}
				cargarImagenState={cargarImagenState}
			/>
		</div>
	);
});

export default HojaPDF;
