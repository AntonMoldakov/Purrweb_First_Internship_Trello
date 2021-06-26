import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const Flex = ({children}: HTMLAttributes<HTMLDivElement>) => {
	return <StyledFlex>{children}</StyledFlex>
}
export default Flex

const StyledFlex = styled.div`
    display: flex;
    width: 100%;  
    align-items: flex-end;  
`







