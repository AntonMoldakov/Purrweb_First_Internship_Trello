import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "@reduxjs/toolkit";
import {default as cardsReducer} from './cards'
import {default as commentsReducer} from "./comments";
import {default as columnsReducer} from "./columns";
import {default as sessionReducer} from "./session";

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cardsReducer', 'commentsReducer', 'columnsReducer']
}

const rootReducer = combineReducers({
	cardsReducer, commentsReducer, columnsReducer, sessionReducer
})

export default persistReducer(persistConfig, rootReducer)


