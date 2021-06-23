import actions from "./actions";

const AddCard = (columnId: number, cardTitle: string, cardContent: string) => (dispatch: any) => {
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
const DeleteCard = (id: number) => (dispatch: any) => {
	dispatch(actions.deleteCard(id))
}
const ChangeCard = (id: number, cardTitle: string, cardContent: string) => (dispatch: any) => {
	let Card = {
		id,
		cardTitle,
		cardContent,
	}

	// @ts-ignore
	dispatch(actions.changeCard(Card))
}

export default {
	AddCard,
	DeleteCard,
	ChangeCard
};