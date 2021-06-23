import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import * as reducers from "./ducks";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer,
	compose(
		applyMiddleware(thunk),
		composeWithDevTools()
	))

export default store
