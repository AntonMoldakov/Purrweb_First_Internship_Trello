import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const Footer = ({children}: HTMLAttributes<HTMLDivElement>) => {
	return <StyledFooterText>{children}</StyledFooterText>
}

export default Footer

const StyledFooterText = styled.div`
		display: flex;
		justify-content: space-between;
    margin-top: .5rem;
    font-size: 12px;
    color: #bcbcbc;
`
















