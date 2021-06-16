import React from "react";
import {Field, Form} from "react-final-form";
import Button from "../../style/Button";
import './Modal.css'
import TitleH2 from "../../style/TitleH2";
import Flex from "../../style/Flex";
import Position from "../../style/Position";
import Label from "../../style/Label";
import Modals from "../../style/Modals";
import ModalBody from "../../style/ModalBody";

interface StandardComponentProps {
    onSubmit: (values: { [key: string]: string }) => void
    setIsOpen: (value: boolean) => void
    title?: string
    btnText: string
    fieldProps: {
        [key: string]: string
    }[]
}

const required = (v:string) => {
    if (!v || v === '') {
        return 'This field is required'
    }
    return undefined
}


function CreateField({type, label, name, value}: { [key: string]: string }) {
    switch (type) {
        case 'input': {
            return (
                <Flex justifyContent={'space-between'} margin={'0 0 .5rem'}>
                    {label && <Label margin={'0 .5rem 0 0'}>{label}</Label>}
                    <Field className={'form__field'} name={name}
                           component={type} placeholder={name}
                           defaultValue={value} validate={required}/>
                </Flex>
            )
        }
        case 'textarea': {
            return (
                <Flex justifyContent={'space-between'} margin={'0 0 0.5rem'}>
                    {label && <Label margin={'0 .5rem 0 0'}>{label}</Label>}
                    <Field className={'form__field textarea'} name={name} component={type}
                           placeholder={name} defaultValue={value}/>
                </Flex>
            )
        }
    }
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
                        // validate={validate}
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