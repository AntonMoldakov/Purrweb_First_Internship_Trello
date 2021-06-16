import React from "react";
import styled, {css} from "styled-components";

interface InterfaceStyles {
    [key: string]: boolean
}

const StyledTitle = styled.h4<InterfaceStyles>`
    margin: 0 0 .5rem;
    color: white;
    ${() => `
    cursor: ${({cursor}: InterfaceStyles) => cursor || 'auto'}
    `}
`


const TitleH4 = (props: any) => {

    return <StyledTitle {...props}/>
}


export default TitleH4