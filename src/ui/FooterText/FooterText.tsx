import React, {HTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

export interface FooterTextProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode
}

const FooterText = (props: FooterTextProps) => {
	const {children} = props
	return <StyledFooterText>{children}</StyledFooterText>
}

export default FooterText

const StyledFooterText = styled.div<FooterTextProps>`
    margin-top: .5rem;
    font-size: 12px;
    color: #bcbcbc;
`
















