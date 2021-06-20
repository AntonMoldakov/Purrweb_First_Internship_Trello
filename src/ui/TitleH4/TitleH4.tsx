import React, {ReactNode} from "react";
import styled from "styled-components";

interface TitleProps {
    children: ReactNode,
    $cursor?: string,
    onClick?: () => void
}

const StyledTitle = styled.h4<TitleProps>`
    margin: 0 0 .5rem;
    color: white;
    $cursor: ${({$cursor}) => $cursor || 'auto'};
    
`


const TitleH4 = (props: TitleProps) => {
    const {$cursor, children, onClick} = props
    return <StyledTitle onClick={onClick} $cursor={$cursor}>{children}</StyledTitle>
}


export default TitleH4