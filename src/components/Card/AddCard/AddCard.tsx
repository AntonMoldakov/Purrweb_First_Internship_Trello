import React, {useState} from 'react'
import './AddCard.css'
import Modal from "../../../ui/Modal/Modal";

interface StandardComponentProps {
    addCard: any
    columnId: number
}

function AddCard({addCard, columnId}: StandardComponentProps) {
    const [isOpen, setIsOpen] = useState(false)

    const onSubmit = (values: {[key: string]: string}): void => {
        addCard(columnId, values.title, values.text)
        setIsOpen(false)
    }

    const fieldProps = [
        {type: 'input', label: 'Title', name: 'title'},
        {type: 'textarea', label: 'Content', name: 'text'}
        ]

    return (
        <React.Fragment>
            <button className={'btn-add-card'} onClick={() => setIsOpen(true)}>Add card</button>
            {isOpen && <Modal onSubmit={onSubmit} setIsOpen={setIsOpen}
                              title={'Create card'} btnText={'Create'}
                              fieldProps={fieldProps}/>}
        </React.Fragment>
    )
}

export default AddCard