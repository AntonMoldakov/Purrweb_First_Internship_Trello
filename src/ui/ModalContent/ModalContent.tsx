import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const ModalContent = ({children}: HTMLAttributes<HTMLDivElement>) => {
	return <StyledModalContent>{children}</StyledModalContent>
}

export default ModalContent

const StyledModalContent = styled.div`
    padding: .5rem 1.5rem;  
`







