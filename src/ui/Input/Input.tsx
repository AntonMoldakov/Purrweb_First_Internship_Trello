import React, {InputHTMLAttributes} from "react";
import {ChangeEvent} from "react";
import styled from "styled-components";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	autoFocus?: boolean;
	value: string;
	onBlur?: () => void;
}


const Input = (props: InputProps) => {
	const {onChange, autoFocus, onBlur, value} = props
	return <StyledInput onChange={onChange} autoFocus={autoFocus} onBlur={onBlur} value={value}/>
}


export default Input

const StyledInput = styled.input`
    margin-bottom: .5rem;
    border-radius: 5px;
    border: none;
    font-size: 16px;
`
