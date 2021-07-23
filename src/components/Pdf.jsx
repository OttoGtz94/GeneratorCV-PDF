import React, { useRef } from 'react';
import HojaPDF from './pdf/HojaPDF';
/* react to print */
import ReactToPrint from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

const Pdf = () => {
	const pdfRef = useRef();
	return (
		<div className='pdfContainer'>
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
			<HojaPDF pdfRef={pdfRef} />
		</div>
	);
};

export default Pdf;
