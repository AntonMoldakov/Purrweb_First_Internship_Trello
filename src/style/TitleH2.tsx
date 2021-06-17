import React from "react";
import styled, {css} from "styled-components";

const StyledTitle = styled.h2<{ [key: string]: boolean }>`
    margin: .5rem 0;
    color: white
`

const TitleH2 = (props: any) => {

    return <StyledTitle {...props}/>
}


export default TitleH2