import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const Error = ({children}: HTMLAttributes<HTMLSpanElement>) => {
	return <StyledError>{children}</StyledError>
}

export default Error

const StyledError = styled.span`
	margin: 0 0 0 .5rem;
    color: tomato
`








