import React, { useEffect } from 'react';
import { generateID } from '../../utils';
import GrupoForm from '../common/GrupoForm';
import BotonAdd from '../common/BotonAdd';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const EstudiosForm = ({
	onChangueEstudio,
	onClickAddStudy,
	obtenerestudio,
	editarEstudio,
	estudio,
	setestudio,
	setnuevoestudio,
	finEdicionEstudio,
}) => {
	const {
		nombreEscuela,
		fechaInicio,
		fechaTermino,
		certificado,
	} = estudio;
	const onClickEdit = () => {
		editarEstudio(estudio);
		finEdicionEstudio();
		setnuevoestudio(false);
		setestudio({
			idEstudio: generateID(),
			nombreEscuela: '',
			fechaInicio: '',
			fechaTermino: '',
			certificado: '',
		});
	};

	useEffect(() => {
		if (obtenerestudio) {
			console.log('Se ejecuto effect');
			setestudio(obtenerestudio);
		}
		// eslint-disable-next-line
	}, [obtenerestudio]);
	return (
		<div>
			<GrupoForm
				type='input'
				htmlFor='nombreEscuela'
				labelText='Nombre Escuela'
				inputType='text'
				inputName='nombreEscuela'
				inputId='nombreEscuela'
				inputPlaceholder='UNIREM'
				onChangue={onChangueEstudio}
				value={nombreEscuela}
			/>
			<GrupoForm
				type='input'
				htmlFor='fechaInicio'
				labelText='Fecha de Inicio'
				inputType='text'
				inputName='fechaInicio'
				inputId='fechaInicio'
				inputPlaceholder='mm/aa'
				onChangue={onChangueEstudio}
				value={fechaInicio}
			/>
			<GrupoForm
				type='input'
				htmlFor='fechaTermino'
				labelText='Fecha de Termino'
				inputType='text'
				inputName='fechaTermino'
				inputId='fechaTermino'
				inputPlaceholder='mm/aa'
				onChangue={onChangueEstudio}
				value={fechaTermino}
			/>
			<GrupoForm
				type='input'
				htmlFor='certificado'
				labelText='Nivel / Certificado / Titulo Obtenido'
				inputType='text'
				inputName='certificado'
				inputId='certificado'
				inputPlaceholder='Lic. En Moda'
				onChangue={onChangueEstudio}
				value={certificado}
			/>
			<BotonAdd
				className={
					obtenerestudio
						? 'btnGuardarEditado'
						: 'btnGuardar'
				}
				onCLick={
					obtenerestudio ? onClickEdit : onClickAddStudy
				}
				icon={faPlusSquare}
				text={
					obtenerestudio
						? 'Guardar Editado'
						: 'Guardar Estudio'
				}
			/>

			{/* <button
				type='button'
				onClick={
					obtenerestudio ? onClickEdit : onClickAddStudy
				}>
				{obtenerestudio
					? 'Editar Estudio'
					: 'Agregar Estudio'}
			</button> */}
		</div>
	);
};

export default EstudiosForm;
