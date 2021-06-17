import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    padding-top: 1rem;
    margin: 0 auto;
    width: 90%;
    & h1 {
    color: white;
    text-align: center;
    margin-bottom: 1rem
    }
`

const Wrapper = (props:any) => {
    return <StyledWrapper {...props}/>
}

export default Wrapper