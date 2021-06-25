import React, {TextareaHTMLAttributes} from "react";
import styled from "styled-components"

const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
	return <StyledTextArea {...props}/>
}

export default TextArea

const StyledTextArea = styled.textarea`
    width: 100%
    border-radius: 5px;
    border: none;
    font-size: 16px;
    resize: none
`
