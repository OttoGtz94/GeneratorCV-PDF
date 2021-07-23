import React from 'react';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import GrupoForm from '../common/GrupoForm';
import BotonAdd from '../common/BotonAdd';

const HabilidadesForm = ({
	onChangueHabilidad,
	onClickHability,
	setnuevahabilidad,
	habilidad,
}) => {
	return (
		<div>
			<GrupoForm
				type='input'
				htmlFor='nombreHabilidad'
				labelText='Habilidad'
				inputType='text'
				inputName='nombreHabilidad'
				inputId='nombreHabilidad'
				inputPlaceholder='Excel'
				onChangue={onChangueHabilidad}
			/>
			<BotonAdd
				className='btnGuardar'
				onCLick={() => onClickHability(habilidad)}
				icon={faPlusSquare}
				text='Guardar Habilidad'
			/>
			{/* <button
				type='button'
				onClick={() => onClickHability(habilidad)}>
				Agregar Habilidad
			</button> */}
		</div>
	);
};

export default HabilidadesForm;
