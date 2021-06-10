import React from 'react'
import styles from '../Columns.module.css'
import Card from "../../Card/Card";
import ColumnTitle from "./ColumnTitle";
import AddCard from "../../Card/AddCard/AddCard";

function Column({cards, editColumnTitle, addCard, deleteCard, changeCard, id, columnTitle}) {
    return (
        <div className={styles.columns__item}>
            <ColumnTitle className={styles.column__title} editColumnTitle={editColumnTitle} columnTitle={columnTitle} id={id}/>
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