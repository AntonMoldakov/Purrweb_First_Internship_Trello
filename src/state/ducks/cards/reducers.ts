import type from "./types";

interface IState {
    cards: {
        id: number,
        columnId: number,
        cardTitle: string,
        cardContent: string,
        author: string
    }[]
}

interface IActions {
    type: string,
    id?: number,
    card?: {
        id?: number,
        columnId?: number,
        cardTitle?: string,
        cardContent?: string,
        author?: string
    }
}

const initialState: IState = {
    cards: [{id: 80, columnId: 0, cardTitle: '', cardContent: '', author: ''}]
}

const cardsReducer = (state = initialState, action: IActions) => {
    switch (action.type) {
        case type.ADD:
            return {...state, cards: [...state.cards, action.card]};
        case type.CHANGE:
            return  {...state, cards: state.cards.map(card => {// @ts-ignore
                    if (card.id === action.card.id) {// @ts-ignore
                        card.cardTitle = action.card.cardTitle// @ts-ignore
                        card.cardContent = action.card.cardContent
                    }
                    return card
                })}
        case type.DELETE:
            return {...state, cards: state.cards.filter(card => card.id !== action.id)}
        default:
            return state;
    }
}


// @ts-ignore
export default cardsReducer;