import React from "react";
import styled, {css} from "styled-components";

const StyledTextArea = styled.textarea`
    width: 100%
    border-radius: 5px;
    border: none;
    font-size: 16px;
    resize: none
`


const TextArea = (props: any) => {

    return <StyledTextArea {...props}/>
}


export default TextArea