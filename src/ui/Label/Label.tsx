import React, {HTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

export interface LabelProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode,
	$padding?: string,
	$margin?: string
}

const Label = (props: LabelProps) => {
	const {children, $margin, $padding} = props
	return <StyledLabel $margin={$margin} $padding={$padding}>{children}</StyledLabel>
}

export default Label

const StyledLabel = styled.div<LabelProps>`
    margin: ${({$margin}) => $margin || 0};
    padding: ${({$padding}) => $padding || 0};
`







