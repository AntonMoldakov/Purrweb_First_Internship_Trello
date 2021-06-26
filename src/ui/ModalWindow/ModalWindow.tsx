import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const ModalWindow = (props: HTMLAttributes<HTMLDivElement>) => {
	return <StyledModalWindow {...props}>{props.children}</StyledModalWindow>
}

export default ModalWindow

const StyledModalWindow = styled.div`
position: absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
   text-align: center;
       width: 400px;
       height: fit-content;
       border-radius: 5px;
       background: #343434;
       max-height: 85vh;
       overflow: auto;

`







