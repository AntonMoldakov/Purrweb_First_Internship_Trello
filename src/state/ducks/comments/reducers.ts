import {IComment} from "interface";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	comments: [{id: 80, cardId: 80, message: '', author: ''}]
}

const comments = createSlice({
	name: 'CommentsReducer',
	initialState,
	reducers: {
		addCommentA(state, action: { payload: IComment }) {
			state.comments.push(action.payload)
		},
		changeCommentA(state, action: { payload: { id: number, message: string } }) {
			state.comments.map(comment => {
				if (comment.id === action.payload.id) {
					comment.message = action.payload.message
				}
				return comment
			})
		},
		deleteCommentA(state, action: { payload: { id: number } }) {
			const {id} = action.payload
			const {comments} = state
			const index = comments.findIndex((comment) => id === comment.id);
			comments.splice(index, 1)
		}
	}
})

export default comments.reducer
export const {addCommentA, changeCommentA, deleteCommentA} = comments.actions
