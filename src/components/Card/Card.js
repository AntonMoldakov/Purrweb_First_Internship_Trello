import React, {useState} from 'react'
import styles from './Card.module.css'
import CardChange from "./CardChange/CardChange";

function contentLength(content) {
    if (content.length > 25) {
        return (content.slice(0, 22) + '...')
    }
    return content
}

function Card({deleteCard, changeCard, id, columnId, cardTitle, cardContent, author}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            {
                isOpen && <CardChange id={id} cardTitle={cardTitle}
                                      cardContent={cardContent} changeCard={changeCard}
                                      setIsOpen={setIsOpen}/>
            }
            <div onDoubleClick={() => {
                setIsOpen(true)
            }} className={styles.card}>
                <div className={styles.header}>
                    <button className={styles.cross} onClick={() => deleteCard(id)}>X</button>
                </div>
                <h4 className={styles.title}>{cardTitle}</h4>
                <div>
                    {contentLength(cardContent)}
                </div>
                <div className={styles.author}>
                    {author}
                </div>
            </div>
        </div>

    )
}

export default Card