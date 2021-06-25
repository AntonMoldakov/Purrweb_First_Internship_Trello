import React from "react";
import {CommentsBlock} from "ui";
import {IChangeComment, IComment, IDeleteComment} from "interface";
import {Comment} from "./components";

interface IProps {
	comments: {
		comments: IComment[],
		changeComment: IChangeComment,
		deleteComment: IDeleteComment,
	}
}

function Comments({comments}: IProps) {
	return (
		<CommentsBlock>
			{
				comments.comments.map(comment => {
					return <Comment key={comment.id} comments={{
						comment,
						changeComment: comments.changeComment,
						deleteComment: comments.deleteComment
					}}/>
				})
			}
		</CommentsBlock>
	)
}

export default Comments