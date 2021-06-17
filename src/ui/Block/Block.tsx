import React from "react";
import styled, { css } from "styled-components";


const StyledBlock = styled.div`
    display: block;
     
    margin: .5rem 0;
    padding:  .5rem;
    border: 1px solid darkgray;
    border-radius: 5px;
    text-align: start;
    
`

const Block = (props: any) => {
    return <StyledBlock {...props}/>
}

export default Block








