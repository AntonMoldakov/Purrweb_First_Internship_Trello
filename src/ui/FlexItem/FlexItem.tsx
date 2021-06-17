import React from "react";
import styled, {css} from "styled-components";

const StyledFlexItem = styled.div<{ [key: string]: boolean }>`
    ${({column}) => column && css`
        margin: 0 .5rem;
        width: 300px;
        border-radius: 5px;
        text-align: center;
    `}
`

const FlexItem = (props: any) => {
    return <StyledFlexItem {...props}/>
}

export default FlexItem

















