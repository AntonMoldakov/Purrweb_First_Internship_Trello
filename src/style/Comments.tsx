import React from "react";
import styled from "styled-components";

const StyledComments = styled.div`
    overflow: auto;
    max-height: 30vh;
`

const Comments = (props: any) => {
    return <StyledComments {...props}/>
}

export default Comments








