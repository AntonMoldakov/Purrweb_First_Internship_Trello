import React, {useState} from 'react'
import {Column} from "./components"
import {FlexColumn, Modal} from "ui";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {cardsOperations} from "state/ducks/cards";
import {columnOperations} from "state/ducks/columns";
import {IColumn} from "interface";
import {commentOperations} from "../../state/ducks/comments";
import {AddCard} from "../AddCard";


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

	function deleteCard(id: number) {
		dispatch(cardsOperations.DeleteCard(id))
	}

	function changeCard(id: number, cardTitle: string, cardContent: string) {
		dispatch(cardsOperations.ChangeCard(id, cardTitle, cardContent))
	}

	function changeColumn(id: number, columnTitle: string) {
		dispatch(columnOperations.ChangeColumn(id, columnTitle))
	}

	function addComment(cardId: number, message: string, userName: string) {
		dispatch(commentOperations.AddComment(cardId, message, userName))
	}

	function deleteComment(id: number) {
		dispatch(commentOperations.DeleteComment(id))
	}

	function changeComment(id: number, message: string) {
		dispatch(commentOperations.ChangeComment(id, message))
	}

	const [ModalAddCard, setModalAddCard] = useState({isOpen: false, columnId: 0, columnTitle: ''})
	const ModalClosed = (value: boolean) => {
		setModalAddCard({isOpen: value, columnId: 0, columnTitle: ''})
	}

	const onSubmit = (values: { title: string, text: string }): void => {
		addCard(ModalAddCard.columnId, ModalAddCard.columnTitle, values.title, values.text, userName)
		setModalAddCard({isOpen: false, columnId: 0, columnTitle: ''})
	}

	return (
		<FlexColumn>
			{
				columns.map((column: IColumn) => <Column key={column.id} cards={{cards, deleteCard, changeCard}}
				                                         columns={{column, editColumnTitle: changeColumn}}
				                                         comments={{comments, addComment, deleteComment, changeComment}}
				                                         userName={userName} setIsOpen={setModalAddCard}/>)
			}
			{ModalAddCard.isOpen && <Modal setIsOpen={ModalClosed} title={'Create card'}>
				<AddCard onSubmit={onSubmit}/>
			</Modal>
			}
		</FlexColumn>
	)
}

export default Columns