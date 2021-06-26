import React, {useState} from 'react'
import {AddCardButton, FlexItem, Input, TitleH4, Modal} from 'ui';
import {Card, CardChange} from "components";
import {
	IAddComment, ICard,
	IChangeCard, IChangeComment, IColumn, IComment,
	IDeleteCard, IDeleteComment, IEditColumnTitle
} from "interface";

interface IProps {
	cards: {
		cards: ICard[],
		deleteCard: IDeleteCard,
		changeCard: IChangeCard,
	},
	columns: {
		column: IColumn,
		editColumnTitle: IEditColumnTitle
	},
	comments: {
		comments: IComment[],
		addComment: IAddComment,
		deleteComment: IDeleteComment,
		changeComment: IChangeComment,
	}
	userName: string,
	setIsOpen: (props: { isOpen: boolean, columnId: number, columnTitle: string }) => void
}


function Column({cards, columns, userName, comments, setIsOpen}: IProps) {
	const [editMode, setEditMode] = useState(false);
	const [title, setTitle] = useState(columns.column.columnTitle);
	const [ModalCard, setModalCard] = useState({isOpen: false, cardId: 0})

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		columns.editColumnTitle(columns.column.id, title);
	}

	const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	}

	const CardClosed = (value: boolean) => {
		setModalCard({isOpen: value, cardId: 0})
	}

	const onSubmitCard = (values: { title: string, text: string }) => {
		cards.changeCard(ModalCard.cardId, values.title, values.text)
	}

	const SendComment = (values: { comment: string }) => {
		comments.addComment(ModalCard.cardId, values.comment, userName)
	}

	return (
		<FlexItem>
			<div>
				{!editMode &&
				<div>
					<TitleH4 onClick={activateEditMode}>{columns.column.columnTitle}</TitleH4>
				</div>
				}
				{editMode &&
				<div>
					<Input onChange={onTitleChange}
					       autoFocus={true}
					       value={title}
					       onBlur={deactivateEditMode}/>
				</div>
				}
			</div>
			{
				cards.cards.filter(cards => cards.columnId === columns.column.id)
					.map(card => <Card key={card.id} cards={{
						card,
						deleteCard: cards.deleteCard,
						changeCard: cards.changeCard
					}} countComments={comments.comments.filter((comment: IComment) => comment.cardId === card.id).length}
					                   setCardIsOpen={setModalCard}/>)
			}
			<div>
				<AddCardButton onClick={() => setIsOpen({
					isOpen: true,
					columnId: columns.column.id,
					columnTitle: columns.column.columnTitle
				})}/>
			</div>
			{
				ModalCard.isOpen &&
				<Modal setIsOpen={CardClosed} title={''}>
					<CardChange onSubmit={onSubmitCard} SendComment={SendComment}
					            cards={cards} comments={comments} cardId={ModalCard.cardId}/>
				</Modal>
			}
		</FlexItem>
	)
}

export default Column