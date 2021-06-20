import React, {ReactNode} from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
    margin: .5rem 0;
    color: white
`

const TitleH2 = ({children}: {children: ReactNode}) => {

    return <StyledTitle>{children}</StyledTitle>
}


export default TitleH2