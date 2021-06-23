import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	userName: 'Guest'
}

const session = createSlice({
	name: 'sessionReducer',
	initialState,
	reducers: {
		authA(state, action: { payload: string }) {
			state.userName = action.payload
		}
	}
})

export default session.reducer
export const {authA} = session.actions