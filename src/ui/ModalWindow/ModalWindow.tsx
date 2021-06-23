import React, {ReactNode} from "react";
import styled from "styled-components";

const ModalWindow = ({children}: { children: ReactNode }) => {
    return <StyledModalWindow>{children}</StyledModalWindow>
}

export default ModalWindow

const StyledModalWindow = styled.div`
   text-align: center;
       width: 400px;
       height: fit-content;
       border-radius: 5px;
       background: #343434;
       max-height: 85vh;
       overflow: auto;

`







