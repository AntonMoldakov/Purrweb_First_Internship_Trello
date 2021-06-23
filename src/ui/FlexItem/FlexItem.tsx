import React, {HTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

export interface FlexItemProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode,
    $column?: boolean
}

const FlexItem = (props: FlexItemProps) => {
    const {$column, children} = props
    return <StyledFlexItem $column={$column}>{children}</StyledFlexItem>
}

export default FlexItem

const StyledFlexItem = styled.div<FlexItemProps>`
    ${({$column}) => $column && `
        margin: 0 .5rem;
        width: 300px;
        border-radius: 5px;
        text-align: center;
    `}
`
















