import React, {useState} from 'react'
import './AddCard.css'
import {Form, Field} from 'react-final-form'

function AddCard({addCard, columnId}) {
    const [isOpen, setIsOpen] = useState(false)

    const onSubmit = values => {
        addCard(columnId, values.title, values.text)
        setIsOpen(false)
    }

    return (
        <React.Fragment>
            <button className={'btn-add-card'} onClick={() => setIsOpen(true)}>Add card</button>
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
                                    <h2 className={'form__title'}>Create new card</h2>
                                    <div className={'form__item'}>
                                        <label className={'form__label'}>Card title</label>
                                        <Field className={'form__field'} name="title" component="input" placeholder="title"/>
                                    </div>
                                    <div className={'form__item'}>
                                        <label className={'form__label'}>Card text</label>
                                        <Field className={'form__field'} name="text" component="textarea" placeholder="text"/>
                                    </div>
                                    <button type="submit">Create</button>
                                </form>
                            )}
                        />
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
}


export default AddCard