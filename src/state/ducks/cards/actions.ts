import type from "./types";

interface ICard {
    id: number,
    columnId: number,
    cardTitle: string,
    cardContent: string,
    author: string
}


const addCard = (card: ICard) => ({
    type: type.ADD,
    card
})

const deleteCard = (id: number) => ({
    type: type.DELETE,
    id
})

const changeCard = (card: ICard) => ({
    type: type.CHANGE,
    card
})


// @ts-ignore
export default {addCard, deleteCard, changeCard};
