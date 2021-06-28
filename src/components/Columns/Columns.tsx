import React, {useState} from 'react'
import {Column} from "./components"
import {FlexColumn, Modal} from "ui";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {cardsOperations} from "state/ducks/cards";
import {columnOperations} from "state/ducks/columns";
import {IColumn} from "interface";
import {AddCard} from "../AddCard";
import {CardChange} from "../Card/components/CardChange";


function Columns() {
	const dispatch = useDispatch()
	const state = useSelector((state: RootStateOrAny) => state)

	const cards = state.cardsReducer.cards
	const columns = state.columnsReducer.columns
	const comments = state.commentsReducer.comments
	const userName = state.sessionReducer.userName

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
				columns.map((column: IColumn) => <Column key={column.id} cards={cards}
				                                         columns={{column, editColumnTitle: changeColumn}}
				                                         comments={comments}
				                                         setIsOpen={setModalAddCard} setModalCard={setModalCard}/>)
			}
			{ModalAddCard.isOpen && <Modal setIsOpen={ModalClosed} title={'Create card'}>
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
