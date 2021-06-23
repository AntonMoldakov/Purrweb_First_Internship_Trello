import React, {useState} from 'react'
import Modal from "ui/Modal/Modal";
import {Button} from "ui";
import AddCardBody from "./AddCardBody";

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

	return (
		<React.Fragment>
			<Button $addCard onClick={() => setIsOpen(true)}>Add card</Button>
			{isOpen && <Modal setIsOpen={setIsOpen} title={'Create card'}
			                  children={<AddCardBody onSubmit={onSubmit}/>}
			/>}
		</React.Fragment>
	)
}

export default AddCard