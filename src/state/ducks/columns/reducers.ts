import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	columns: [{id: 1, columnTitle: 'TODO'},
		{id: 2, columnTitle: 'In Progress'},
		{id: 3, columnTitle: 'Testing'},
		{id: 4, columnTitle: 'Done'}]
}

const column = createSlice({
	name: 'ColumnReducer',
	initialState,
	reducers: {
		changeColumnA(state, action: { payload: { id: number, columnTitle: string } }) {
			state.columns.map(column => {
				if (column.id === action.payload.id) {
					column.columnTitle = action.payload.columnTitle
				}
				return column
			})
		}
	}
})

export default column.reducer
export const {changeColumnA} = column.actions
