import React, {useState} from 'react'
import {TitleH4, Cross, Modal, Footer, CardBlock} from "ui";
import {CardChange} from './components';
import {
	ICard, IChangeCard,
	IComment, IDeleteCard,
} from "interface";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {commentOperations} from "state/ducks/comments";


interface IProps {
	cards: {
		card: ICard,
		deleteCard: IDeleteCard,
		changeCard: IChangeCard,
	}
}

function contentLength(content: string): string {
	if (content && content.length > 25) {
		return (content.slice(0, 22) + '...')
	}
	return content
}

function Card({cards}: IProps) {
	const dispatch = useDispatch()
	const state = useSelector((state: RootStateOrAny) => state)
	let comments = state.commentsReducer.comments

	function addComment(cardId: number, message: string) {
		dispatch(commentOperations.AddComment(cardId, message))
	}

	function deleteComment(id: number) {
		dispatch(commentOperations.DeleteComment(id))
	}

	function changeComment(id: number, message: string) {
		dispatch(commentOperations.ChangeComment(id, message))
	}

	const card = cards.card
	const [isOpen, setIsOpen] = useState(false)
	const filteredComments = comments.filter((comment: IComment) => comment.cardId === card.id)


	const onSubmit = (values: { title: string, text: string }) => {
		cards.changeCard(card.id, values.title, values.text)
	}
	const SendComment = (values: { comment: string }) => {
		addComment(card.id, values.comment)
	}
	return (
		<div>
			{
				isOpen && <Modal setIsOpen={setIsOpen} title={''}>
					<CardChange cards={cards}
					            onSubmit={onSubmit}
					            SendComment={SendComment} comments={{
						comments: filteredComments,
						deleteComment,
						changeComment
					}}/>
				</Modal>
			}
			<CardBlock onClick={() => {
				setIsOpen(true)
			}}>
				<Cross onClick={() => cards.deleteCard(card.id)}/>
				<TitleH4>{card.cardTitle}</TitleH4>
				<div>
					{contentLength(card.cardContent)}
				</div>
				<Footer>
					<div>
						{card.author}
					</div>
					<div>
						comments: {filteredComments.length}
					</div>
				</Footer>
			</CardBlock>
		</div>

	)
}

export default Card