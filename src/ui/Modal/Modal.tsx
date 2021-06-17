import React from "react";
import {Form} from "react-final-form";
import Button from "../../style/Button";
import './Modal.css'
import TitleH2 from "../../style/TitleH2";
import Flex from "../../style/Flex";
import Position from "../../style/Position";
import Modals from "../../style/Modals";
import ModalBody from "../../style/ModalBody";
import CreateField from "../CreateField/CreateField";

interface StandardComponentProps {
    onSubmit: (values: { [key: string]: string }) => void
    setIsOpen: (value: boolean) => void
    title?: string
    btnText: string
    fieldProps: {
        [key: string]: string
    }[]
}

function Modal({onSubmit, setIsOpen, title, btnText, fieldProps}: StandardComponentProps) {
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