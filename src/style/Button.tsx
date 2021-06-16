import React from "react";
import styled, {css} from "styled-components";

const StyledButton = styled.button<{ [key: string]: boolean }>`
    &:active && focus {
    outline: none;
    }
    &:-moz-focus-inner {
    border: 0;
    }
    ${({sub}) => sub && css`
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
    `}
    ${({addCard}) => addCard && css`
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
    `}
    ${({cross}) => cross && css`
        color: white;
        background: none;
        border: none;
        cursor: pointer;
    `}
`

const Button = (props: any) => {

    return <StyledButton {...props}/>
}


export default Button