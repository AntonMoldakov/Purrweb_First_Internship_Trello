import React from "react";
import {Field, Form} from "react-final-form";
import {Button, Error, Flex, Label} from "ui";

const required = (v: string) => (!v || v.trim() === '') ? 'required' : undefined


function AuthBody({onSubmit}: { onSubmit: (values: { name: string }) => void }) {
	return (
		<Form
			onSubmit={onSubmit}
			render={({handleSubmit}) => (
				<form onSubmit={handleSubmit}>
					<Flex $justifyContent={'space-between'} $margin={'0 0 .5rem'}>
						<Label $margin={'0 .5rem 0 0'}>Your name</Label>
						<Field name={'name'} validate={required}>
							{({input, meta}) => (
								<Flex $justifyContent={'space-between'}>
									<input className={'form__field'}  {...input} placeholder="name"/>
									{meta.error && meta.touched && <Error>{meta.error}</Error>}
								</Flex>
							)}
						</Field>

					</Flex>
					<Button $sub type="submit">Enter</Button>
				</form>
			)}/>
	)
}

export default AuthBody