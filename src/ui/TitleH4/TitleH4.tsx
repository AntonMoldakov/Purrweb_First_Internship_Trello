import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const TitleH4 = (props: HTMLAttributes<HTMLElement>) => {
	const {children, onClick} = props
	return <StyledTitle onClick={onClick}>{children}</StyledTitle>
}

export default TitleH4

const StyledTitle = styled.h4`
    margin: 0 0 .5rem;
    color: white;
    $cursor: pointer;
   
`
