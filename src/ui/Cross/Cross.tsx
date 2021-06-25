import React, {ButtonHTMLAttributes} from "react";
import styled from "styled-components";

const Cross = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	const {onClick, type} = props
	return <StyledCross onClick={onClick} type={type}>X</StyledCross>
}

export default Cross

const StyledCross = styled.button`
    &:active && focus {
    outline: none;
    }
    &:-moz-focus-inner {
    border: 0;
    }
    margin: 0 0 0 90%;
        color: white;
        background: none;
        border: none;
        cursor: pointer;
`

