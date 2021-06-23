import React from "react";
import Columns from "./Columns";
import {useDispatch, useSelector} from "react-redux";
import {cardsOperations} from "state/ducks/cards";
import {columnOperations} from "state/ducks/columns";
import {commentOperations} from "state/ducks/comments";


function ColumnsContainer() {
	const dispatch = useDispatch()
	const state = useSelector(state => state)

	// @ts-ignore
	let cards = state.cardsReducer.cards
	// @ts-ignore
	let columns = state.columnsReducer.columns
	// @ts-ignore
	let comments = state.commentsReducer.comments

	function addCard(columnId: number, cardTitle: string, cardContent: string) {
		dispatch(cardsOperations.AddCard(columnId, cardTitle, cardContent))
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

	function addComment(cardId: number, message: string) {
		dispatch(commentOperations.AddComment(cardId, message))
	}

	function deleteComment(id: number) {
		dispatch(commentOperations.DeleteComment(id))
	}

	function changeComment(id: number, message: string) {
		dispatch(commentOperations.ChangeComment(id, message))
	}

	// @ts-ignore
	return <Columns cards={{cards, addCard, deleteCard, changeCard}}
	                columns={{columns, editColumnTitle: changeColumn}}
	                comments={{comments, addComment, deleteComment, changeComment}}/>
}

export default ColumnsContainer