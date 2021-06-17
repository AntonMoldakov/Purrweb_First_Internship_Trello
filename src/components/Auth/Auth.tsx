import React, {useState} from 'react'
import {Modal} from "../../ui/index";

function Auth(props: { userNameChange: (name: string) => void }) {
    const [isOpen, setIsOpen] = useState(true)

    const onSubmit = (values: { name: string }) => {
        if (values.name) {
            props.userNameChange(values.name)
        } else {
            props.userNameChange('Guest')
        }
        setIsOpen(false)
    }
    const fieldProps = [{type: 'input', label: 'Your name', name: 'name'}]
    if (isOpen) {
        return <Modal onSubmit={onSubmit} setIsOpen={setIsOpen} title={'Auth'} btnText={'Enter'}
                      fieldProps={fieldProps}/>

    }
    return <div></div>

}


export default Auth