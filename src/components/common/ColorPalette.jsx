import React from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTimesCircle,
	faSave,
	faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

const ColorPalette = ({
	onClickShowModal,
	onClickSaveColor,
	onClickResetColor,
	guardarColor,
}) => {
	const [color, setColor] = useColor('hex', '#121212');

	/* eventos */

	return (
		<div className='containerColorPalette'>
			<div className='containerBtnCerrarConfiguracion'>
				<span
					className='btnCerrarConfiguracion'
					onClick={onClickShowModal}>
					<FontAwesomeIcon icon={faTimesCircle} />
				</span>
			</div>
			<div className='containerColorPicker'>
				<ColorPicker
					width={200}
					height={150}
					color={color}
					onChange={setColor}
					hideHSV
					hideRGB
					hideHEX
					dark
				/>
			</div>
			<div
				className='muestraColor'
				style={{
					background: color.hex,
				}}>
				MUESTRA {color.hex}
			</div>
			<div className='containerBotonera'>
				<button
					className='btnGuardarColor'
					type='button'
					style={{ color: '#000000' }}
					onClick={() => onClickSaveColor(color.hex)}>
					<FontAwesomeIcon className='icon' icon={faSave} />
				</button>
				<button
					className='btnReset'
					type='button'
					onClick={onClickResetColor}>
					<FontAwesomeIcon
						className='icon'
						icon={faTrashAlt}
					/>
				</button>
			</div>
			{/* {console.log(color.hex)} */}
		</div>
	);
};

export default ColorPalette;
