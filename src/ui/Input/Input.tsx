import React from "react";
import styled, {css} from "styled-components";

const StyledInput = styled.input`
    margin-bottom: .5rem;
    border-radius: 5px;
    border: none;
    font-size: 16px;
`

const Input = (props: any) => {

    return <StyledInput {...props}/>
}


export default Input