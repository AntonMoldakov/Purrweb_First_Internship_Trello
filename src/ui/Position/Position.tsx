import React, {HTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

export interface PositionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode,
    $padding?: string,
    $margin?: string
}

const StyledPosition = styled.div<PositionProps>`
    margin: ${({$margin}) => $margin || 0};
    padding: ${({$padding}) => $padding || 0};
    
`

const Position = (props: PositionProps) => {
    const {children, $margin, $padding} = props
    return <StyledPosition $margin={$margin} $padding={$padding}>{children}</StyledPosition>
}

export default Position








