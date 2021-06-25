import React from "react";
import {Field, Form} from "react-final-form";
import {Button, TitleH2, Flex, Error, Footer, FormItem} from "ui";
import {ICard, IChangeCard, IChangeComment, IComment, IDeleteCard, IDeleteComment} from "interface";
import {Comments} from 'components/index';

const required = (v: string) => (!v || v.trim() === '') ? 'required' : undefined


interface IProps {
	onSubmit: (values: { title: string, text: string }) => void,
	SendComment: (values: { comment: string }) => void,
	cards: {
		card: ICard,
		deleteCard: IDeleteCard,
		changeCard: IChangeCard,
	},
	comments: {
		comments: IComment[],
		changeComment: IChangeComment,
		deleteComment: IDeleteComment,
	},
}

function CardChange({cards, onSubmit, comments, SendComment}: IProps) {
	return (
		<div>
			<TitleH2>{cards.card.columnTitle}</TitleH2>
			<Form
				onSubmit={onSubmit}
				render={({handleSubmit}) => (
					<form onSubmit={handleSubmit}>
						<FormItem>
							<Field name={'title'} validate={required} defaultValue={cards.card.cardTitle}>
								{({input, meta}) => (
									<Flex>
										<input className={'form__field'}  {...input} type="title" placeholder="title"/>
										{meta.error && meta.touched && <Error>{meta.error}</Error>}
									</Flex>
								)}
							</Field>
						</FormItem>
						<FormItem>
							<Field className={'form__field textarea'} name={'text'} component={'textarea'}
							       placeholder={'text'} defaultValue={cards.card.cardContent}/>
						</FormItem>
						<Footer>
							<div>{cards.card.author}</div>
							<Button type="submit">Save</Button>
						</Footer>

					</form>
				)}
			/>
			<hr/>
			<Form
				onSubmit={SendComment}
				render={({handleSubmit}) => (
					<form onSubmit={handleSubmit}>
						<TitleH2>Comments</TitleH2>
						<Flex>
							<FormItem>
								<Field className={'form__field textarea'} name={'comment'}
								       component={'textarea'} placeholder={'comment'} validate={required}/>
							</FormItem>
							<Button type="submit">Send</Button>
						</Flex>
					</form>
				)}
			/>

			<div>
				<Comments comments={comments}/>
			</div>
		</div>
	)
}

export default CardChange