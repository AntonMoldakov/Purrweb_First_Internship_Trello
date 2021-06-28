import React, {ButtonHTMLAttributes} from "react";
import styled from "styled-components";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	const {onClick, type, children,} = props

	return <StyledButton onClick={onClick} type={type}>
		{children}
	</StyledButton>

}

export default Button

const StyledButton = styled.button`
    &:active && focus {
    outline: none;
    }
    &:-moz-focus-inner {
    border: 0;
    }
        margin: .5rem 0;
         padding: .5rem;
         background: white;
         border: none;
         border-radius: 5px;
         color: rgb(59, 59, 59);
         cursor: pointer;
         transition: background-color .2s linear;
         &:hover {
            background: #b4b4b4;
         }
`

