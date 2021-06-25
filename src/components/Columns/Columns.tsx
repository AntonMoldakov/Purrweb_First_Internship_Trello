import React from 'react'
import {Column} from "./components"
import {FlexColumn} from "ui";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {cardsOperations} from "../../state/ducks/cards";
import {columnOperations} from "../../state/ducks/columns";
import {IColumn} from "../../interface";


function Columns() {
	const dispatch = useDispatch()
	const state = useSelector((state: RootStateOrAny) => state)

	const cards = state.cardsReducer.cards
	const columns = state.columnsReducer.columns

	function addCard(columnId: number, columnTitle: string, cardTitle: string, cardContent: string) {
		dispatch(cardsOperations.AddCard(columnId, columnTitle, cardTitle, cardContent))
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

	return (
		<FlexColumn>
			{
				columns.map((column: IColumn) => <Column key={column.id} cards={{cards, addCard, deleteCard, changeCard}}
				                                         columns={{column, editColumnTitle: changeColumn}}/>)
			}
		</FlexColumn>
	)
}

export default Columns