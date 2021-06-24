import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';
import {store, persistor} from 'state/store'
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    color: #ccc;
    background: #222226;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
`


ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<Global/>
			<App/>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

reportWebVitals();
