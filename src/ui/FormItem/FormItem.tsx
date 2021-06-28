import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const FormItem = ({children}: HTMLAttributes<HTMLDivElement>) => {
	return <StyledFormItem>{children}</StyledFormItem>
}

export default FormItem

const StyledFormItem = styled.div`
	width: 100%;
	display: flex;
	justify-content: start;
  margin: 0 0 .5rem;
`
















