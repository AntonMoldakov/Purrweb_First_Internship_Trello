import React from "react";
import styled from "styled-components";

const StyledModalBody = styled.div`
   text-align: center;
       width: 400px;
       height: fit-content;
       border-radius: 5px;
       background: #343434;

`

const ModalBody = (props: any) => {
    return <StyledModalBody {...props}/>
}

export default ModalBody








