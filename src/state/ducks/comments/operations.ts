import actions from "./actions";

const AddComment = (cardId: number, message: string) => (dispatch: any) => {
	let comment = {
		id: +(new Date()),
		cardId,
		message,
		author: 'sad'
	}

	let action = actions.addComment(comment)

	dispatch(action)
}
const DeleteComment = (id: number) => (dispatch: any) => {
	dispatch(actions.deleteComment(id))
}
const ChangeComment = (id: number, message: string) => (dispatch: any) => {
	let Comment = {
		id,
		message,
	}

	// @ts-ignore
	dispatch(actions.changeComment(Comment))
}

export default {
	AddComment,
	DeleteComment,
	ChangeComment
};