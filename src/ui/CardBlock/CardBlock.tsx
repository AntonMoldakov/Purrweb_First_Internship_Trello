import React, {HTMLAttributes} from "react";
import styled from "styled-components";


const CardBlock = (props: HTMLAttributes<HTMLDivElement>) => {
	const {onClick, children} = props
	return <StyledCardBlock onClick={onClick}>{children}</StyledCardBlock>
}

export default CardBlock

const StyledCardBlock = styled.div`
    padding: .5rem 1rem;
    margin-bottom: .5rem;
    background-color: #333336;
    border: 1px solid darkgray;
    border-radius: 5px;
    color: #E2E2E2;
    cursor: pointer;
`
















