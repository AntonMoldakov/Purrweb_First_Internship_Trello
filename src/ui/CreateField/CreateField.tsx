import Flex from "../../style/Flex";
import Label from "../../style/Label";
import {Field} from "react-final-form";
import React from "react";

const required = (v:string) => {
    if (!v || v.trim() === '') {
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

export default CreateField