import React from "react";
import styled, { css } from "styled-components";

interface InterfaceStyles {
    [key: string]: string
}

const StyledLabel = styled.div<InterfaceStyles>`

    margin: ${({margin}: InterfaceStyles) => margin || 0};
    padding: ${({padding}: InterfaceStyles) => padding || 0};
    
`

const Label = (props: any) => {
    return <StyledLabel {...props}/>
}

export default Label








