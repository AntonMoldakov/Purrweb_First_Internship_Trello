import React from "react";
import {CommentsBlock} from "ui";
import {Comment} from "./components";
import {IComment} from "interface";
import {store} from "state/store";

interface IProps {
	cardId: number
}

function Comments({cardId}: IProps) {
	const comments = store.getState().commentsReducer.comments
	const filteredComments = comments.filter((comment: IComment) => comment.cardId === cardId)
	return (
		<CommentsBlock>
			{
				filteredComments.map(comment => <Comment key={comment.id} comment={comment}/>)
			}
		</CommentsBlock>
	)
}

export default Comments
