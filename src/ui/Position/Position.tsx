import React from "react";
import styled, { css } from "styled-components";

interface InterfaceStyles {
    [key: string]: string
}

const StyledPosition = styled.div<InterfaceStyles>`
    margin: ${({margin}: InterfaceStyles) => margin || 0};
    padding: ${({padding}: InterfaceStyles) => padding || 0};
    
`

const Position = (props: any) => {
    return <StyledPosition {...props}/>
}

export default Position








