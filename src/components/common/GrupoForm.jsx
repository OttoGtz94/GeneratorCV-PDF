import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const GrupoForm = ({
	type,
	htmlFor,
	labelText,
	inputType,
	inputName,
	inputId,
	inputPlaceholder,
	onChangue,
	value,
	btnDelete,
	eliminarImagen,
	icon,
	imagencargada,
}) => {
	const onClickDeleteImage = () => {
		eliminarImagen();
	};

	return (
		<div className='grupoForm'>
			<label htmlFor={htmlFor}>
				{icon ? <FontAwesomeIcon icon={icon} /> : labelText}
			</label>
			{type === 'input' ? (
				<input
					type={inputType}
					name={inputName}
					id={inputId}
					placeholder={inputPlaceholder}
					onChange={onChangue}
					value={value}
				/>
			) : (
				<textarea
					name={inputName}
					id={inputId}
					placeholder={inputPlaceholder}
					onChange={onChangue}
					value={value}></textarea>
			)}
			{btnDelete ? (
				<button
					className='btnEliminarFoto'
					type='button'
					onClick={onClickDeleteImage}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			) : null}
		</div>
	);
};

export default GrupoForm;
