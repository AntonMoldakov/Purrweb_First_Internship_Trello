import actions from "./actions";
import {Dispatch} from "redux";

const AddCard = (columnId: number, cardTitle: string, cardContent: string) => (dispatch: Dispatch) => {
	let card = {
		id: +(new Date()),
		columnId,
		cardTitle,
		cardContent,
		author: "das"
	}

	let action = actions.addCard(card)

	dispatch(action)
}
const DeleteCard = (id: number) => (dispatch: Dispatch) => {
	dispatch(actions.deleteCard(id))
}
const ChangeCard = (id: number, cardTitle: string, cardContent: string) => (dispatch: Dispatch) => {
	let Card = {
		id,
		cardTitle,
		cardContent,
	}

	dispatch(actions.changeCard(Card))
}


const operations = {AddCard, DeleteCard, ChangeCard}
export default operations