import React, {HTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

export interface CardBlockProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode,
	onClick: () => void
}

const CardBlock = (props: CardBlockProps) => {
	const {onClick, children} = props
	return <StyledCardBlock onClick={onClick}>{children}</StyledCardBlock>
}

export default CardBlock

const StyledCardBlock = styled.div<CardBlockProps>`
    padding: .5rem 1rem;
    margin-bottom: .5rem;
    background-color: #333336;
    border: 1px solid darkgray;
    border-radius: 5px;
    color: #E2E2E2;
    cursor: pointer;
`
















