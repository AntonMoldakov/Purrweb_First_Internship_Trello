import React, {useState} from 'react'
import {Modal} from "../../ui/index";
import AuthBody from './AuthBody';

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

    if (isOpen) {
        return <Modal children={<AuthBody onSubmit={onSubmit}/>} setIsOpen={setIsOpen} title={'Auth'}/>

    }
    return <div/>

}


export default Auth