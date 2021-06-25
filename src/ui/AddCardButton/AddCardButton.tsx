import React, {ButtonHTMLAttributes} from "react";
import styled from "styled-components";


const AddCardButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	const {onClick, type} = props

	return <StyledAddCardButton onClick={onClick} type={type}>Add card</StyledAddCardButton>

}

export default AddCardButton

const StyledAddCardButton = styled.button`
    &:active && focus {
    outline: none;
    }
    &:-moz-focus-inner {
    border: 0;
    }
       
        width: 100%;
        color: #ccc;
        background-color: #333336;
        border: 1px solid darkgray;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color .2s linear;
         &:hover {
            color: white;
            background-color: #47474A;
         }
`

