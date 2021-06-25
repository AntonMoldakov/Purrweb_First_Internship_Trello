import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const TitleH2 = ({children}: HTMLAttributes<HTMLElement>) => {
	return <StyledTitle>{children}</StyledTitle>
}

export default TitleH2

const StyledTitle = styled.h2`
    margin: .5rem 0;
    color: white
`
