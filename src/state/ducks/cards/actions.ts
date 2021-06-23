import {ICard} from "interface";
import type from "./types";

const addCard = (card: ICard) => ({
	type: type.ADD,
	card
})

const deleteCard = (id: number) => ({
	type: type.DELETE,
	id
})

const changeCard = (card: { id: number, cardTitle: string, cardContent: string }) => ({
	type: type.CHANGE,
	card
})

const actions = {addCard, deleteCard, changeCard}
export default actions
