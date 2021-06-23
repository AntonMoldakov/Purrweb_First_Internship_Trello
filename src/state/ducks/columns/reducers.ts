import type from "./types";

interface IState {
	columns: { id: number, columnTitle: string }[]
}

interface IActions {
	type: string,
	id?: number,
	column?: { id: number, columnTitle: string }
}

const initialState: IState = {
	columns: [{id: 1, columnTitle: 'TODO'},
		{id: 2, columnTitle: 'In Progress'},
		{id: 3, columnTitle: 'Testing'},
		{id: 4, columnTitle: 'Done'}]
}

const columnsReducer = (state = initialState, action: IActions) => {
	switch (action.type) {
		case type.CHANGE:
			return {
				...state, comments: state.columns.map(column => {// @ts-ignore
					if (column.id === action.column.id) {// @ts-ignore
						column.columnTitle = action.column.columnTitle
					}
					return column
				})
			}
		default:
			return state;
	}
}


// @ts-ignore
export default columnsReducer;