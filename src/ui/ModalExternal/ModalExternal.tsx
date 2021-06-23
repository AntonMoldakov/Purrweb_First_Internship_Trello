import React, {ReactNode} from "react";
import styled from "styled-components";

const ModalExternal = ({children}: { children: ReactNode }) => {
    return <StyledModals>{children}</StyledModals>
}

export default ModalExternal

const StyledModals = styled.div`

    padding-top: 5rem;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    
`








