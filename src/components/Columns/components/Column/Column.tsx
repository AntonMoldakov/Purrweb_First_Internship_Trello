import React, {useState} from 'react'
import {AddCardButton, FlexItem, Input, TitleH4, Modal} from 'ui';
import {AddCard, Card} from "components";
import {
	IAddCard, ICard,
	IChangeCard, IColumn,
	IDeleteCard, IEditColumnTitle
} from "interface";

interface IProps {
	cards: {
		cards: ICard[],
		addCard: IAddCard,
		deleteCard: IDeleteCard,
		changeCard: IChangeCard,
	}
	columns: {
		column: IColumn,
		editColumnTitle: IEditColumnTitle
	},
}


function Column({cards, columns}: IProps) {
	const [isOpen, setIsOpen] = useState(false)

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

	const onSubmit = (values: { title: string, text: string }): void => {
		cards.addCard(columns.column.id, columns.column.columnTitle, values.title, values.text)
		setIsOpen(false)
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
					}}/>)
			}
			<div>
				<AddCardButton onClick={() => setIsOpen(true)}/>
				{isOpen && <Modal setIsOpen={setIsOpen} title={'Create card'}>
					<AddCard onSubmit={onSubmit}/>
				</Modal>
				}
			</div>
		</FlexItem>
	)
}

export default Column