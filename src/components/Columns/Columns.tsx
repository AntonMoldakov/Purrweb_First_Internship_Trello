import React from 'react'
import Column from "./Column/Column"
import Flex from "../../style/Flex";

interface StandardComponentProps {
    cards: object[]
    columns: {id: number, columnTitle: string}[]
    addColumn: any
    editColumnTitle: any
    addCard: any
    deleteCard: any
    changeCard: any
    comments: any
}

function distributionCards(cards: any[], columnId: number): {id: number, columnId: number, cardTitle: string, cardContent: string, author: string}[] {
    return cards.filter(cards => cards.columnId === columnId)
}

function Columns({cards, columns, addColumn, editColumnTitle, addCard, deleteCard, changeCard, comments}: StandardComponentProps) {
    return (
        <Flex>
            {
                columns.map(column => <Column key={column.id} cards={distributionCards(cards, column.id)}
                                              editColumnTitle={editColumnTitle} addCard={addCard}
                                              deleteCard={deleteCard} changeCard={changeCard}
                                              comments={comments} {...column}/>)
            }
        </Flex>
    )
}

export default Columns