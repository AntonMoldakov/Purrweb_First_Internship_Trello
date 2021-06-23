import {ICard} from "interface";
import type from "./types";

interface IActions {
	type: string,
	id?: number,
	card: ICard
}

const initialState = {
	cards: [{id: 80, columnId: 0, cardTitle: '', cardContent: '', author: ''}]
}

const cardsReducer = (state = initialState, action: IActions) => {
	switch (action.type) {
		case type.ADD:
			return {...state, cards: [...state.cards, action.card]};
		case type.CHANGE:
			return {
				...state, cards: state.cards.map(card => {
					if (card.id === action.card.id) {
						card.cardTitle = action.card.cardTitle
						card.cardContent = action.card.cardContent
					}
					return card
				})
			}
		case type.DELETE:
			return {...state, cards: state.cards.filter(card => card.id !== action.id)}
		default:
			return state;
	}
}

export default cardsReducer;