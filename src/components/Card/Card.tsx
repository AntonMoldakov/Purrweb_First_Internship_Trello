import React, {useState} from 'react'
import styles from './Card.module.css'
import {TitleH4, Button, Modal, Flex} from "ui";
import CardChange from './CardChange/CardChange';
import {
	IAddComment, ICard, IChangeCard,
	IChangeComment, IComment, IDeleteCard,
	IDeleteComment
} from "interface";


interface IProps {
	cardProps: {
		card: ICard,
		deleteCard: IDeleteCard,
		changeCard: IChangeCard,
	},
	comments: {
		comments: IComment[]
		addComment: IAddComment,
		changeComment: IChangeComment,
		deleteComment: IDeleteComment,
	}
}

function contentLength(content: string): string {
	if (content && content.length > 25) {
		return (content.slice(0, 22) + '...')
	}
	return content
}

function Card({cardProps, comments}: IProps) {
	const card = cardProps.card
	const [isOpen, setIsOpen] = useState(false)
	const filteredComments = comments.comments.filter(comment => comment.cardId === card.id)

	const onSubmit = (values: { title: string, text: string }) => {
		cardProps.changeCard(card.id, values.title, values.text)
	}
	const SendComment = (values: { comment: string }) => {
		if (values.comment || values.comment !== '') {
			comments.addComment(card.id, values.comment)
		}
		values.comment = ''
	}
	return (
		<div>
			{
				isOpen && <Modal children={<CardChange
					onSubmit={onSubmit}
					cardTitle={card.cardTitle} cardContent={card.cardContent}
					SendComment={SendComment} comments={{
					comments: filteredComments,
					addComment: comments.addComment,
					changeComment: comments.changeComment,
					deleteComment: comments.deleteComment
				}}/>} setIsOpen={setIsOpen} title={''}/>
			}
			<div onClick={() => {
				setIsOpen(true)
			}} className={styles.card}>
				<div className={styles.header}>
					<Button $cross onClick={() => cardProps.deleteCard(card.id)}>X</Button>
				</div>
				<TitleH4>{card.cardTitle}</TitleH4>
				<div>
					{contentLength(card.cardContent)}
				</div>
				<Flex $justifyContent={'space-between'}>
					<div className={styles.footer}>
						{card.author}
					</div>
					<div className={styles.footer}>
						comments: {filteredComments.length}
					</div>
				</Flex>
			</div>
		</div>

	)
}

export default Card