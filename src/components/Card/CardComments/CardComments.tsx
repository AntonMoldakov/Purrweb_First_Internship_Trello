import React from "react";
import {Comments} from "ui";
import CardComment from "./CardComment/CardComment";
import {IAddComment, IChangeComment, IComment, IDeleteComment} from "interface";

interface IProps {
	comments: {
		comments: IComment[]
		addComment: IAddComment,
		changeComment: IChangeComment,
		deleteComment: IDeleteComment,
	}
}

function CardComments({comments}: IProps) {
	return (
		<Comments>
			{
				comments.comments.map(comment => {
					return <CardComment key={comment.id} commentProps={{
						comment,
						changeComment: comments.changeComment,
						deleteComment: comments.deleteComment
					}}/>
				})
			}
		</Comments>
	)
}

export default CardComments