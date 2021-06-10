import React from 'react'
import styles from './Card.module.css'

function contentLength(content) {
    if(content.length > 25) {
        return (content.slice(0, 22) + '...')
    }
    return content
}

function Card({deleteCard, id, columnId, cardTitle, cardContent, author}) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
            <button className={styles.cross} onClick={() => deleteCard(id)}>X</button>
            </div>
            <h4 className={styles.title}>{cardTitle}</h4>
            <div>
                {
                    contentLength(cardContent)
                }
            </div>
            <div className={styles.author}>
                {author}
            </div>
        </div>
    )
}

export default Card