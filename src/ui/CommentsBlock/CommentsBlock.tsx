import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const CommentsBlock = ({children}: HTMLAttributes<HTMLDivElement>) => {
	return <StyledComments>{children}</StyledComments>
}

export default CommentsBlock

const StyledComments = styled.div`
    overflow: auto;
    max-height: 30vh;
`








