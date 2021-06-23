import {Dispatch} from "redux";
import {addCommentA, changeCommentA, deleteCommentA} from "./reducers";

const AddComment = (cardId: number, message: string) => (dispatch: Dispatch) => {
	let comment = {
		id: +(new Date()),
		cardId,
		message,
		author: 'sad'
	}

	dispatch(addCommentA(comment))
}
const DeleteComment = (id: number) => (dispatch: Dispatch) => {
	dispatch(deleteCommentA({id}))
}
const ChangeComment = (id: number, message: string) => (dispatch: Dispatch) => {
	let Comment = {
		id,
		message
	}

	dispatch(changeCommentA(Comment))
}

const operations = {AddComment, DeleteComment, ChangeComment}
export default operations