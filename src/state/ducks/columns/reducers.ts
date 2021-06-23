import type from "./types";
import {IColumn} from "interface";

interface IActions {
	type: string,
	id: number,
	column: IColumn
}

const initialState = {
	columns: [{id: 1, columnTitle: 'TODO'},
		{id: 2, columnTitle: 'In Progress'},
		{id: 3, columnTitle: 'Testing'},
		{id: 4, columnTitle: 'Done'}]
}

const columnsReducer = (state = initialState, action: IActions) => {
	switch (action.type) {
		case type.CHANGE:
			return {
				...state, comments: state.columns.map(column => {
					if (column.id === action.column.id) {
						column.columnTitle = action.column.columnTitle
					}
					return column
				})
			}
		default:
			return state;
	}
}

export default columnsReducer;