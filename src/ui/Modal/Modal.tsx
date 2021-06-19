import React from "react";
import './Modal.css'
import {Flex, Position, ModalExternal, ModalBody, TitleH2, Button} from "../index";

interface IProps {
    setIsOpen: (value: boolean) => void,
    title?: string,
    children: any
}

function Modal({setIsOpen, title, children}: IProps) {
    return (
        <ModalExternal>
            <ModalBody>
                <Flex justifyContent={'space-between'} padding={'.5rem .5rem .5rem 2rem'}>
                    <TitleH2>{title ? title : null}</TitleH2>
                    <Button cross onClick={() => setIsOpen(false)}>X
                    </Button>
                </Flex>
                <Position padding={'.5rem 1.5rem'}>
                    {children}
                </Position>
            </ModalBody>
        </ModalExternal>
    )
}

export default Modal



/*
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
/>*/
