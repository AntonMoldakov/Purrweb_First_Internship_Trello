import React, {TextareaHTMLAttributes} from "react";
import styled from "styled-components"

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    autoFocus?: boolean,
    value: string,
    onBlur?: () => void
}

const StyledTextArea = styled.textarea`
    width: 100%
    border-radius: 5px;
    border: none;
    font-size: 16px;
    resize: none
`


const TextArea = (props: TextAreaProps) => {
    const {onChange, autoFocus, onBlur, value} = props
    return <StyledTextArea onChange={onChange} autoFocus={autoFocus} onBlur={onBlur} value={value}/>
}


export default TextArea