import React, {HTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

export interface FlexProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode,
    $alignItems?: string,
    $padding?: string,
    $margin?: string,
    $justifyContent?: string

}

const StyledFlex = styled.div<FlexProps>`
    display: flex;
    width: 100%;
    justify-content: ${({$justifyContent}) => $justifyContent || 'flex-start'};
    align-items: ${({$alignItems}) => $alignItems || 'stretch'};
    margin: ${({$margin}) => $margin || 0};
    padding: ${({$padding}) => $padding || 0};
    
`

const Flex = (props: FlexProps) => {
    const {children, $justifyContent, $alignItems, $margin, $padding} = props
    return <StyledFlex $justifyContent={$justifyContent} $alignItems={$alignItems}
                       $margin={$margin} $padding={$padding}>{children}</StyledFlex>
}

export default Flex








