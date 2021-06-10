import React, {useState} from 'react'
import '../../modal.css'
import {Form, Field} from 'react-final-form'

function Auth({userNameChange}) {
    const [isOpen, setIsOpen] = useState(true)

    const onSubmit = values => {
        userNameChange(values.name)
        setIsOpen(false)
    }

    return (
        <div>
            {isOpen && <div className='modal'>
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
                                    <h2 className={'form__title'}>Auth</h2>
                                    <div className={'form__item'}>
                                        <label className={'form__label'}>Your name</label>
                                        <Field className={'form__field'} name="name" component="input"
                                               placeholder="name"/>
                                    </div>
                                    <button type="submit">Ok</button>
                                </form>
                            )}
                        />
                    </div>
                </div>
            </div>}
        </div>
    )
}


export default Auth