import type from "./types";
import {IComment} from "interface";

interface IActions {
	type: string,
	id?: number,
	comment: IComment
}

const initialState = {
	comments: [{id: 80, cardId: 80, message: '', author: ''}]
}

const commentsReducer = (state = initialState, action: IActions) => {
	switch (action.type) {
		case type.ADD:
			return {...state, comments: [...state.comments, action.comment]};
		case type.CHANGE:
			return {
				...state, comments: state.comments.map(comment => {
					if (comment.id === action.comment.id) {
						comment.message = action.comment.message
					}
					return comment
				})
			}
		case type.DELETE:
			return {...state, comments: state.comments.filter(comment => comment.id !== action.id)}
		default:
			return state;
	}
}

export default commentsReducer;