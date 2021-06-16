import React from "react";
import {Field, Form} from "react-final-form";
import './Modal.css'

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


function CreateField({type, label, name, value, validateProp}: { [key: string]: string }) {
    switch (type) {
        case 'input': {
            return (
                <div className={'form__item'}>
                    {label && <label className={'form__label'}>{label}</label>}
                    <Field className={'form__field'} name={name}
                           component={type} placeholder={name}
                           defaultValue={value} validate={required}/>
                </div>
            )
        }
        case 'textarea': {
            return (
                <div className={'form__item'}>
                    {label && <label className={'form__label'}>{label}</label>}
                    <Field className={'form__field textarea'} name={name} component={type}
                           placeholder={name} defaultValue={value}/>
                </div>
            )
        }
    }
}

function Modal({onSubmit, setIsOpen, title, btnText, fieldProps}: StandardComponentProps) {
    return (
        <div className='modal'>
            <div className='modal__body'>
                <div className={'modal__header'}>
                    <button className={'cross'} onClick={() => setIsOpen(false)}>X
                    </button>
                </div>
                <div className="modal__content">
                    <Form
                        onSubmit={onSubmit}
                        // validate={validate}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <h2 className={'form__title'}>{title ? title : null}</h2>
                                {
                                    fieldProps.map(field => CreateField(field))
                                }
                                <button className={'btn'} type="submit">{btnText}</button>
                            </form>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal