import React from 'react'
import styles from './Columns.module.css'
import Column from "./Column/Column"

function distribCards(cards, columnId) {
    return cards.filter(cards => cards.columnId === columnId)
}

function Columns({cards, columns, addColumns, editColumnTitle, addCard, deleteCard, changeCard}) {
    return (
        <div className={styles.columns}>
            {
                columns.map(column => <Column key={columns.id} cards={distribCards(cards, column.id)}
                                              editColumnTitle={editColumnTitle} addCard={addCard}
                                              deleteCard={deleteCard} changeCard={changeCard} {...column}/>)
            }
        </div>
    )
}

export default Columns