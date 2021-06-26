import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const Overlay = (props: HTMLAttributes<HTMLDivElement>) => {
	return <StyledOverlay {...props}>{props.children}</StyledOverlay>
}

export default Overlay

const StyledOverlay = styled.div`
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
    
`








