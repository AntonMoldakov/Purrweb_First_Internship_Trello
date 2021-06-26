import React, {ReactNode} from "react";
import './Modal.css'
import {ModalContent, Overlay, ModalWindow, TitleH2, Cross, Header} from "ui";

interface IProps {
	setIsOpen: (value: boolean) => void,
	title?: string,
	children: ReactNode
}

function Modal({setIsOpen, title, children}: IProps) {
	return (<>
			<Overlay onClick={() => setIsOpen(false)}/>
			<ModalWindow>
				<Header>
					<div>
						{title ? <TitleH2>{title}</TitleH2> : null}
					</div>
					<Cross onClick={() => setIsOpen(false)}/>
				</Header>
				<ModalContent>
					{children}
				</ModalContent>
			</ModalWindow>
		</>
	)
}

export default Modal

