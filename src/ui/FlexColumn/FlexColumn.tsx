import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const FlexColumn = ({children}: HTMLAttributes<HTMLDivElement>) => {
	return <StyledFlex>{children}</StyledFlex>
}

export default FlexColumn

const StyledFlex = styled.div`
    display: flex;
    width: 100%;
`







