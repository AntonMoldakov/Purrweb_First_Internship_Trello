import React, {useState} from 'react'
import styles from './Card.module.css'
import Modal from "../../ui/Modal/Modal";
import Button from '../../style/Button';
import TitleH4 from "../../style/TitleH4";


interface StandardComponentProps {
    deleteCard: any
    changeCard: any
    id: number
    cardTitle: string
    cardContent: string
    author: string
}

function contentLength(content: string): string {
    if (content && content.length > 25) {
        return (content.slice(0, 22) + '...')
    }
    return content
}

function Card({deleteCard, changeCard, id, cardTitle, cardContent, author}: StandardComponentProps)  {
    const [isOpen, setIsOpen] = useState(false)

    const onSubmit = (values: {[key: string]: string}) => {
        changeCard(id, values.title, values.text)
        setIsOpen(false)
    }

    const fieldProps = [
        {type: 'input', value: cardTitle, name: 'title'},
        {type: 'textarea', value: cardContent, name: 'text'}
    ]
    return (
        <div>
            {
                isOpen && <Modal onSubmit={onSubmit} setIsOpen={setIsOpen}
                                 btnText={'Save'} fieldProps={fieldProps}/>
            }
            <div onClick={() => {
                setIsOpen(true)
            }} className={styles.card}>
                <div className={styles.header}>
                    <Button cross onClick={() => deleteCard(id)}>X</Button>
                </div>
                <TitleH4>{cardTitle}</TitleH4>
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