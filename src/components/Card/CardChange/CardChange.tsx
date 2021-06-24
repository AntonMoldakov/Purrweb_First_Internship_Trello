import React from "react";
import {Field, Form} from "react-final-form";
import {Button, TitleH2, Flex, Error} from "ui";
import CardComments from "../CardComments/CardComments";
import {IAddComment, IChangeComment, IComment, IDeleteComment} from "interface";

const required = (v: string) => (!v || v.trim() === '') ? 'required' : undefined


interface IProps {
	onSubmit: (values: { title: string, text: string }) => void,
	SendComment: (values: { comment: string }) => void,
	cardTitle: string,
	cardContent: string,
	comments: {
		comments: IComment[]
		addComment: IAddComment,
		changeComment: IChangeComment,
		deleteComment: IDeleteComment,
	},
}

function CardChange({onSubmit, comments, SendComment, cardTitle, cardContent}: IProps) {
	return (
		<div>
			<Form
				onSubmit={onSubmit}
				render={({handleSubmit}) => (
					<form onSubmit={handleSubmit}>
						<Flex $margin={'0 0 .5rem'}>
							<Field name={'title'} validate={required} defaultValue={cardTitle}>
								{({input, meta}) => (
									<Flex $justifyContent={'space-between'}>
										<input className={'form__field'}  {...input} type="title" placeholder="title"/>
										{meta.error && meta.touched && <Error>{meta.error}</Error>}
									</Flex>
								)}
							</Field>
						</Flex>
						<Flex $margin={'0 0 0.5rem'}>
							<Field className={'form__field textarea'} name={'text'} component={'textarea'}
							       placeholder={'text'} defaultValue={cardContent}/>
						</Flex>
						<Button $sub type="submit">Save</Button>
					</form>
				)}
			/>
			<hr/>
			<Form
				onSubmit={SendComment}
				render={({handleSubmit}) => (
					<form onSubmit={handleSubmit}>
						<TitleH2>Comments</TitleH2>
						<Flex $justifyContent={'space-between'} $alignItems={'flex-end'}>
							<Flex $justifyContent={'space-between'} $margin={'0 0 0.5rem'}>
								<Field className={'form__field textarea'} name={'comment'}
								       component={'textarea'} placeholder={'comment'} validate={required}/>
							</Flex>
							<Button $sub type="submit">Send</Button>
						</Flex>
					</form>
				)}
			/>

			<div>
				<CardComments comments={comments}/>
			</div>
		</div>
	)
}

export default CardChange