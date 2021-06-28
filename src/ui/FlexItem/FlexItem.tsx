import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const FlexItem = ({children}: HTMLAttributes<HTMLDivElement>) => {
	return <StyledFlexItem>{children}</StyledFlexItem>
}

export default FlexItem

const StyledFlexItem = styled.div`
        margin: 0 .5rem;
        width: 300px;
        border-radius: 5px;
        text-align: center;
`
















