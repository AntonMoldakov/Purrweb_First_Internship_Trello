import React, {ReactNode} from "react";
import './Modal.css'
import {ModalContent, ModalExternal, ModalWindow, TitleH2, Cross} from "ui";

interface IProps {
	setIsOpen: (value: boolean) => void,
	title?: string,
	children: ReactNode
}

function Modal({setIsOpen, title, children}: IProps) {
	return (
		<ModalExternal>
			<ModalWindow>
				<Cross onClick={() => setIsOpen(false)}/>
				{title ? <TitleH2>title</TitleH2> : null}
				<ModalContent>
					{children}
				</ModalContent>
			</ModalWindow>
		</ModalExternal>
	)
}

export default Modal

