import React from 'react'
import Card from "../../Card/Card";
import ColumnTitle from "./ColumnTitle";
import AddCard from "../../Card/AddCard/AddCard";
import {FlexItem} from '../../../ui/index';

interface IProps {
    cards: {
        cards: { id: number, columnId: number, cardTitle: string, cardContent: string, author: string }[],
        addCard: (columnId: number, cardTitle: string, cardContent: string) => void,
        deleteCard: (id: number) => void,
        changeCard: (id: number, cardTitle: string, cardContent: string) => void,
    },
    comments: {
        comments: { id: number, cardId: number, message: string, author: string }[]
        addComment: (id: number, message: string) => void,
        changeComment: (id: number, message: string) => void,
        deleteComment: (id: number) => void,
    },
    column: { id: number, columnTitle: string },
    editColumnTitle: (id: number, title: string) => void
}


function Column({cards, comments, column, editColumnTitle}: IProps) {
    const filteredCards = cards.cards.filter(cards => cards.columnId === column.id)
    return (
        <FlexItem $column>
            <ColumnTitle editColumnTitle={editColumnTitle} columnTitle={column.columnTitle} id={column.id}/>
            {
                filteredCards.map(card => <Card key={card.id}
                                                cardProps={{
                                                    card,
                                                    deleteCard: cards.deleteCard,
                                                    changeCard: cards.changeCard
                                                }} comments={comments}/>)
            }
            <div>
                <AddCard addCard={cards.addCard} columnId={column.id}/>
            </div>
        </FlexItem>
    )
}

export default Column