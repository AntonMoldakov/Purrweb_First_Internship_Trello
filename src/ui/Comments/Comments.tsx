import React, {ReactNode} from "react";
import styled from "styled-components";

const StyledComments = styled.div`
    overflow: auto;
    max-height: 30vh;
`

const Comments = ({children}: { children: ReactNode }) => {
    return <StyledComments>{children}</StyledComments>
}

export default Comments








