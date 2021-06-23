import type from "./types";

interface IState {
	comments: { id: number, cardId: number, message: string, author: string }[]
}

interface IActions {
	type: string,
	id?: number,
	comment?: { id: number, cardId: number, message: string, author: string }
}

const initialState: IState = {
	comments: [{id: 80, cardId: 80, message: '', author: ''}]
}

const commentsReducer = (state = initialState, action: IActions) => {
	switch (action.type) {
		case type.ADD:
			return {...state, comments: [...state.comments, action.comment]};
		case type.CHANGE:
			return {
				...state, comments: state.comments.map(comment => {// @ts-ignore
					if (comment.id === action.comment.id) {// @ts-ignore
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


// @ts-ignore
export default commentsReducer;