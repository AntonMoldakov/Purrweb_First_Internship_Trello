import React, {useState} from 'react'
import {Column} from "./components"
import {FlexColumn, Modal} from "ui";
import {cardsOperations} from "state/ducks/cards";
import {columnOperations} from "state/ducks/columns";
import {CardChange, AddCard} from "components";
import {useAppDispatch, useAppSelector} from 'hooks';

function Columns() {
	const dispatch = useAppDispatch()
	const [cards, columns, comments, userName] = useAppSelector(
		(state) => {
			const {cardsReducer, columnsReducer, commentsReducer, sessionReducer} = state
			return [cardsReducer.cards, columnsReducer.columns, commentsReducer.comments, sessionReducer.userName]
		});

	function addCard(columnId: number, columnTitle: string, cardTitle: string, cardContent: string, userName: string) {
		dispatch(cardsOperations.AddCard(columnId, columnTitle, cardTitle, cardContent, userName))
	}

	function changeColumn(id: number, columnTitle: string) {
		dispatch(columnOperations.ChangeColumn(id, columnTitle))
	}

	const [ModalAddCard, setModalAddCard] = useState({isOpen: false, columnId: 0, columnTitle: ''})
	const ModalClosed = (value: boolean) => {
		setModalAddCard({isOpen: value, columnId: 0, columnTitle: ''})
	}

	const onSubmit = (values: { title: string, text: string }): void => {
		addCard(ModalAddCard.columnId, ModalAddCard.columnTitle, values.title, values.text, userName)
		setModalAddCard({isOpen: false, columnId: 0, columnTitle: ''})
	}

	const [ModalCard, setModalCard] = useState({isOpen: false, cardId: 0})
	const CardClosed = (value: boolean) => {
		setModalCard({isOpen: value, cardId: 0})
	}

	return (
		<FlexColumn>
			{
				columns.map(column => <Column key={column.id} cards={cards}
				                              columns={{column, editColumnTitle: changeColumn}}
				                              comments={comments} setIsOpen={setModalAddCard}
				                              setModalCard={setModalCard}/>)
			}
			{ModalAddCard.isOpen &&
			<Modal setIsOpen={ModalClosed} title={'Create card'}>
				<AddCard onSubmit={onSubmit}/>
			</Modal>
			}
			{
				ModalCard.isOpen &&
				<Modal setIsOpen={CardClosed} title={''}>
					<CardChange userName={userName} cards={cards} cardId={ModalCard.cardId}/>
				</Modal>
			}
		</FlexColumn>
	)
}

export default Columns
