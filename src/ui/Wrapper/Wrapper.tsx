import React, {ReactNode} from "react";
import styled from "styled-components";

const Wrapper = ({children}: { children: ReactNode }) => {
	return <StyledWrapper>{children}</StyledWrapper>
}

export default Wrapper

const StyledWrapper = styled.div`
    padding-top: 1rem;
    margin: 0 auto;
    width: 90%;
    & h1 {
    color: white;
    text-align: center;
    margin-bottom: 1rem
    }
`
