import React from "react";
import {Field, Form} from "react-final-form";
import {Button, Flex, Label, Error, FormItem} from "ui";

const required = (v: string) => (!v || v.trim() === '') ? 'required' : undefined


function AddCard({onSubmit}: { onSubmit: (values: { title: string, text: string }) => void }) {
	return (
		<Form
			onSubmit={onSubmit}
			render={({handleSubmit}) => (
				<form onSubmit={handleSubmit}>
					<FormItem>
						<Label>Title</Label>
						<Field name={'title'} validate={required}>
							{({input, meta}) => (
								<Flex>
									<input className={'form__field'}  {...input} type="title" placeholder="title"/>
									{meta.error && meta.touched && <Error>{meta.error}</Error>}
								</Flex>
							)}
						</Field>
					</FormItem>
					<FormItem>
						<Label>Text</Label>
						<Field className={'form__field textarea'} name={'text'} component={'textarea'}
						       placeholder={'text'}/>
					</FormItem>

					<Button type="submit">Create</Button>
				</form>
			)}/>
	)
}

export default AddCard