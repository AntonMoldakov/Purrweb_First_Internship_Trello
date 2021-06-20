import React, {ReactNode} from "react";
import './Modal.css'
import {Flex, Position, ModalExternal, ModalWindow, TitleH2, Button} from "../index";

interface IProps {
    setIsOpen: (value: boolean) => void,
    title?: string,
    children: ReactNode
}

function Modal({setIsOpen, title, children}: IProps) {
    return (
        <ModalExternal>
            <ModalWindow>
                <Flex $justifyContent={'space-between'} $padding={'.5rem .5rem .5rem 2rem'}>
                    <TitleH2>{title ? title : null}</TitleH2>
                    <Button $cross onClick={() => setIsOpen(false)}>X
                    </Button>
                </Flex>
                <Position $padding={'.5rem 1.5rem'}>
                    {children}
                </Position>
            </ModalWindow>
        </ModalExternal>
    )
}

export default Modal

