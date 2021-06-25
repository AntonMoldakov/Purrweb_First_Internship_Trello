import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const Label = ({children}: HTMLAttributes<HTMLLabelElement>) => {
	return <StyledLabel>{children}</StyledLabel>
}
export default Label

const StyledLabel = styled.div`
    margin: 0 1rem 0 0;
`







