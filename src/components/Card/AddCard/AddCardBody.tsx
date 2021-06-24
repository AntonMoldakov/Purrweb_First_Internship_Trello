import React from "react";
import {Field, Form} from "react-final-form";
import {Button, Flex, Label, Error} from "ui";

const required = (v: string) => (!v || v.trim() === '') ? 'required' : undefined


function AddCardBody({onSubmit}: { onSubmit: (values: { title: string, text: string }) => void }) {
	return (
		<Form
			onSubmit={onSubmit}
			render={({handleSubmit}) => (
				<form onSubmit={handleSubmit}>
					<Flex $margin={'0 0 .5rem'}>
						<Label $margin={'0 1rem 0 0'}>Title</Label>
						<Field name={'title'} validate={required}>
              {({ input, meta }) => (
                <Flex $justifyContent={'space-between'}>
                  <input className={'form__field'}  {...input}  type="title" placeholder="title" />
                  {meta.error && meta.touched && <Error>{meta.error}</Error>}
                </Flex>
              )}
            </Field>
					</Flex>
					<Flex  $margin={'0 0 0.5rem'}>
						<Label $margin={'0 1rem 0 0'}>Text</Label>
						<Field className={'form__field textarea'} name={'text'} component={'textarea'}
						       placeholder={'text'}/>
					</Flex>

					<Button $sub type="submit">Create</Button>
				</form>
			)}/>
	)
}

export default AddCardBody