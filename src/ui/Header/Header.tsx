import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const Header = ({children}: HTMLAttributes<HTMLDivElement>) => {
	return <StyledHeader>{children}</StyledHeader>
}

export default Header

const StyledHeader = styled.div`
	padding: .5rem;
	align-items: start;
   display: flex;
   justify-content: space-between
`

