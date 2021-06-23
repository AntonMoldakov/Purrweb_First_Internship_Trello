import type from "./types";

interface IActions {
	type: string,
	userName?: string
}

const initialState = {
	userName: 'Guest'
}

const columnsReducer = (state = initialState, action: IActions) => {
	switch (action.type) {
		case type.AUTH:
			return {...state, userName: action.userName}
		default:
			return state;
	}
}

export default columnsReducer;