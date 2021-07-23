import React, { Fragment, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Pdf from './components/Pdf';
/* Redux */
import { Provider } from 'react-redux';
import store from './store';

function App() {
	useEffect(() => {
		if (window.screen.width <= 1277) {
			alert(
				'Para mayor experiencia use un dispositivo que sea mayor a 1277px',
			);
		}
	}, []);
	return (
		<Fragment>
			{/* <p>{sistema ? 'true' : 'false'}</p> */}
			<Provider store={store}>
				<Header />
				<div className='containerMain'>
					<div className='subcontainerMain'>
						<Formulario />
					</div>
					<Pdf />
				</div>
			</Provider>
		</Fragment>
	);
}

export default App;
