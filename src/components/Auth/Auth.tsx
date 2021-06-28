import React, {useState} from 'react'
import {Button, Error, Flex, Label, Modal, FormItem} from "ui";
import {Field, Form} from "react-final-form";
import {useDispatch} from "react-redux";
import {sessionOperations} from 'state/ducks/session';


const required = (v: string) => (!v || v.trim() === '') ? 'required' : undefined

function Auth() {

	const dispatch = useDispatch()
	const userNameChange = (name: string) => {
		dispatch(sessionOperations.Auth(name))
	}


	const [isOpen, setIsOpen] = useState(true)
	const onSubmit = (values: { name: string }) => {
		userNameChange(values.name)
		setIsOpen(false)
	}

	if (isOpen) {
		return <Modal setIsOpen={setIsOpen} title={'Auth'}>
			<Form
				onSubmit={onSubmit}
				render={({handleSubmit}) => (
					<form onSubmit={handleSubmit}>
						<FormItem>
							<Label>Your name</Label>
							<Field name={'name'} validate={required}>
								{({input, meta}) => (
									<Flex>
										<input className={'form__field'}  {...input} placeholder="name"/>
										{meta.error && meta.touched && <Error>{meta.error}</Error>}
									</Flex>
								)}
							</Field>

						</FormItem>
						<Button type="submit">Enter</Button>
					</form>
				)}/>
		</Modal>

	}
	return <div/>

}


export default Auth