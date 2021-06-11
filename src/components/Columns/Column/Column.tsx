import React from 'react'
import styles from '../Columns.module.css'
import Card from "../../Card/Card";
import ColumnTitle from "./ColumnTitle";
import AddCard from "../../Card/AddCard/AddCard";

interface StandardComponentProps {
    cards: {id: number, columnId: number, cardTitle: string, cardContent: string, author: string}[]
    editColumnTitle: (id: number, title: string) => void
    addCard: (columnId: number, cardTitle: string, cardContent: string) => void
    deleteCard: (id: number) => void
    changeCard: (id: number, cardTitle: string, cardContent: string) => void
    id: number
    columnTitle: string
}


function Column({cards, editColumnTitle, addCard, deleteCard, changeCard, id, columnTitle}: StandardComponentProps) {
    return (
        <div className={styles.columns__item}>
            <ColumnTitle editColumnTitle={editColumnTitle} columnTitle={columnTitle} id={id}/>
            {
                cards.map(card => <Card key={card.id}  deleteCard={deleteCard} changeCard={changeCard} {...card}/>)
            }
            <div>
                <AddCard addCard={addCard} columnId={id}/>
            </div>
        </div>
    )
}

export default Column