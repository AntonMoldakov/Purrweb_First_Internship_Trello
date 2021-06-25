import React, {useState} from "react";
import {Block, Cross, Flex, TextArea, TitleH4} from "ui";
import {IChangeComment, IComment, IDeleteComment} from "interface";

interface IProps {
	comments: {
		comment: IComment
		changeComment: IChangeComment,
		deleteComment: IDeleteComment,
	}
}

function Comment({comments}: IProps) {
	const comment = comments.comment
	const [editMode, setEditMode] = useState(false);
	const [mess, setMess] = useState(comment.message);

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = (id: number) => {
		if (mess.trim() !== '') {
			comments.changeComment(id, mess);
			setEditMode(false);
		}
	}
	const onTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMess(e.target.value);
	}
	return (
		<Block>
			<Flex>
				<TitleH4>{comment.author}</TitleH4>
				<Cross onClick={comments.deleteComment.bind(null, comment.id)}/>
			</Flex>
			<div>
				{!editMode &&
				<div>
					<div onClick={activateEditMode}>{mess}</div>
				</div>
				}

				{editMode &&
				<div>
					<TextArea onChange={onTitleChange}
					          autoFocus={true}
					          value={mess}
					          onBlur={deactivateEditMode.bind(null, comment.id)}/>
				</div>
				}
			</div>
		</Block>
	)

}

export default Comment