import {Dispatch} from "redux";
import {addCardA, changeCardA, deleteCardA} from "./reducers";

const AddCard = (columnId: number, columnTitle: string, cardTitle: string, cardContent: string, userName: string) => (dispatch: Dispatch) => {
	let card = {
		id: +(new Date()),
		columnId,
		columnTitle,
		cardTitle,
		cardContent,
		author: userName
	}

	dispatch(addCardA(card))
}
const DeleteCard = (id: number) => (dispatch: Dispatch) => {
	dispatch(deleteCardA({id}))
}
const ChangeCard = (id: number, cardTitle: string, cardContent: string) => (dispatch: Dispatch) => {
	let Card = {
		id,
		cardTitle,
		cardContent,
	}

	dispatch(changeCardA(Card))
}


const operations = {AddCard, DeleteCard, ChangeCard}
export default operations