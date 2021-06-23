import React from "react";
import {Flex, Button, Block, TitleH4} from "ui";
import CommentMessage from "./CommentMessage";
import {IChangeComment, IComment, IDeleteComment} from "interface";

interface IProps {
	commentProps: {
		comment: IComment
		changeComment: IChangeComment,
		deleteComment: IDeleteComment,
	}
}

function CardComment({commentProps}: IProps) {
	const comment = commentProps.comment
	const id = comment.id
	const message = comment.message

	return (
		<Block>
			<Flex $justifyContent={'space-between'}>
				<TitleH4>{comment.author}</TitleH4>
				<Button onClick={commentProps.deleteComment.bind(null, id)} $cross>X</Button>
			</Flex>
			<CommentMessage changeComment={commentProps.changeComment} id={id} message={message}/>
		</Block>
	)
}

export default CardComment