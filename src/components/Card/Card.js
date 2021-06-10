import React from 'react'
import styles from './Card.module.css'

function Column({columnId, cardTitle, cardContent, author}) {
    return (
        <div className={styles.card}>
            <h4 className={styles.card__title}>{cardTitle}</h4>
            <div>
                {cardContent}
            </div>
            <div>
                {author}
            </div>
        </div>
    )
}

export default Column