import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Pdf from './components/Pdf';
/* Redux */
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Fragment>
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
