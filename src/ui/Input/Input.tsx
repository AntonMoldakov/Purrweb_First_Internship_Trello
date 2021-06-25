import React, {InputHTMLAttributes} from "react";
import styled from "styled-components";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
	return <StyledInput {...props}/>
}


export default Input

const StyledInput = styled.input`
    margin-bottom: .5rem;
    border-radius: 5px;
    border: none;
    font-size: 16px;
`
