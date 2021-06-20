import React, {ReactNode} from "react";
import styled from "styled-components";

const StyledBlock = styled.div`
    display: block;
     
    margin: .5rem 0;
    padding:  .5rem;
    border: 1px solid darkgray;
    border-radius: 5px;
    text-align: start;
    
`

const Block = ({children}: { children: ReactNode }) => {
    return <StyledBlock>{children}</StyledBlock>
}

export default Block








