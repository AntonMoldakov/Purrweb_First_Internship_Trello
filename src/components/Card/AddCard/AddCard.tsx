import React, {useState} from 'react'
import Modal from "../../../ui/Modal/Modal";
import Button from "../../../ui/Button/Button";

interface IProps {
    addCard: (columnId: number, cardTitle: string, cardContent: string) => void,
    columnId: number
}

function AddCard({addCard, columnId}: IProps) {
    const [isOpen, setIsOpen] = useState(false)

    const onSubmit = (values: { title: string, text: string }): void => {
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