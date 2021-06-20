import React, {ButtonHTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    type?: "submit" | "reset" | "button",
    $sub?: boolean,
    $addCard?: boolean,
    $cross?: boolean,
    onClick?: () => void

}


const StyledButton = styled.button<ButtonProps>`
    &:active && focus {
    outline: none;
    }
    &:-moz-focus-inner {
    border: 0;
    }
    ${({$sub}) => $sub && `
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
    `}
    ${({$addCard}) => $addCard && `
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
    ${({$cross}) => $cross && `
        color: white;
        background: none;
        border: none;
        cursor: pointer;
    `}
`

const Button = (props: ButtonProps) => {
    const {onClick, type, children, $cross, $addCard, $sub} = props

    return <StyledButton onClick={onClick} type={type}
                         $sub={$sub} $cross={$cross}
                         $addCard={$addCard}>
        {children}
    </StyledButton>

}


export default Button