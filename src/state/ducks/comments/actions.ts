import {IComment} from "interface";
import type from "./types";

const addComment = (comment: IComment) => ({
	type: type.ADD,
	comment
})

const deleteComment = (id: number) => ({
	type: type.DELETE,
	id
})

const changeComment = (comment: { id: number, message: string }) => ({
	type: type.CHANGE,
	comment
})

const actions = {addComment, deleteComment, changeComment}
export default actions
