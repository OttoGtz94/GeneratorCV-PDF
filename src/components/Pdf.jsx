import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HojaPDF from './pdf/HojaPDF';
/* redux */
import {
	mostrarConfiguracionAction,
	guardarColorAction,
	resetearColorAction,
} from '../actions/configuracion.actions';
/* react to print */
import ReactToPrint from 'react-to-print';
/* paleta de colores */
import ColorPalette from './common/ColorPalette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShareSquare,
	faCog,
} from '@fortawesome/free-solid-svg-icons';

const Pdf = () => {
	const pdfRef = useRef();

	const dispatch = useDispatch();

	const mostrarConfiguracion = showmodal =>
		dispatch(mostrarConfiguracionAction(showmodal));

	const guardarColor = color =>
		dispatch(guardarColorAction(color));

	const resetearColor = () => dispatch(resetearColorAction());

	const showmodal = useSelector(
		state => state.configuracion.showmodal,
	);

	const maincolor = useSelector(
		state => state.configuracion.maincolor,
	);

	/* Evento boton */
	const onClickShowConfig = () => {
		mostrarConfiguracion(!showmodal);
	};

	const onClickSaveColor = color => {
		guardarColor(color);
	};

	const onClickResetColor = () => {
		resetearColor();
	};

	useEffect(() => {}, [maincolor]);
	return (
		<div className='pdfContainer'>
			{showmodal ? (
				<ColorPalette
					onClickShowModal={onClickShowConfig}
					onClickSaveColor={onClickSaveColor}
					onClickResetColor={onClickResetColor}
					guardarColor={guardarColor}
				/>
			) : null}
			<ReactToPrint
				trigger={() => (
					<div className='containerBtnGenerar'>
						<button className='btnGenerarPDF'>
							<FontAwesomeIcon icon={faShareSquare} />{' '}
							Guardar PDF
						</button>
					</div>
				)}
				content={() => pdfRef.current}
			/>
			<div className='contarineBtnConfiguracion'>
				<button
					className='btnConfiguracion'
					type='button'
					onClick={onClickShowConfig}>
					<FontAwesomeIcon icon={faCog} />
				</button>
			</div>
			<HojaPDF pdfRef={pdfRef} maincolor={maincolor} />
		</div>
	);
};

export default Pdf;
