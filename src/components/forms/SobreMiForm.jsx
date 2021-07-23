import React, { Fragment } from 'react';
import GrupoForm from '../common/GrupoForm';
import { concatPlaceholder } from '../../utils';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const SobreMiForm = ({
	onChangue,
	sobremi,
	imagenCargada,
	eliminarImagen,
	imagencargada,
}) => {
	/* const [fileUrl, setFileUrl] = useState(null); */
	const processImage = e => {
		const imageFile = e.target.files[0];
		const imageUrl = URL.createObjectURL(imageFile);
		imagenCargada(imageUrl);
	};
	return (
		<Fragment>
			<GrupoForm
				type='input'
				htmlFor='nombre'
				labelText='Nombre Completo *'
				inputType='text'
				inputName='nombre'
				inputId='nombre'
				inputPlaceholder='Ana Laura Torres Pereyra'
				onChangue={onChangue}
			/>
			<GrupoForm
				type='input'
				htmlFor='profesion'
				labelText='Profesion / Cargo *'
				inputType='text'
				inputName='profesion'
				inputId='profesion'
				inputPlaceholder='Lic. en Moda'
				onChangue={onChangue}
			/>
			<GrupoForm
				type='input'
				htmlFor='tel1'
				labelText='Telefono 1 *'
				inputType='text'
				inputName='tel1'
				inputId='tel1'
				inputPlaceholder='56-2029-4248'
				onChangue={onChangue}
			/>
			<GrupoForm
				type='input'
				htmlFor='tel2'
				labelText='Telefono 2'
				inputType='text'
				inputName='tel2'
				inputId='tel2'
				inputPlaceholder='55-4568-9080'
				onChangue={onChangue}
			/>
			<GrupoForm
				type='input'
				htmlFor='email'
				labelText='Email *'
				inputType='text'
				inputName='email'
				inputId='email'
				inputPlaceholder={
					sobremi.nombre === ''
						? 'atorres@gmail.com'
						: concatPlaceholder('mail', sobremi.nombre)
				}
				onChangue={onChangue}
			/>
			<GrupoForm
				type='input'
				htmlFor='siteWeb'
				labelText='Sitio Web'
				inputType='text'
				inputName='sitioWeb'
				inputId='siteWeb'
				inputPlaceholder={
					sobremi.nombre === ''
						? 'www.anapereyra.com.mx'
						: concatPlaceholder('web', sobremi.nombre)
				}
				onChangue={onChangue}
			/>
			<GrupoForm
				type='input'
				htmlFor='file'
				labelText='Foto *'
				inputType='file'
				inputName='file'
				inputId='file'
				inputPlaceholder='facebook.com/tufoto.jpg'
				onChangue={processImage}
				btnDelete={true}
				eliminarImagen={eliminarImagen}
				icon={faUpload}
				imagencargada={imagencargada}
			/>
			{/* <button type='button' onClick={handleSubmission}>
				Agregar Imagen{' '}
			</button> */}
			{/* <img src={fileUrl} alt='' /> */}
			<GrupoForm
				type='textarea'
				htmlFor='descripcionSobreMi'
				labelText='Descripcion *'
				inputName='descripcionSobreMi'
				inputId='descripcionSobreMi'
				inputPlaceholder={
					sobremi.nombre === ''
						? 'Una breve descripcion sobre Ana Torres'
						: concatPlaceholder('textarea', sobremi.nombre)
				}
				onChangue={onChangue}
			/>
		</Fragment>
	);
};

export default SobreMiForm;
