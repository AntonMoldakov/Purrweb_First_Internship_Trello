import React, {HTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

export interface PositionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode,
    $padding?: string,
    $margin?: string,
    $textAlign?: string
}

const Position = (props: PositionProps) => {
    const {children, $margin, $padding, $textAlign} = props
    return <StyledPosition $margin={$margin} $padding={$padding} $textAlign={$textAlign}>{children}</StyledPosition>
}

export default Position

const StyledPosition = styled.div<PositionProps>`
    margin: ${({$margin}) => $margin || 0};
    padding: ${({$padding}) => $padding || 0};  
    text-align: ${({$textAlign}) => $textAlign || 'left'};  
`







