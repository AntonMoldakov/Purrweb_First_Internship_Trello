import React, {useState} from 'react'
import Modal from "../../../ui/Modal/Modal";
import Button from "../../../style/Button";

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
            <Button addCard onClick={() => setIsOpen(true)}>Add card</Button>
            {isOpen && <Modal onSubmit={onSubmit} setIsOpen={setIsOpen}
                              title={'Create card'} btnText={'Create'}
                              fieldProps={fieldProps}/>}
        </React.Fragment>
    )
}

export default AddCard