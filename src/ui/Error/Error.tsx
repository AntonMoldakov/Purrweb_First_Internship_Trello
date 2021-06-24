import React, {ReactNode} from "react";
import styled from "styled-components";

const Error = ({children}: { children: ReactNode }) => {
	return <StyledError>{children}</StyledError>
}

export default Error

const StyledError = styled.span`
    color: tomato
`








