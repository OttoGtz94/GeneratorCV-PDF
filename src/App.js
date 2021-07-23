import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
/* import InformacionShow from './components/InformacionShow'; */
import Pdf from './components/Pdf';

/* Redux */
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Fragment>
			<Header />
			<Provider store={store}>
				<div className='containerMain'>
					<div className='subcontainerMain'>
						<Formulario />
						{/* <InformacionShow /> */}
					</div>
					<Pdf />
				</div>
			</Provider>
		</Fragment>
	);
}

export default App;
