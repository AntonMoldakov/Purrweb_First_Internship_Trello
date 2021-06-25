import {ICard} from "interface";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	cards: [{id: 80, columnId: 0, columnTitle: '', cardTitle: '', cardContent: '', author: ''}]
}

const cards = createSlice({
	name: 'CommentsReducer',
	initialState,
	reducers: {
		addCardA(state, action: { payload: ICard }) {
			state.cards.push(action.payload)
		},
		changeCardA(state, action: { payload: { id: number, cardTitle: string, cardContent: string } }) {
			state.cards.map(card => {
				if (card.id === action.payload.id) {
					card.cardTitle = action.payload.cardTitle
					card.cardContent = action.payload.cardContent
				}
				return card
			})
		},
		deleteCardA(state, action: { payload: { id: number } }) {
			const {id} = action.payload
			const {cards} = state
			const index = cards.findIndex((card) => id === card.id);
			cards.splice(index, 1)
		}

	}
})

export default cards.reducer
export const {addCardA, changeCardA, deleteCardA} = cards.actions
