import actions from "./actions";
import {Dispatch} from "redux";

const AddComment = (cardId: number, message: string) => (dispatch: Dispatch) => {
	let comment = {
		id: +(new Date()),
		cardId,
		message,
		author: 'sad'
	}

	let action = actions.addComment(comment)

	dispatch(action)
}
const DeleteComment = (id: number) => (dispatch: Dispatch) => {
	dispatch(actions.deleteComment(id))
}
const ChangeComment = (id: number, message: string) => (dispatch: Dispatch) => {
	let Comment = {
		id,
		message,
	}

	dispatch(actions.changeComment(Comment))
}

const operations = {AddComment, DeleteComment, ChangeComment}
export default operations