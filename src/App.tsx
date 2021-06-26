import React from 'react'
import {Wrapper} from "ui";
import {Auth, Columns} from "components";
import {Provider} from "react-redux";
import {persistor, store} from "./state/store";
import {PersistGate} from "redux-persist/integration/react";
import {createGlobalStyle} from "styled-components";

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

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Global/>
				<Wrapper>
					<h1>TrelloCopy</h1>
					<Auth/>
					<Columns/>
				</Wrapper>
			</PersistGate>
		</Provider>
	)
}

export default App;
