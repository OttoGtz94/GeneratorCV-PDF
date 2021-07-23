import React, { useEffect } from 'react';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { generateID } from '../../utils';
import GrupoForm from '../common/GrupoForm';
import BotonAdd from '../common/BotonAdd';

const ExperienciaForm = ({
	onChangueExperiencia,
	onClickAddExperence,
	obtenerexperiencia,
	editarExperiencia,
	experiencia,
	setexperiencia,
	finEdicionExperiencia,
	setnuevaexperiencia,
}) => {
	const onClickEdit = () => {
		editarExperiencia(experiencia);
		finEdicionExperiencia();
		setnuevaexperiencia(false);
		setexperiencia({
			idExperiencia: generateID(),
			tituloPuesto: '',
			empresa: '',
			fechaInicio: '',
			fechaSalida: '',
			descripcionExperiencia: '',
		});
	};

	const {
		tituloPuesto,
		empresa,
		fechaInicio,
		fechaSalida,
		descripcionExperiencia,
	} = experiencia;

	useEffect(() => {
		if (obtenerexperiencia) {
			setexperiencia(obtenerexperiencia);
		}
		/* eslint-disable-next-line */
	}, [obtenerexperiencia]);
	return (
		<div>
			<GrupoForm
				type='input'
				htmlFor='tituloPuesto'
				labelText='Titulo puesto'
				inputType='text'
				inputName='tituloPuesto'
				inputId='tituloPuesto'
				inputPlaceholder='Gerente de Operaciones'
				onChangue={onChangueExperiencia}
				value={tituloPuesto}
			/>
			<GrupoForm
				type='input'
				htmlFor='empresa'
				labelText='Empresa'
				inputType='text'
				inputName='empresa'
				inputId='empresa'
				inputPlaceholder='Gpo Textil SA de CV'
				onChangue={onChangueExperiencia}
				value={empresa}
			/>

			<GrupoForm
				type='input'
				htmlFor='fechaInicio'
				labelText='Fecha de Inicio'
				inputType='text'
				inputName='fechaInicio'
				inputId='fechaInicio'
				inputPlaceholder='mm/aa ejem. 02/17'
				onChangue={onChangueExperiencia}
				value={fechaInicio}
			/>

			<GrupoForm
				type='input'
				htmlFor='fechaSalida'
				labelText='Fecha de Salida'
				inputType='text'
				inputName='fechaSalida'
				inputId='fechaSalida'
				inputPlaceholder='mm/aa ejem. 30/12'
				onChangue={onChangueExperiencia}
				value={fechaSalida}
			/>

			<GrupoForm
				type='textarea'
				htmlFor='descripcionExperiencia'
				labelText='Descripción'
				inputName='descripcionExperiencia'
				inputId='descripcionExperiencia'
				inputPlaceholder='Los cargos que realizabas'
				onChangue={onChangueExperiencia}
				value={descripcionExperiencia}
			/>
			<BotonAdd
				className={
					obtenerexperiencia
						? 'btnGuardarEditado'
						: 'btnGuardar'
				}
				onCLick={
					obtenerexperiencia
						? onClickEdit
						: onClickAddExperence
				}
				icon={faPlusSquare}
				text={
					obtenerexperiencia
						? 'Guardar Editado'
						: 'Guardar Empleo'
				}
			/>
			{/* <button
				type='button'
				onClick={
					obtenerexperiencia
						? onClickEdit
						: onClickAddExperence
				}>
				{obtenerexperiencia
					? 'Editar Experiencia'
					: 'Agregar Experiencia'}
			</button> */}
		</div>
	);
};

export default ExperienciaForm;
