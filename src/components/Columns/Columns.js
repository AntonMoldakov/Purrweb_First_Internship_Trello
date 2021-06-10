import React from 'react'
import styles from './Columns.module.css'
import Column from "./Column/Column"

function distribCards(cards, columnId) {
    return cards.filter(cards => cards.columnId === columnId)
}

function Columns({cards, columns, addColumns, editColumnTitle}) {
    return (
        <div className={styles.columns}>
            {
                columns.map(column => <Column cards={distribCards(cards, column.id)} editColumnTitle={editColumnTitle} {...column}/>)
            }
        </div>
    )
}

export default Columns