import React from 'react'
import styles from '../Columns.module.css'
import Card from "../../Card/Card";
import ColumnTitle from "./ColumnTitle";
import AddCard from "../../Card/AddCard/AddCard";

function Column({cards, editColumnTitle, id, columnTitle}) {
    return (
        <div className={styles.columns__item}>
            <ColumnTitle className={styles.column__title} editColumnTitle={editColumnTitle} columnTitle={columnTitle} id={id}/>
            {
                cards.map(card => <Card {...card}/>)
            }
            <div>
                <AddCard/>
            </div>
        </div>
    )
}

export default Column