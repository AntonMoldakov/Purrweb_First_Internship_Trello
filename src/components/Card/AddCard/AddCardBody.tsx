import React from "react";
import {Field, Form} from "react-final-form";
import {Button, Flex, Label} from "../../../ui";

const required = (v: string) => {
    if (!v || v.trim() === '') {
        return 'This field is required'
    }
    return undefined
}

function AddCardBody({onSubmit} : {onSubmit: (values: { title: string, text: string }) => void}) {
    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Flex $justifyContent={'space-between'} $margin={'0 0 .5rem'}>
                        <Label $margin={'0 .5rem 0 0'}>Title</Label>
                        <Field className={'form__field'} name={'title'}
                               component={'input'} placeholder={'title'}
                               validate={required}/>
                    </Flex>
                    <Flex $justifyContent={'space-between'} $margin={'0 0 0.5rem'}>
                        <Label $margin={'0 .5rem 0 0'}>Text</Label>
                        <Field className={'form__field textarea'} name={'text'} component={'textarea'}
                               placeholder={'text'}/>
                    </Flex>

                    <Button $sub type="submit">Create</Button>
                </form>
            )}/>
    )
}

export default AddCardBody