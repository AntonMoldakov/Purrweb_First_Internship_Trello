import React, {useMemo} from "react";
import {CommentsBlock} from "ui";
import {Comment} from "./components";
import {IComment} from "interface";
import {RootState} from "state/store";
import {TypedUseSelectorHook, useSelector} from "react-redux";

interface IProps {
	cardId: number
}

function Comments({cardId}: IProps) {
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
	const comments = useAppSelector(state => state).commentsReducer.comments

	const filteredComments = useMemo(() =>
		() =>
			comments.filter((comment: IComment) => comment.cardId === cardId), [comments])

	return (
		<CommentsBlock>
			{
				filteredComments().map(comment => <Comment key={comment.id} comment={comment}/>)
			}
		</CommentsBlock>
	)
}

export default Comments
