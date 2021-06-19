import React from "react";
import {Form} from "react-final-form";
import './Modal.css'
import {Flex, Position, Modals, ModalBody, CreateField, TitleH2, Button} from "../index";

interface IProps {
    onSubmit: (values: { title: string, text: string ,  name?: string }) => void,
    setIsOpen: (value: boolean) => void,
    title?: string,
    btnText: string,
    fieldProps: { type: string, label?: string, value?: string, name: string }[]
}

function Modal({onSubmit, setIsOpen, title, btnText, fieldProps}: IProps) {
    return (
        <Modals>
            <ModalBody>
                <Flex justifyContent={'flex-end'} padding={'.5rem'}>
                    <Button cross onClick={() => setIsOpen(false)}>X
                    </Button>
                </Flex>
                <Position padding={'.5rem 1.5rem'}>
                    <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <TitleH2>{title ? title : null}</TitleH2>
                                {
                                    fieldProps.map(field => CreateField(field))
                                }
                                <Button sub type="submit">{btnText}</Button>
                            </form>
                        )}
                    />
                </Position>
            </ModalBody>
        </Modals>
    )
}

export default Modal