import React from "react";
import styled, {css} from "styled-components";

const StyledField = styled.div<{ [key: string]: boolean }>`
    padding: 5px;
    width: 70%;
    border: none;
    border-radius: 5px;
    ${({textarea}) => textarea && css`
        height: 200px;
        resize: none;
    `}
`

const Field = (props: any) => {

    return <StyledField {...props}/>
}


export default Field