import React, {useMemo, useState} from 'react'
import {AddCardButton, FlexItem, Input, TitleH4} from 'ui';
import {Card} from "components";
import {ICard, IColumn, IComment, IEditColumnTitle} from "interface";

interface IProps {
	cards: ICard[],
	columns: {
		column: IColumn,
		editColumnTitle: IEditColumnTitle
	},
	comments: IComment[],
	setModalCard: (props: { isOpen: boolean, cardId: number }) => void,
	setIsOpen: (props: { isOpen: boolean, columnId: number, columnTitle: string }) => void
}


function Column({cards, columns, setModalCard, comments, setIsOpen}: IProps) {
	const [editMode, setEditMode] = useState(false);
	const [title, setTitle] = useState(columns.column.columnTitle);

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

	const filteredCards = useMemo(() =>
		() =>
			cards.filter(card => card.columnId === columns.column.id), [cards])

	const filteredComments = useMemo(() =>
		(cardId: number) =>
			comments.filter((comment: IComment) => comment.cardId === cardId), [comments])

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
				filteredCards().map(card => <Card key={card.id} card={card}
				                                  countComments={filteredComments(card.id).length}
				                                  setModalCard={setModalCard}/>)
			}
			<div>
				<AddCardButton onClick={() => setIsOpen({
					isOpen: true,
					columnId: columns.column.id,
					columnTitle: columns.column.columnTitle
				})}/>
			</div>
		</FlexItem>
	)
}

export default Column
