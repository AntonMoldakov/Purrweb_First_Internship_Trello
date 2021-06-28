import React, {useMemo} from "react";
import {CommentsBlock} from "ui";
import {Comment} from "./components";
import {IComment} from "interface";
import {useAppSelector} from "../../hooks";

interface IProps {
	cardId: number
}

function Comments({cardId}: IProps) {
	const [comments] = useAppSelector(
		(state) => {
			const {commentsReducer} = state
			return [commentsReducer.comments]
		});
	const filteredComments = useMemo(() =>
		() =>
			comments.filter((comment: IComment) => comment.cardId === cardId), [comments, cardId])

	return (
		<CommentsBlock>
			{
				filteredComments().map(comment => <Comment key={comment.id} comment={comment}/>)
			}
		</CommentsBlock>
	)
}

export default Comments
