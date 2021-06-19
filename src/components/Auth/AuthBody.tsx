import React from "react";
import {Field, Form} from "react-final-form";
import {Button, Flex, Label} from "../../ui";

const required = (v: string) => {
    if (!v || v.trim() === '') {
        return 'This field is required'
    }
    return undefined
}

function AuthBody({onSubmit} : {onSubmit: (values: { name: string }) => void}) {
    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Flex justifyContent={'space-between'} margin={'0 0 .5rem'}>
                        <Label margin={'0 .5rem 0 0'}>Your name</Label>
                        <Field className={'form__field'} name={'name'}
                               component={'input'} placeholder={'name'}
                               validate={required}/>
                    </Flex>
                    <Button sub type="submit">Enter</Button>
                </form>
            )}/>
    )
}

export default AuthBody