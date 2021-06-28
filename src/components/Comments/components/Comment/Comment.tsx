import React, {useState} from "react";
import {Block, Cross, Header, TextArea, TitleH4} from "ui";
import {IComment} from "interface";
import {useDispatch} from "react-redux";
import {commentOperations} from "state/ducks/comments";

interface IProps {
	comment: IComment
}

function Comment({comment}: IProps) {
	const dispatch = useDispatch()

	function deleteComment(id: number) {
		dispatch(commentOperations.DeleteComment(id))
	}

	function changeComment(id: number, message: string) {
		dispatch(commentOperations.ChangeComment(id, message))
	}

	const [editMode, setEditMode] = useState(false);
	const [mess, setMess] = useState(comment.message);

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = (id: number) => {
		if (mess.trim() !== '') {
			changeComment(id, mess);
			setEditMode(false);
		}
	}
	const onTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMess(e.target.value);
	}
	return (
		<Block>
			<Header>
				<TitleH4>{comment.author}</TitleH4>
				<Cross onClick={deleteComment.bind(null, comment.id)}/>
			</Header>
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
